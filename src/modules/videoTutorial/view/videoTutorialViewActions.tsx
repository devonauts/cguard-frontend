import VideoTutorialService from 'src/modules/videoTutorial/videoTutorialService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'VIDEOTUTORIAL_VIEW';

const videoTutorialViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: videoTutorialViewActions.FIND_STARTED,
      });

      const record = await VideoTutorialService.find(id);

      dispatch({
        type: videoTutorialViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: videoTutorialViewActions.FIND_ERROR,
      });

      getHistory().push('/video-tutorial');
    }
  },
};

export default videoTutorialViewActions;
