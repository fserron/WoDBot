const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./config.js");
const labels = require("./language_es.js");

//Settings for the RPG system
var dieType = 10;
var targetNumber = 7;
var doubles = 10;
var failure = 1;
var amount = 0;
var rerollValues = [];
var autoSuccess = 0;
var doubleOnly = 0; //Is it really used?
var customSuccess = [];
var successes = 0;
var botches = 0;
var cancelValues = [];

client.login(config.loginToken);

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  console.log('Message received: ' + msg.content);

  try {
    if(msg.author.bot) return;

    if (msg.content.startsWith(".roll")) {
      if (msg.content.startsWith(".roll help")){
        console.log('Called for help!');
        const exampleEmbed = new Discord.MessageEmbed()
          .setColor(config.MESSAGE_HELP_COLOR)
          .setTitle(config.MESSAGE_HELP_TITLE)
          .setURL(config.MESSAGE_HELP_URL)
          .setDescription(labels.MESSAGE_HELP_COMMANDS)
          .addField(labels.MESSAGE_HELP_BASIC_TITLE, labels.MESSAGE_HELP_BASIC_EXAMPLE, false)
          .addField(labels.MESSAGE_HELP_DOUBLE_TITLE, labels.MESSAGE_HELP_DOUBLE_EXAMPLE, false)
          .addField(labels.MESSAGE_HELP_REROLL_TITLE, labels.MESSAGE_HELP_REROLL_EXAMPLE, false)
          .addField(labels.MESSAGE_HELP_AUTO_TITLE, labels.MESSAGE_HELP_AUTO_EXAMPLE, false)
          .addField(labels.MESSAGE_HELP_TARGET_TITLE, labels.MESSAGE_HELP_TARGET_EXAMPLE, false)
          .addField(labels.MESSAGE_HELP_CANCEL_TITLE, labels.MESSAGE_HELP_CANCEL_EXAMPLE, false)
          .addField(labels.MESSAGE_HELP_NO10_TITLE, labels.MESSAGE_HELP_NO10_EXAMPLE, false)
          .addField(labels.MESSAGE_HELP_CUSTOM_TITLE, labels.MESSAGE_HELP_CUSTOM_EXAMPLE, false)
          .setFooter(labels.MESSAGE_HELP_FOOTER, config.IMAGE_WOD_THUMB);

          msg.reply(exampleEmbed);
      } else {
        init();
  
        var error = verify(msg.content);
  
        if (error === undefined) {
          var result = [];
          
          result = roll();
          result.sort(function(a, b){return a - b});
    
          console.log(result);
          var resultString = formatResult(result);
          console.log(resultString);
  
          msg.reply(resultString);
        } else {
          console.log('Error!');
          msg.reply(error);
        }
      }
    }
  } catch(e) {
    console.log('Exception!');
    console.error(e);
    msg.reply(e);
  }

});

function init(){
  amount = 0;
  rerollValues = [];
  autoSuccess = 0;
  doubleOnly = 0;
  customSuccess = [];
  targetNumber = 7;
  doubles = 10;
  successes = 0;
  botches = 0;
  cancelValues = [];
}

function verify(message){
  var tokens = message.split(" ");

  //Eliminates the first element of the array (.roll)
  tokens.shift();

  console.log(tokens);

  //We verify that the amount of dice is set
  for (var token of tokens){  
    //Ignoring additional spaces
    if (token === '') continue;
    console.log('Current token: ' + token);
    if (!isNaN(token)){
      console.log('Numerical token. Does it already exists? ' + (amount > 0));
      if (amount <= 0) {
        if (token > config.MAX_DICE) {
          return labels.ERROR_EXCEED_MAX_DICE_AMOUNT;
        }
        amount = token;
      } else { //If there were more than 1 number only token...
        return labels.ERROR_MULTIPLE_DICE_NUMBERS;
      }
    } else {
      //Extracting the command from the token
      var numIndex = -1;
      for (var x = 0, c=''; c = token.charAt(x); x++) { 
        if (!isNaN(c) && numIndex < 0) {
          numIndex = x;
        }
      }

      if (numIndex < 1) {
        return labels.ERROR_COMMAND_WITHOUT_VALUE;
      }
  
      //Verifying that no invalid option was sent
      var command = token.substring(0, numIndex);
      console.log('Read command: ' + command);
      if (command === 'd') {
        if (doubles === 0) {
          return labels.ERROR_CONFLICTING_COMMANDS;
        }
        doubles = token.substring(numIndex, token.length);
        if (doubles > 9) {
          return labels.ERROR_ABOVE_MAX_DUPLICATE;
        }
      } else if (command === 'a'){
        autoSuccess = token.substring(numIndex, token.length);
      } else if (command === 't'){
        targetNumber = token.substring(numIndex, token.length);
      } else if (command === 'r'){
        rerollFaces = token.substring(numIndex, token.length);
        for (rr of rerollFaces.split("")){
          rerollValues.push(parseInt(rr));
        }
      } else if (command === 'c'){
        var cancelFaces = token.substring(numIndex, token.length);
        for (cf of cancelFaces.split("")){
          cancelValues.push(parseInt(cf));
        }
      } else if (command === 'no'){
        if (doubles !== 10) {
          return labels.ERROR_CONFLICTING_COMMANDS;
        } else {
          doubles = 0;
        }
      } else if (command === 'cs'){
        var csFaces = token.substring(numIndex, token.length);
        for (cs of csFaces.split("")){
          customSuccess.push(parseInt(cs));
        }
      } else {
          return labels.ERROR_INVALID_COMMAND;
      }
    }
  }

  //If the dice amount isn't present
  if (amount <= 0) {
    return labels.ERROR_NO_DICE_NUMBER;
  }
}

