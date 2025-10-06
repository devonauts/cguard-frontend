import list from 'src/modules/securityGuard/list/securityGuardListReducers';
import form from 'src/modules/securityGuard/form/securityGuardFormReducers';
import view from 'src/modules/securityGuard/view/securityGuardViewReducers';
import destroy from 'src/modules/securityGuard/destroy/securityGuardDestroyReducers';
import importerReducer from 'src/modules/securityGuard/importer/securityGuardImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
