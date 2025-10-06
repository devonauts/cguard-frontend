import list from 'src/modules/representanteEmpresa/list/representanteEmpresaListReducers';
import form from 'src/modules/representanteEmpresa/form/representanteEmpresaFormReducers';
import view from 'src/modules/representanteEmpresa/view/representanteEmpresaViewReducers';
import destroy from 'src/modules/representanteEmpresa/destroy/representanteEmpresaDestroyReducers';
import importerReducer from 'src/modules/representanteEmpresa/importer/representanteEmpresaImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
