import list from 'src/modules/businessInfo/list/businessInfoListReducers';
import form from 'src/modules/businessInfo/form/businessInfoFormReducers';
import view from 'src/modules/businessInfo/view/businessInfoViewReducers';
import destroy from 'src/modules/businessInfo/destroy/businessInfoDestroyReducers';
import importerReducer from 'src/modules/businessInfo/importer/businessInfoImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
