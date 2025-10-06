import list from 'src/modules/insurance/list/insuranceListReducers';
import form from 'src/modules/insurance/form/insuranceFormReducers';
import view from 'src/modules/insurance/view/insuranceViewReducers';
import destroy from 'src/modules/insurance/destroy/insuranceDestroyReducers';
import importerReducer from 'src/modules/insurance/importer/insuranceImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
