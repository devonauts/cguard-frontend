import list from 'src/modules/billing/list/billingListReducers';
import form from 'src/modules/billing/form/billingFormReducers';
import view from 'src/modules/billing/view/billingViewReducers';
import destroy from 'src/modules/billing/destroy/billingDestroyReducers';
import importerReducer from 'src/modules/billing/importer/billingImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
