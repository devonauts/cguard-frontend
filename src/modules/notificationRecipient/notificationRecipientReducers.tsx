import list from 'src/modules/notificationRecipient/list/notificationRecipientListReducers';
import form from 'src/modules/notificationRecipient/form/notificationRecipientFormReducers';
import view from 'src/modules/notificationRecipient/view/notificationRecipientViewReducers';
import destroy from 'src/modules/notificationRecipient/destroy/notificationRecipientDestroyReducers';
import importerReducer from 'src/modules/notificationRecipient/importer/notificationRecipientImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
