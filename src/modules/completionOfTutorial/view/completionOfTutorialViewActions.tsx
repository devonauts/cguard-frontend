import CompletionOfTutorialService from 'src/modules/completionOfTutorial/completionOfTutorialService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'COMPLETIONOFTUTORIAL_VIEW';

const completionOfTutorialViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: completionOfTutorialViewActions.FIND_STARTED,
      });

      const record = await CompletionOfTutorialService.find(id);

      dispatch({
        type: completionOfTutorialViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: completionOfTutorialViewActions.FIND_ERROR,
      });

      getHistory().push('/completion-of-tutorial');
    }
  },
};

export default completionOfTutorialViewActions;
