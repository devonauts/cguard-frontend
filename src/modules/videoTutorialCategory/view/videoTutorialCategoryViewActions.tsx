import VideoTutorialCategoryService from 'src/modules/videoTutorialCategory/videoTutorialCategoryService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'VIDEOTUTORIALCATEGORY_VIEW';

const videoTutorialCategoryViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: videoTutorialCategoryViewActions.FIND_STARTED,
      });

      const record = await VideoTutorialCategoryService.find(id);

      dispatch({
        type: videoTutorialCategoryViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: videoTutorialCategoryViewActions.FIND_ERROR,
      });

      getHistory().push('/video-tutorial-category');
    }
  },
};

export default videoTutorialCategoryViewActions;
