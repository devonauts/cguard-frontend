import list from 'src/modules/completionOfTutorial/list/completionOfTutorialListReducers';
import form from 'src/modules/completionOfTutorial/form/completionOfTutorialFormReducers';
import view from 'src/modules/completionOfTutorial/view/completionOfTutorialViewReducers';
import destroy from 'src/modules/completionOfTutorial/destroy/completionOfTutorialDestroyReducers';
import importerReducer from 'src/modules/completionOfTutorial/importer/completionOfTutorialImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
