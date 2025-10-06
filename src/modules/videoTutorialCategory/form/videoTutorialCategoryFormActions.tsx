import VideoTutorialCategoryService from 'src/modules/videoTutorialCategory/videoTutorialCategoryService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'VIDEOTUTORIALCATEGORY_FORM';

const videoTutorialCategoryFormActions = {
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
        type: videoTutorialCategoryFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await VideoTutorialCategoryService.find(id);
      }

      dispatch({
        type: videoTutorialCategoryFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: videoTutorialCategoryFormActions.INIT_ERROR,
      });

      getHistory().push('/video-tutorial-category');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: videoTutorialCategoryFormActions.CREATE_STARTED,
      });

      await VideoTutorialCategoryService.create(values);

      dispatch({
        type: videoTutorialCategoryFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.videoTutorialCategory.create.success'),
      );

      getHistory().push('/video-tutorial-category');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: videoTutorialCategoryFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: videoTutorialCategoryFormActions.UPDATE_STARTED,
      });

      await VideoTutorialCategoryService.update(id, values);

      dispatch({
        type: videoTutorialCategoryFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.videoTutorialCategory.update.success'),
      );

      getHistory().push('/video-tutorial-category');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: videoTutorialCategoryFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default videoTutorialCategoryFormActions;
