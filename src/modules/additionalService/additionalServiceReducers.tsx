import list from 'src/modules/additionalService/list/additionalServiceListReducers';
import form from 'src/modules/additionalService/form/additionalServiceFormReducers';
import view from 'src/modules/additionalService/view/additionalServiceViewReducers';
import destroy from 'src/modules/additionalService/destroy/additionalServiceDestroyReducers';
import importerReducer from 'src/modules/additionalService/importer/additionalServiceImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
