# OSE-helper module

created by Grim.

An unimaginatively named module that aims to assist with light, time, and resource management. For use in games using the Old School Essentials system for FoundryVTT.
This module provides several macros found in a compendium named "OSE-helper Macros".

### usage

Upon initial load a journal entry will be created using the default name of "Turn Count". This journal will be populated with several statistics reflecting number of turns elapsed this session, since that last rest was taken, and the total number of turns so far in the game. Using the provided "OSE-helper Dungeon Turn (base)" macro the Referee can advance the game time in standard 10 minute turn intervals. The "Turn Count" journal will be updated to reflect the current counts.

The provided "OSE-helper reset session count" will reset the session count to zero.
The provided "OSE-helper reset all counts" macro will reset all counts.
The provided "OSE-helper Rest" macro will reset the turns since last rest count to zero.

---

### Using the OSE-helper Dungeon Turn Macro

Once imported into your game, edit the OSE-helper Dungeon Turn macro. You will need to edit the variables described below with the information detailed. Once that is complete you may rename the macro to whatver you wish.

Inside the OSE-helper Dungeon Turn Base you will find the following code snippet:

```
{

    proc: 0, //number: how often in turns to roll for random encounter

    rollTarget: 2, //number to roll under to trigger a table roll

    tableName: 'insert table name here', //name of random encounter table to use

    reactTable: 'insert table name here', //name of reaction table to use

    reactRoll: false, //true: will roll reaction table, false: no roll,

    tableRoll: false  //true: will roll encounter table, false: no roll,

}
```

- proc: This sets how often to roll on the determined random encounter table. Must be a number greater than 0 to function correctly.
- rollTarget: Roll equal to or under this number to trigger a table roll. Must be a number greater than 0
- tableName: Replace the name witin the quotes with the name of the random encounter table you wish to use. The name needs to match exactly case and punctuation included to function correctly.
- reactTable: Replace the name witin the quotes with the name of the reaction table you wish to use (if any). The name needs to match exactly case and punctuation included to function correctly.
- reactRoll: If set to false the reaction roll will be skipped. Set to true to roll on reaction table.
- tableRoll: if set to false the random encounter table roll will be skipped. Set to true to roll for random encounters. Note: if tableRoll is set to false the reaction roll will also be skipped.

When used, the Dungeon Turn macro will advance the game time by 10 minutes and update the turn counts by one. It will then check the rest count,. At 3 turns since last rest a chat message will be created warning the players that they need to rest, at +5 turns the worning becomes red. If the players progress beyond 1 hour without rest, the chat message will then include the relevant penalties, repeating this added text every 5 subsequent turns.

The macro will also check to see if random encounter rolls are active, if so itt will check to see if the number of turns since the last roll is greater than the proc interval (see above), if it is, the macro will roll on the provided table, and if set, roll for reaction on the provided table.

---

### Player Lights

To activate a light, a player needs access to the "OSE-helper Light On " macro. To use a player token must be selected. When clicked the macro will check for the existence of the corresponding light type item on the characters sheet, if it exists, and has and uses left it will light that light item updating the selected token light settings.
note: Several light items have been provided in the OSE-helper Items compendium.
If the macro has been used to light a light source, the light can be extinguished by clicking the macro again, preserving any remaning duration until lit again by clicking the Light On macro and selecting the corresponding light type.

If a player has a light source that is currently lit, each time the game time updates the elapsed time is subtracted from that lights duration.
if the light duration is 0 the light is extinguished and the item count for that light type is reduced by one. If the light type has no more uses it is deleted, in the case of lanterns, only the oil item is deleted.

---

### Ration Report

The OSE-helper Ration Report macro

```
const data = {
    character:['insert', 'character names', 'here'],
    retainer: ['insert', 'retainer names', 'here'],
		whisper: true
}
oseRationReport(data, true)
```

Change the following settings befor use:
character: Array of character names to check. Must match character names exactly, case sensitive, wrap in single quotes, separate names by comma.
retainer: Array of retainer names to check. Must match character names exactly, case sensitive, wrap in single quotes, separate names by comma.
whisper: If set to true the report will be sent to chat via whisper.

When clicked this macro will generate a report detailing all rations currently held by all tracked Player and Retainer actors seprated by name, listing items held and their quantities, color coded.
Total number of days worth of rations for the entire tracked group(assuming the party pools resources) is also profided in a color coded display.

---

### Other Useful macros

- OSE-helper Show Turn Counts: Displays the current game turn count information to chat.
- OSE-helper Light Turns Remaining: Displays in a whispered chat message the number of turns remaining for the currently lit light source.
- OSE-helper Actor Item Report: Generates a whispered chat message detailing all light source and ration types and quantities color coded.
- OSE-helper Eat Ration: Generates a dialog with a dropdown selector listing all available ration types and their quantities, when the eat ration button is clicked the quantity for that item type is reduced by one, if the item has no more used it is deleted.
- OSE-helper Rest: Resets turns since rest count. Advances time 1 turn(10 minutes).
- OSE-helper Reset Session Count: Resets session turn count to zero.
- OSE-helper Reset All Turn Counts: Resets all turn counts to zero.
- OSE-helper Clear GM Light Flag: Resets OSE-helper Light data flag to default value for the GM user.