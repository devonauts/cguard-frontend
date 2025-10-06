import VideoTutorialService from 'src/modules/videoTutorial/videoTutorialService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'VIDEOTUTORIAL_FORM';

const videoTutorialFormActions = {
  INIT_STARTED: `${prefix}_INIT_STARTED`,
  INIT_SUCCESS: `${prefix}_INIT_SUCCESS`,
  INIT_ERROR: `${prefix}_INIT_ERROR`,

  CREATE_STARTED: `${prefix}_CREATE_STARTED`,
  CREATE_SUCCESS: `${prefix}_CREATE_SUCCESS`,
  CREATE_ERROR: `${prefix}_CREATE_ERROR`,

  UPDATE_STARTED: `${prefix}_UPDATE_STARTED`,
  UPDATE_SUCCESS: `${prefix}_UPDATE_SUCCESS`,
  UPDATE_ERROR: `${prefix}_UPDATE_ERROR`,

  doInit: (id) => async (dispatch) => {
    try {
      dispatch({
        type: videoTutorialFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await VideoTutorialService.find(id);
      }

      dispatch({
        type: videoTutorialFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: videoTutorialFormActions.INIT_ERROR,
      });

      getHistory().push('/video-tutorial');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: videoTutorialFormActions.CREATE_STARTED,
      });

      await VideoTutorialService.create(values);

      dispatch({
        type: videoTutorialFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.videoTutorial.create.success'),
      );

      getHistory().push('/video-tutorial');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: videoTutorialFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: videoTutorialFormActions.UPDATE_STARTED,
      });

      await VideoTutorialService.update(id, values);

      dispatch({
        type: videoTutorialFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.videoTutorial.update.success'),
      );

      getHistory().push('/video-tutorial');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: videoTutorialFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default videoTutorialFormActions;
