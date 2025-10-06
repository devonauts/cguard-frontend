import listActions from 'src/modules/videoTutorialCategory/list/videoTutorialCategoryListActions';
import VideoTutorialCategoryService from 'src/modules/videoTutorialCategory/videoTutorialCategoryService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'VIDEOTUTORIALCATEGORY_DESTROY';

const videoTutorialCategoryDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: videoTutorialCategoryDestroyActions.DESTROY_STARTED,
      });

      await VideoTutorialCategoryService.destroyAll([id]);

      dispatch({
        type: videoTutorialCategoryDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.videoTutorialCategory.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/video-tutorial-category');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: videoTutorialCategoryDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: videoTutorialCategoryDestroyActions.DESTROY_ALL_STARTED,
      });

      await VideoTutorialCategoryService.destroyAll(ids);

      dispatch({
        type: videoTutorialCategoryDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.videoTutorialCategory.destroyAll.success'),
      );

      getHistory().push('/video-tutorial-category');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: videoTutorialCategoryDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default videoTutorialCategoryDestroyActions;
