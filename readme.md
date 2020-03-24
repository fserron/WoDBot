# WoD Bot for Discord

## English
Dice rolling bot for WoD/Cofd/Exalted and other Storyteller/Storytelling systems (D10 w/Success).
Up to this point, it only works with Exalted mechanics, but the basics are in place to expand its functionality to other games easily.

This bot's idea is to pre-load the rules for a game, so that it can be easier to roll and not waste time with difficult commands for each roll.
Since D20 and Storyteller/Storytelling are pretty different, I thought that there should be a bot that dedicates exclusively to the needs of the latter system.

Another thing that this bot does that others don't is that it accompanies the rolls with an emoji, according to the results. Silly detail, but I thought it would be a nice feature.

To add this bot to your server, enter here and select your server: https://discordapp.com/api/oauth2/authorize?client_id=691735731974045756&permissions=8&scope=bot

### Rules
These rules are always visible via ".roll help" command.

* **Basic command:** .roll [Dice amount]. *Example: .roll 10 -> Rolls 10 dice and duplicates 10s.*
* **Double success:** d[Value to duplicate]. *Example: .roll 10 d8 -> Rolls 10 dice and duplicate success on 8s, 9s and 10s.*
* **Reroll:** r[Values to reroll] *Example: .roll 10 r123 -> Rolls 10 dice and rerolls all instances of 1s, 2s and 3s.*
* **Automatic success:** a[amomunt of successes] *Example: .roll 10 a3 -> Rolls 10 dice and adds 3 successes to the result.*
* **Target number:** t[Value of success] *Example: .roll 10 t4 -> Rolls 10 dice and marks 4s and above as successes.*
* **Cancel successes:** c[Cancelling values] *Example: .roll 10 c1 -> Rolls 10 dice and cancels a success per each 1.*
* **No duplicates:** no10 *Example: .roll 10 no10 -> Rolls 10 dice and does not duplicate 10s.*
* **Custom success:** cs[Value of success] *Example: .roll 10 cs5 -> Rolls 10 dice and marks 5s as successes.*

### To do
* Currently, it adds an emoji besides the result, according to the success level of the roll. However, in the future, i'd like to upgrade it so that it reacts with animated gifs, with the giphy plugin, choosing a random gif within a category (For example, in case of a botch it could display a "sadness" one, in case of exceptional success it could display a "congratulations" one, etc...)
* Create the functionality to set a game system with its rules, so that it applies them to all future rolls. It already has the structure to do it, but the functionality still has to be created.
* See if there's a way to print the results in a better way. Coloring would be ideal, but my initial research proved futile.

## Español
Bot tirador de dados para WoD/Cofd/Exalted y otros sistemas de Narrador (D10 con exitos).
Hasta este punto, solo funciona con las mecanicas de Exalted, pero la base esta creada como para facilmente expandir su funcionalidad a otros juegos.

La idea de este bot es que pre-cargue las reglas de un juego, de forma de hacer los comandos lo mas simple posibles y no tener que andar customizando cada tirada con comandos demasiado largos.
Debido a que los sistemas D20 y los narrativos son bastante diferentes, me parecio que no hay un bot que se dedique exclusivamente a las necesidades de estos ultimos.

Otra cosa que hace adicional a otros bots es acompañar la tirada con un emoji. Detalle tonto, pero me parece un lindo plus.

Para añadir este bot a tu servidor, entra aqui y elige tu servidor: https://discordapp.com/api/oauth2/authorize?client_id=691735731974045756&permissions=8&scope=bot

### Reglas de uso
Estas reglas son siempre visibles mediante el comando ".roll help"

* **Comando basico:** .roll [Cantidad de dados]. *Ejemplo: .roll 10 -> Tira 10 dados y duplica los 10.*
* **Duplica exitos:** d[Valor a duplicar]. *Ejemplo: .roll 10 d8 -> Tira 10 dados y duplica los exitos en los 8, 9 y 10.*
* **Re-tirar:** r[Valores a re-tirar] *Ejemplo: .roll 10 r123 -> Tira 10 dados y retira todas las instancias de 1, 2 y 3.*
* **Exitos automaticos:** a[Cantidad de exitos] *Ejemplo: .roll 10 a3 -> Tira 10 dados y añade 3 exitos al resultado.*
* **Numero objetivo:** t[Valor de exito] *Ejemplo: .roll 10 t4 -> Tira 10 dados e identifica los 4 y superiores como éxitos.*
* **Cancelar éxitos:** c[Valores que cancela] *Ejemplo: .roll 10 c1 -> Tira 10 dados y cada 1 cancelará un éxito.*
* **Sin duplicados:** no10 *Ejemplo: .roll 10 no10 -> Tira 10 dados y no duplica los 10.*
* **Éxito customizado:** cs[Valor del éxito] *Ejemplo: .roll 10 cs5 -> Tira 10 dados e identifica los 5 como exitos.*

### Pendientes
* Actualmente pone un emoji al lado de un resultado, de acuerdo con el nivel de exito de la tirada. Sin embargo, en un futuro, me gustaria mejorarlo para que reaccione con gifs animados, con el plugin de giphy y eligiendo gifs dentro de una categoria al azar (Por ejemplo: En caso de botch podria ser "tristeza", en caso de exito excepcional "enhorabuena", etc...)
* Crear la funcionalidad de setear un sistema con sus reglas, que aplique para todas las futuras tiradas. Ya tiene la estructura como para hacerlo, pero hay que crear la funcionalidad.
* Ver si hay alguna manera de formatear mejor los resultados. Agregarle color seria ideal, pero una busqueda inicial no resulto fructifera...