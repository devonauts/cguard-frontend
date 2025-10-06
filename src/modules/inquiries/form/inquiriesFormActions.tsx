import InquiriesService from 'src/modules/inquiries/inquiriesService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'INQUIRIES_FORM';

const inquiriesFormActions = {
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
        type: inquiriesFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await InquiriesService.find(id);
      }

      dispatch({
        type: inquiriesFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: inquiriesFormActions.INIT_ERROR,
      });

      getHistory().push('/inquiries');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: inquiriesFormActions.CREATE_STARTED,
      });

      await InquiriesService.create(values);

      dispatch({
        type: inquiriesFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.inquiries.create.success'),
      );

      getHistory().push('/inquiries');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: inquiriesFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: inquiriesFormActions.UPDATE_STARTED,
      });

      await InquiriesService.update(id, values);

      dispatch({
        type: inquiriesFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.inquiries.update.success'),
      );

      getHistory().push('/inquiries');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: inquiriesFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default inquiriesFormActions;
