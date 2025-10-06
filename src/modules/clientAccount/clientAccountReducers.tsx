import list from 'src/modules/clientAccount/list/clientAccountListReducers';
import form from 'src/modules/clientAccount/form/clientAccountFormReducers';
import view from 'src/modules/clientAccount/view/clientAccountViewReducers';
import destroy from 'src/modules/clientAccount/destroy/clientAccountDestroyReducers';
import importerReducer from 'src/modules/clientAccount/importer/clientAccountImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
