import list from 'src/modules/service/list/serviceListReducers';
import form from 'src/modules/service/form/serviceFormReducers';
import view from 'src/modules/service/view/serviceViewReducers';
import destroy from 'src/modules/service/destroy/serviceDestroyReducers';
import importerReducer from 'src/modules/service/importer/serviceImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
