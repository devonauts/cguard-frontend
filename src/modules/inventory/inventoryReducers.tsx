import list from 'src/modules/inventory/list/inventoryListReducers';
import form from 'src/modules/inventory/form/inventoryFormReducers';
import view from 'src/modules/inventory/view/inventoryViewReducers';
import destroy from 'src/modules/inventory/destroy/inventoryDestroyReducers';
import importerReducer from 'src/modules/inventory/importer/inventoryImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
