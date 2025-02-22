import { OSRHItemConfig } from '../item-config.mjs';

export async function registerSystemHooks() {
  const systemData = OSRH.systemData;
  console.log('register system hooks');
  switch (game.system.id) {
    case 'dcc':
      Hooks.on('renderItemSheet', async (app, html, itemObj) => {

        const item = await fromUuid(app.object.uuid);
        if (systemData.lightItemTypes.includes(item.type)) {
          addItemConfigControl(html, item);
        }
      });

      break;
      case 'ose':
        Hooks.on('renderItemSheet', async (app, html, itemObj) => {
          if (systemData.lightItemTypes.includes(app.object.type)) {
            
            const item = await fromUuid(app.object.uuid)
            addItemConfigControl(html, item);
          }
        });

        break;
    default:
      Hooks.on('renderItemSheet', async (app, html, itemObj) => {
        const item = await fromUuid(app.object.uuid)
        if (systemData.lightItemTypes.includes(item?.type)) {
          // let parent = app.object.parent ? app.object.parent : null
          addItemConfigControl(html, item);
        }
      });
  }
  // universal hooks
  Hooks.on('renderOSRHItemConfig', async (obj, html, app) => {
    let itemType = obj.itemType;
    if (!itemType) itemType = 'none';
    const select = html[0].querySelector('#item-type');
    select.value = itemType;
  });
}

async function addItemConfigControl(html, item) {
  const addControl = await game.settings.get('osr-helper', 'enableItemConfig');
  if (addControl) {
    const headerEl = html[0].querySelector('.window-header');
    const configIcon = '<i class="fa-regular fa-book-skull"></i>';
    const titleEl = headerEl?.querySelector('.window-title');
    if (titleEl) {
      const configBtn = document.createElement('a');
      configBtn.classList.add('control', 'osrh-item-config');
      configBtn.innerHTML = configIcon;
      titleEl.after(configBtn);
      configBtn.addEventListener('click', async (ev) => {
        let itemData;
        if (item.actor) {
          itemData = await item.actor.items.get(item?._id);
        } else {
          itemData = item;
        }
        let ration = OSRH.systemData.rationItemTypes.includes(item.type);
        new OSRHItemConfig(item, ration).render(true, { top: ev.y, left: ev.x - 125 });
      });
    }
  }
}
