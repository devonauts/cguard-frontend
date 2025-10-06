import list from 'src/modules/certification/list/certificationListReducers';
import form from 'src/modules/certification/form/certificationFormReducers';
import view from 'src/modules/certification/view/certificationViewReducers';
import destroy from 'src/modules/certification/destroy/certificationDestroyReducers';
import importerReducer from 'src/modules/certification/importer/certificationImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
