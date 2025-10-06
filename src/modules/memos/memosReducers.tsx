import list from 'src/modules/memos/list/memosListReducers';
import form from 'src/modules/memos/form/memosFormReducers';
import view from 'src/modules/memos/view/memosViewReducers';
import destroy from 'src/modules/memos/destroy/memosDestroyReducers';
import importerReducer from 'src/modules/memos/importer/memosImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
