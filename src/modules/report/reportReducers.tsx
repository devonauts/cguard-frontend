import list from 'src/modules/report/list/reportListReducers';
import form from 'src/modules/report/form/reportFormReducers';
import view from 'src/modules/report/view/reportViewReducers';
import destroy from 'src/modules/report/destroy/reportDestroyReducers';
import importerReducer from 'src/modules/report/importer/reportImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
