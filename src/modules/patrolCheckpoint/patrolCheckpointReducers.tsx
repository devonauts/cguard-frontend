import list from 'src/modules/patrolCheckpoint/list/patrolCheckpointListReducers';
import form from 'src/modules/patrolCheckpoint/form/patrolCheckpointFormReducers';
import view from 'src/modules/patrolCheckpoint/view/patrolCheckpointViewReducers';
import destroy from 'src/modules/patrolCheckpoint/destroy/patrolCheckpointDestroyReducers';
import importerReducer from 'src/modules/patrolCheckpoint/importer/patrolCheckpointImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
