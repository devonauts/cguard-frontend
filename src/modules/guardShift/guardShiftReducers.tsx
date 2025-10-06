import list from 'src/modules/guardShift/list/guardShiftListReducers';
import form from 'src/modules/guardShift/form/guardShiftFormReducers';
import view from 'src/modules/guardShift/view/guardShiftViewReducers';
import destroy from 'src/modules/guardShift/destroy/guardShiftDestroyReducers';
import importerReducer from 'src/modules/guardShift/importer/guardShiftImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
