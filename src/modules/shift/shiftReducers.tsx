import list from 'src/modules/shift/list/shiftListReducers';
import form from 'src/modules/shift/form/shiftFormReducers';
import view from 'src/modules/shift/view/shiftViewReducers';
import destroy from 'src/modules/shift/destroy/shiftDestroyReducers';
import importerReducer from 'src/modules/shift/importer/shiftImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
