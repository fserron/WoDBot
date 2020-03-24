//Errors
const ERROR_MULTIPLE_DICE_NUMBERS = 'Error: Multiple dice numbers detected. Use "@wodbot help" to see all posible commands.';
const ERROR_NO_DICE_NUMBER = 'Error: No dice number detected. Use "@wodbot help" to see all posible commands.';
const ERROR_COMMAND_WITHOUT_VALUE = 'Error: Command without number detected. Use "@wodbot help" to see all posible commands.';
const ERROR_INVALID_COMMAND = 'Error: Invalid command detected. Use "@wodbot help" to see all posible commands.';
const ERROR_EXCEED_MAX_DICE_AMOUNT = 'Error: Exceeded maximum amount of dice allowed. Try a lower number.';
const ERROR_EXCEED_REROLL_AMOUNT = 'Error: Exceeded maximum amount of dice rerolled. Try a lower number of rerolls.';

//Result messages
const MESSAGE_RESULT_PREFIX = 'your roll was: ';
const MESSAGE_RESULT_SUFFIX = ', you got ';
const MESSAGE_RESULT_SUFFIX_FAIL = ', you failed!';
const MESSAGE_RESULT_GRADE_BOTCH = ' botches!';
const MESSAGE_RESULT_GRADE_SUCCESS = ' successes!';

//Help messages
const MESSAGE_HELP_COMMANDS = 'Available Commands';
const MESSAGE_HELP_BASIC_TITLE = 'Basic command: .roll [Dice amount]';
const MESSAGE_HELP_BASIC_EXAMPLE = 'Example: .roll 10 -> Rolls 10 dice and duplicates 10s.';
const MESSAGE_HELP_DOUBLE_TITLE = 'Double success: d[Value to duplicate]';
const MESSAGE_HELP_DOUBLE_EXAMPLE = 'Example: .roll 10 d8 -> Rolls 10 dice and duplicate success on 8s, 9s and 10s.';
const MESSAGE_HELP_REROLL_TITLE = 'Reroll: r[Values to reroll]';
const MESSAGE_HELP_REROLL_EXAMPLE = 'Example: .roll 10 r123 -> Rolls 10 dice and rerolls all instances of 1s, 2s and 3s.';
const MESSAGE_HELP_AUTO_TITLE = 'Automatic success: a[amomunt of successes]';
const MESSAGE_HELP_AUTO_EXAMPLE = 'Example: .roll 10 a3 -> Rolls 10 dice and adds 3 successes to the result.';
const MESSAGE_HELP_TARGET_TITLE = 'Target number: t[Value of success]';
const MESSAGE_HELP_TARGET_EXAMPLE = 'Example: .roll 10 t4 -> Rolls 10 dice and marks 4s and above as successes.';
const MESSAGE_HELP_NO10_TITLE = 'No duplicates: no10';
const MESSAGE_HELP_NO10_EXAMPLE = 'Example: .roll 10 no10 -> Rolls 10 dice and does not duplicate 10s.';
const MESSAGE_HELP_CUSTOM_TITLE = 'Custom success: cs[Value of success]';
const MESSAGE_HELP_CUSTOM_EXAMPLE = 'Example: .roll 10 cs5 -> Rolls 10 dice and marks 5s as  successes.';

module.exports = {
    ERROR_MULTIPLE_DICE_NUMBERS: ERROR_MULTIPLE_DICE_NUMBERS,
    ERROR_NO_DICE_NUMBER: ERROR_NO_DICE_NUMBER,
    ERROR_COMMAND_WITHOUT_VALUE: ERROR_COMMAND_WITHOUT_VALUE,
    ERROR_INVALID_COMMAND: ERROR_INVALID_COMMAND,
    ERROR_EXCEED_MAX_DICE_AMOUNT: ERROR_EXCEED_MAX_DICE_AMOUNT,
    ERROR_EXCEED_REROLL_AMOUNT: ERROR_EXCEED_REROLL_AMOUNT,

    MESSAGE_RESULT_PREFIX: MESSAGE_RESULT_PREFIX,
    MESSAGE_RESULT_SUFFIX: MESSAGE_RESULT_SUFFIX,
    MESSAGE_RESULT_SUFFIX_FAIL: MESSAGE_RESULT_SUFFIX_FAIL,
    MESSAGE_RESULT_GRADE_BOTCH: MESSAGE_RESULT_GRADE_BOTCH,
    MESSAGE_RESULT_GRADE_SUCCESS: MESSAGE_RESULT_GRADE_SUCCESS,

    MESSAGE_HELP_COMMANDS: MESSAGE_HELP_COMMANDS,
    MESSAGE_HELP_BASIC_TITLE: MESSAGE_HELP_BASIC_TITLE,
    MESSAGE_HELP_BASIC_EXAMPLE: MESSAGE_HELP_BASIC_EXAMPLE,
    MESSAGE_HELP_DOUBLE_TITLE: MESSAGE_HELP_DOUBLE_TITLE,
    MESSAGE_HELP_DOUBLE_EXAMPLE: MESSAGE_HELP_DOUBLE_EXAMPLE,
    MESSAGE_HELP_REROLL_TITLE: MESSAGE_HELP_REROLL_TITLE,
    MESSAGE_HELP_REROLL_EXAMPLE: MESSAGE_HELP_REROLL_EXAMPLE, 
    MESSAGE_HELP_AUTO_TITLE: MESSAGE_HELP_AUTO_TITLE,
    MESSAGE_HELP_AUTO_EXAMPLE: MESSAGE_HELP_AUTO_EXAMPLE,
    MESSAGE_HELP_TARGET_TITLE: MESSAGE_HELP_TARGET_TITLE,
    MESSAGE_HELP_TARGET_EXAMPLE: MESSAGE_HELP_TARGET_EXAMPLE,
    MESSAGE_HELP_NO10_TITLE: MESSAGE_HELP_NO10_TITLE,
    MESSAGE_HELP_NO10_EXAMPLE: MESSAGE_HELP_NO10_EXAMPLE,
    MESSAGE_HELP_CUSTOM_TITLE: MESSAGE_HELP_CUSTOM_TITLE,
    MESSAGE_HELP_CUSTOM_EXAMPLE: MESSAGE_HELP_CUSTOM_EXAMPLE
}