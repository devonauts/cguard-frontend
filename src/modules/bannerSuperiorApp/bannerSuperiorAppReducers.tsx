import list from 'src/modules/bannerSuperiorApp/list/bannerSuperiorAppListReducers';
import form from 'src/modules/bannerSuperiorApp/form/bannerSuperiorAppFormReducers';
import view from 'src/modules/bannerSuperiorApp/view/bannerSuperiorAppViewReducers';
import destroy from 'src/modules/bannerSuperiorApp/destroy/bannerSuperiorAppDestroyReducers';
import importerReducer from 'src/modules/bannerSuperiorApp/importer/bannerSuperiorAppImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
