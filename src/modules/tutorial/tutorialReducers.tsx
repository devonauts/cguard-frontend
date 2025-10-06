import list from 'src/modules/tutorial/list/tutorialListReducers';
import form from 'src/modules/tutorial/form/tutorialFormReducers';
import view from 'src/modules/tutorial/view/tutorialViewReducers';
import destroy from 'src/modules/tutorial/destroy/tutorialDestroyReducers';
import importerReducer from 'src/modules/tutorial/importer/tutorialImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
