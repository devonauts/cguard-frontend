import list from 'src/modules/incident/list/incidentListReducers';
import form from 'src/modules/incident/form/incidentFormReducers';
import view from 'src/modules/incident/view/incidentViewReducers';
import destroy from 'src/modules/incident/destroy/incidentDestroyReducers';
import importerReducer from 'src/modules/incident/importer/incidentImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
