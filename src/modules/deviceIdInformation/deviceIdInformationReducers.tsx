import list from 'src/modules/deviceIdInformation/list/deviceIdInformationListReducers';
import form from 'src/modules/deviceIdInformation/form/deviceIdInformationFormReducers';
import view from 'src/modules/deviceIdInformation/view/deviceIdInformationViewReducers';
import destroy from 'src/modules/deviceIdInformation/destroy/deviceIdInformationDestroyReducers';
import importerReducer from 'src/modules/deviceIdInformation/importer/deviceIdInformationImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
