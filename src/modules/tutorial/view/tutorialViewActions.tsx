import TutorialService from 'src/modules/tutorial/tutorialService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'TUTORIAL_VIEW';

const tutorialViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: tutorialViewActions.FIND_STARTED,
      });

      const record = await TutorialService.find(id);

      dispatch({
        type: tutorialViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: tutorialViewActions.FIND_ERROR,
      });

      getHistory().push('/tutorial');
    }
  },
};

export default tutorialViewActions;
