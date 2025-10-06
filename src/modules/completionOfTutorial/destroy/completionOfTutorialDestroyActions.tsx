import listActions from 'src/modules/completionOfTutorial/list/completionOfTutorialListActions';
import CompletionOfTutorialService from 'src/modules/completionOfTutorial/completionOfTutorialService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'COMPLETIONOFTUTORIAL_DESTROY';

const completionOfTutorialDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: completionOfTutorialDestroyActions.DESTROY_STARTED,
      });

      await CompletionOfTutorialService.destroyAll([id]);

      dispatch({
        type: completionOfTutorialDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.completionOfTutorial.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/completion-of-tutorial');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: completionOfTutorialDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: completionOfTutorialDestroyActions.DESTROY_ALL_STARTED,
      });

      await CompletionOfTutorialService.destroyAll(ids);

      dispatch({
        type: completionOfTutorialDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.completionOfTutorial.destroyAll.success'),
      );

      getHistory().push('/completion-of-tutorial');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: completionOfTutorialDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default completionOfTutorialDestroyActions;
