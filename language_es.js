//Errores
const ERROR_MULTIPLE_DICE_NUMBERS = 'Error: Se detectaron multiples cantidades de dados. Usa "@wodbot help" para ver todos los posibles comandos.';
const ERROR_NO_DICE_NUMBER = 'Error: No se detecto la cantidad de dados. Usa "@wodbot help" para ver todos los posibles comandos.';
const ERROR_COMMAND_WITHOUT_VALUE = 'Error: Se detecto un comando sin numero. Usa "@wodbot help" para ver todos los posibles comandos.';
const ERROR_INVALID_COMMAND = 'Error: Se detectó un comando inválido. Usa "@wodbot help" para ver todos los posibles comandos.';
const ERROR_EXCEED_MAX_DICE_AMOUNT = 'Error: Se excedio la maxima cantidad de dados permitidos. Intenta con un numero menor.';
const ERROR_EXCEED_REROLL_AMOUNT = 'Error: Se excedio la maxima cantidad de dados re-tirados. Intenta con un numero menor de re-tiradas.';

//Mensajes de resultado
const MESSAGE_RESULT_PREFIX = 'tu tirada fue: ';
const MESSAGE_RESULT_SUFFIX = ', ¡Sacaste ';
const MESSAGE_RESULT_SUFFIX_FAIL = ', ¡Fallaste!';
const MESSAGE_RESULT_GRADE_BOTCH_SINGLE = ' botch!';
const MESSAGE_RESULT_GRADE_BOTCH_MULTIPLE = ' botches!';
const MESSAGE_RESULT_GRADE_SUCCESS_SINGLE = ' éxito!';
const MESSAGE_RESULT_GRADE_SUCCESS_MULTIPLE = ' éxitos!';

//Mensajes de ayuda
const MESSAGE_HELP_COMMANDS = 'Comandos disponibles';
const MESSAGE_HELP_BASIC_TITLE = 'Comando basico: .roll [Cantidad de dados]';
const MESSAGE_HELP_BASIC_EXAMPLE = 'Ejemplo: .roll 10 -> Tira 10 dados y duplica los 10.';
const MESSAGE_HELP_DOUBLE_TITLE = 'Duplica exitos: d[Valor a duplicar]';
const MESSAGE_HELP_DOUBLE_EXAMPLE = 'Ejemplo: .roll 10 d8 -> Tira 10 dados y duplica los exitos en los 8, 9 y 10.';
const MESSAGE_HELP_REROLL_TITLE = 'Re-tirar: r[Valores a re-tirar]';
const MESSAGE_HELP_REROLL_EXAMPLE = 'Ejemplo: .roll 10 r123 -> Tira 10 dados y retira todas las instancias de 1, 2 y 3.';
const MESSAGE_HELP_AUTO_TITLE = 'Exitos automaticos: a[Cantidad de exitos]';
const MESSAGE_HELP_AUTO_EXAMPLE = 'Ejemplo: .roll 10 a3 -> Tira 10 dados y añade 3 exitos al resultado.';
const MESSAGE_HELP_TARGET_TITLE = 'Numero objetivo: t[Valor de exito]';
const MESSAGE_HELP_TARGET_EXAMPLE = 'Ejemplo: .roll 10 t4 -> Tira 10 dados e identifica los 4 y superiores como éxitos.';
const MESSAGE_HELP_CANCEL_TITLE = 'Cancelar éxitos: c[Valores que cancela]';
const MESSAGE_HELP_CANCEL_EXAMPLE = 'Ejemplo: .roll 10 c1 -> Tira 10 dados y cada 1 cancelará un éxito.';
const MESSAGE_HELP_NO10_TITLE = 'Sin duplicados: no10';
const MESSAGE_HELP_NO10_EXAMPLE = 'Ejemplo: .roll 10 no10 -> Tira 10 dados y no duplica los 10.';
const MESSAGE_HELP_CUSTOM_TITLE = 'Éxito customizado: cs[Valor del éxito]';
const MESSAGE_HELP_CUSTOM_EXAMPLE = 'Ejemplo: .roll 10 cs5 -> Tira 10 dados e identifica los 5 como exitos.';
const MESSAGE_HELP_FOOTER = 'Para información adicional y como añadirlo a tu canal, visita https://github.com/fserron/WoDBot';

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
    MESSAGE_RESULT_GRADE_BOTCH_SINGLE: MESSAGE_RESULT_GRADE_BOTCH_SINGLE,
    MESSAGE_RESULT_GRADE_BOTCH_MULTIPLE: MESSAGE_RESULT_GRADE_BOTCH_MULTIPLE,
    MESSAGE_RESULT_GRADE_SUCCESS_SINGLE: MESSAGE_RESULT_GRADE_SUCCESS_SINGLE,
    MESSAGE_RESULT_GRADE_SUCCESS_MULTIPLE: MESSAGE_RESULT_GRADE_SUCCESS_MULTIPLE,

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
    MESSAGE_HELP_CUSTOM_EXAMPLE: MESSAGE_HELP_CUSTOM_EXAMPLE,
    MESSAGE_HELP_CANCEL_TITLE: MESSAGE_HELP_CANCEL_TITLE,
    MESSAGE_HELP_CANCEL_EXAMPLE: MESSAGE_HELP_CANCEL_EXAMPLE,
    MESSAGE_HELP_FOOTER: MESSAGE_HELP_FOOTER
}