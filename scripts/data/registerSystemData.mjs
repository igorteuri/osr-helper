export async function registerSystemData() {
  switch (game.system.id) {
    case 'dcc':
      OSRH.systemData = {
        id: 'dcc',
        tags: false,
        partySheet: false,
        lightItemTypes: ['weapon', 'equipment', 'armor'],
        rationItemTypes: ['equipment'],
        itemSheetHook: 'renderItemSheet',
        characterSheetHook: 'renderActorSheet',
        baseMovMod: 4,
        effects: false,
        paths: {
          itemQty: 'system.quantity',
          encMov: 'system.attributes.speed.base',
          hp: {
            val: 'system.attributes.hp.value',
            max: 'system.attributes.hp.max'
          },
          ac: 'system.attributes.ac.value'
        }
      };
      break;

    case 'ose':
      OSRH.systemData = {
        id: 'ose',
        tags: true,
        partySheet: true,
        lightItemTypes: ['weapon', 'item', 'armor'],
        rationItemTypes: ['item'],
        itemSheetHook: 'renderItemSheet',
        characterSheetHook: 'renderActorSheet',
        baseMovMod: 3,
        effects: true,
        paths: {
          itemQty: 'system.quantity.value',
          encMov: 'system.movement.encounter',
          hp: {
            val: 'system.hp.value',
            max: 'system.hp.max'
          },
          ac: game.settings.get('ose', 'ascendingAC') ? 'system.aac.value' : 'system.ac.value'
        }
      };
      break;

    case 'ose-dev':
      OSRH.systemData = {
        id: 'ose-dev',
        tags: true,
        partySheet: true,
        lightItemTypes: ['weapon', 'item', 'armor'],
        rationItemTypes: ['item'],
        itemSheetHook: 'renderItemSheet',
        characterSheetHook: 'renderActorSheet',
        baseMovMod: 3,
        effects: true,
        paths: {
          itemQty: 'system.quantity.value',
          encMov: 'system.movement.encounter',
          hp: {
            val: 'system.hp.value',
            max: 'system.hp.max'
          },
          ac: game.settings.get('ose', 'ascendingAC') ? 'system.aac.value' : 'system.ac.value'
        }
      };
      break;

    case 'wwn':
      OSRH.systemData = {
        id: 'wwn',
        tags: false,
        partySheet: true,
        lightItemTypes: ['weapon', 'item', 'armor'],
        rationItemTypes: ['item'],
        itemSheetHook: 'renderItemSheet',
        characterSheetHook: 'renderActorSheet',
        baseMovMod: 4,
        effects: false,
        paths: {
          itemQty: 'system.quantity',
          encMov: 'system.movement.base',
          hp: {
            val: 'system.hp.value',
            max: 'system.hp.max'
          },
          ac: 'system.aac.value'
        }
      };
      break;

    case 'bfs':
      OSRH.systemData = {
        id: 'bfs',
        tags: true,
        partySheet: true,
        lightItemTypes: ['weapon', 'item', 'armor'],
        rationItemTypes: ['item'],
        itemSheetHook: 'renderItemSheet',
        characterSheetHook: 'renderActorSheet',
        baseMovMod: 3,
        effects: false,
        paths: {
          itemQty: 'system.quantity.value',
          encMov: 'system.movement.encounter',
          hp: {
            val: 'system.hp.value',
            max: 'system.hp.max'
          },
          ac: game.settings.get('bfs', 'ascendingAC') ? 'system.aac.value' : 'system.ac.value'
        }
      };
      break;

    case 'hyperborea':
      OSRH.systemData = {
        id: 'hyperborea',
        tags: false,
        partySheet: true,
        lightItemTypes: ['weapon', 'item', 'armor'],
        rationItemTypes: ['item'],
        itemSheetHook: 'renderItemSheet',
        characterSheetHook: 'renderActorSheet',
        baseMovMod: 3,
        effects: false,
        paths: {
          itemQty: 'system.quantity.value',
          encMov: 'system.movement.base',
          hp: {
            val: 'system.hp.value',
            max: 'system.hp.max'
          },
          ac: 'system.ac.value'
        }
      };
      break;
    default: 
    OSRH.systemData = null
  }
}
