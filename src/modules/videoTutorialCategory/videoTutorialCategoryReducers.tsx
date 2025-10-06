import list from 'src/modules/videoTutorialCategory/list/videoTutorialCategoryListReducers';
import form from 'src/modules/videoTutorialCategory/form/videoTutorialCategoryFormReducers';
import view from 'src/modules/videoTutorialCategory/view/videoTutorialCategoryViewReducers';
import destroy from 'src/modules/videoTutorialCategory/destroy/videoTutorialCategoryDestroyReducers';
import importerReducer from 'src/modules/videoTutorialCategory/importer/videoTutorialCategoryImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
