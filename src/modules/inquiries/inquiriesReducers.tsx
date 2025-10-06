import list from 'src/modules/inquiries/list/inquiriesListReducers';
import form from 'src/modules/inquiries/form/inquiriesFormReducers';
import view from 'src/modules/inquiries/view/inquiriesViewReducers';
import destroy from 'src/modules/inquiries/destroy/inquiriesDestroyReducers';
import importerReducer from 'src/modules/inquiries/importer/inquiriesImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