function roll() {
  var diceRoll;
  //First, we resolve all the rerolls
  if (rerollValues.length > 0) {
    diceRoll = reroll(amount);
  } else {
    diceRoll = simpleRoll(amount);
  }

  //Once we have the full results, we calculate it's values
  console.info('Calculating results');
  calculateResults(diceRoll);

  return diceRoll;
}

function simpleRoll(amount) {
  var results = [];
  for (var i = 0; i < amount; i++) {
    var dieValue = rollDie();
    results.push(dieValue);
  }

  return results;
}

function reroll(amtDice) {
  var results = [];
  var rerollAmount = 0;
  for (var i = 0; i < amtDice; i++) {
    var dieValue = rollDie();
    if (rerollValues.includes(dieValue)){
      rerollAmount++;
    }
    results.push(dieValue);
  }

  if (rerollAmount > 0) {
    var rerollResults = reroll(rerollAmount);
    for (rr of rerollResults) results.push(rr);
    if (results.length > config.MAX_DICE) {
      throw labels.ERROR_EXCEED_REROLL_AMOUNT;
    }
  }

  return results;
}

function rollDie(){
  return Math.floor(Math.random() * dieType + 1);
}

function calculateResults(diceRoll) {
  for (die of diceRoll) {
    //If the die greater or equal to the target number or if it's a custom success
    if (die >= targetNumber || customSuccess.includes(die)) {
      successes++;
      //Doubling successes
      if (die >= doubles && doubles !== 0) {
        successes++;
      }
    }
    //If there are botches
    if (die === failure) {
      botches++;
    }
    //Validating if there is any success cancelling values
    if (cancelValues.includes(die)) {
      successes--;
    }
  }

  successes += parseInt(autoSuccess);
}

function formatResult(diceRoll) {
  var resultString = '';
  console.log('rerollValues: ' + rerollValues);
  console.log('failure: ' + failure);
  console.log('targetNumber: ' + targetNumber);
  console.log('customSuccess: ' + customSuccess);
  console.log('doubles: ' + doubles);
  for (die of diceRoll) {
    if (rerollValues.includes(die)) {
      resultString += '~~' + die + '~~';
    } else if (die === failure) {
      resultString += '*' + die + '*';
    } else if (die >= targetNumber || customSuccess.includes(die)) {
      if (die >= doubles && doubles !== 0) {
        resultString += '__**' + die + '**__';
      } else {
        resultString += '**' + die + '**';
      }
    } else {
      resultString += die;
    }

    resultString += ", ";
  }

  //Removing the last separator
  resultString = resultString.substring(0, resultString.length - 2);

  var resultGrade = '';
  var resultNumber = '';
  var resultSuffix = labels.MESSAGE_RESULT_SUFFIX;
  var emoji;
  console.log('successes: ' + successes);
  console.log('botches: ' + botches);
  if (successes < 0){
    if (botches > 1){
      resultGrade = labels.MESSAGE_RESULT_GRADE_BOTCH_MULTIPLE;
    } else {
      resultGrade = labels.MESSAGE_RESULT_GRADE_BOTCH_SINGLE;
    }
    resultNumber = botches;
    emoji = ' :scream:'
  } else if (successes > 0) {
    if (successes > 1){
      resultGrade = labels.MESSAGE_RESULT_GRADE_SUCCESS_MULTIPLE;
    } else {
      resultGrade = labels.MESSAGE_RESULT_GRADE_SUCCESS_SINGLE;
    }
    resultNumber = successes;
    if (successes > amount) {
      emoji = ' :star_struck:'
    } else {
      emoji = ' :grin:'
    }
  } else {
    //If there were no successes, but there were cancel values, then it's a failure regardless of the amount of botches
    if (cancelValues.length > 0) {
      resultSuffix = labels.MESSAGE_RESULT_SUFFIX_FAIL;
      emoji = ' :weary:'
    } else {
      //Otherwise, if there were no cancel values, we check for botches, as normal
      if (botches > 0) {
        if (botches > 1){
          resultGrade = labels.MESSAGE_RESULT_GRADE_BOTCH_MULTIPLE;
        } else {
          resultGrade = labels.MESSAGE_RESULT_GRADE_BOTCH_SINGLE;
        }
        resultNumber = botches;
        emoji = ' :scream:'
      } else {
        resultSuffix = labels.MESSAGE_RESULT_SUFFIX_FAIL;
        emoji = ' :weary:'
      }
    }
  }

  var finalResults = labels.MESSAGE_RESULT_PREFIX + resultString + resultSuffix + resultNumber + resultGrade + emoji;

  return finalResults;
}