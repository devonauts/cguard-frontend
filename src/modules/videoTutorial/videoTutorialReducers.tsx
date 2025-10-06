import list from 'src/modules/videoTutorial/list/videoTutorialListReducers';
import form from 'src/modules/videoTutorial/form/videoTutorialFormReducers';
import view from 'src/modules/videoTutorial/view/videoTutorialViewReducers';
import destroy from 'src/modules/videoTutorial/destroy/videoTutorialDestroyReducers';
import importerReducer from 'src/modules/videoTutorial/importer/videoTutorialImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
