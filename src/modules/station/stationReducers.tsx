import list from 'src/modules/station/list/stationListReducers';
import form from 'src/modules/station/form/stationFormReducers';
import view from 'src/modules/station/view/stationViewReducers';
import destroy from 'src/modules/station/destroy/stationDestroyReducers';
import importerReducer from 'src/modules/station/importer/stationImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
