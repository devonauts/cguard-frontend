import list from 'src/modules/patrol/list/patrolListReducers';
import form from 'src/modules/patrol/form/patrolFormReducers';
import view from 'src/modules/patrol/view/patrolViewReducers';
import destroy from 'src/modules/patrol/destroy/patrolDestroyReducers';
import importerReducer from 'src/modules/patrol/importer/patrolImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
