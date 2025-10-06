import list from 'src/modules/patrolLog/list/patrolLogListReducers';
import form from 'src/modules/patrolLog/form/patrolLogFormReducers';
import view from 'src/modules/patrolLog/view/patrolLogViewReducers';
import destroy from 'src/modules/patrolLog/destroy/patrolLogDestroyReducers';
import importerReducer from 'src/modules/patrolLog/importer/patrolLogImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
