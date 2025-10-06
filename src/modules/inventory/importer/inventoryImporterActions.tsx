import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/inventory/importer/inventoryImporterSelectors';
import InventoryService from 'src/modules/inventory/inventoryService';
import fields from 'src/modules/inventory/importer/inventoryImporterFields';
import { i18n } from 'src/i18n';

const inventoryImporterActions = importerActions(
  'INVENTORY_IMPORTER',
  selectors,
  InventoryService.import,
  fields,
  i18n('entities.inventory.importer.fileName'),
);

export default inventoryImporterActions;