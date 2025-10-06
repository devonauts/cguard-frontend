import listActions from 'src/modules/tutorial/list/tutorialListActions';
import TutorialService from 'src/modules/tutorial/tutorialService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'TUTORIAL_DESTROY';

const tutorialDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: tutorialDestroyActions.DESTROY_STARTED,
      });

      await TutorialService.destroyAll([id]);

      dispatch({
        type: tutorialDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.tutorial.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/tutorial');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: tutorialDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: tutorialDestroyActions.DESTROY_ALL_STARTED,
      });

      await TutorialService.destroyAll(ids);

      dispatch({
        type: tutorialDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.tutorial.destroyAll.success'),
      );

      getHistory().push('/tutorial');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: tutorialDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default tutorialDestroyActions;
