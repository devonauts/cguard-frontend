import list from 'src/modules/inventoryHistory/list/inventoryHistoryListReducers';
import form from 'src/modules/inventoryHistory/form/inventoryHistoryFormReducers';
import view from 'src/modules/inventoryHistory/view/inventoryHistoryViewReducers';
import destroy from 'src/modules/inventoryHistory/destroy/inventoryHistoryDestroyReducers';
import importerReducer from 'src/modules/inventoryHistory/importer/inventoryHistoryImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
