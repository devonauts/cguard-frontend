import listActions from 'src/modules/videoTutorial/list/videoTutorialListActions';
import VideoTutorialService from 'src/modules/videoTutorial/videoTutorialService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'VIDEOTUTORIAL_DESTROY';

const videoTutorialDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: videoTutorialDestroyActions.DESTROY_STARTED,
      });

      await VideoTutorialService.destroyAll([id]);

      dispatch({
        type: videoTutorialDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.videoTutorial.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/video-tutorial');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: videoTutorialDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: videoTutorialDestroyActions.DESTROY_ALL_STARTED,
      });

      await VideoTutorialService.destroyAll(ids);

      dispatch({
        type: videoTutorialDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.videoTutorial.destroyAll.success'),
      );

      getHistory().push('/video-tutorial');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: videoTutorialDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default videoTutorialDestroyActions;
