import list from 'src/modules/request/list/requestListReducers';
import form from 'src/modules/request/form/requestFormReducers';
import view from 'src/modules/request/view/requestViewReducers';
import destroy from 'src/modules/request/destroy/requestDestroyReducers';
import importerReducer from 'src/modules/request/importer/requestImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
