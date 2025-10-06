import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/inventoryHistory/importer/inventoryHistoryImporterSelectors';
import InventoryHistoryService from 'src/modules/inventoryHistory/inventoryHistoryService';
import fields from 'src/modules/inventoryHistory/importer/inventoryHistoryImporterFields';
import { i18n } from 'src/i18n';

const inventoryHistoryImporterActions = importerActions(
  'INVENTORYHISTORY_IMPORTER',
  selectors,
  InventoryHistoryService.import,
  fields,
  i18n('entities.inventoryHistory.importer.fileName'),
);

export default inventoryHistoryImporterActions;