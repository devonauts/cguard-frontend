import GuardShiftService from 'src/modules/guardShift/guardShiftService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'GUARDSHIFT_FORM';

const guardShiftFormActions = {
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
        type: guardShiftFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await GuardShiftService.find(id);
      }

      dispatch({
        type: guardShiftFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: guardShiftFormActions.INIT_ERROR,
      });

      getHistory().push('/guard-shift');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: guardShiftFormActions.CREATE_STARTED,
      });

      await GuardShiftService.create(values);

      dispatch({
        type: guardShiftFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.guardShift.create.success'),
      );

      getHistory().push('/guard-shift');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: guardShiftFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: guardShiftFormActions.UPDATE_STARTED,
      });

      await GuardShiftService.update(id, values);

      dispatch({
        type: guardShiftFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.guardShift.update.success'),
      );

      getHistory().push('/guard-shift');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: guardShiftFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default guardShiftFormActions;
