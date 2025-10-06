import ShiftService from 'src/modules/shift/shiftService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'SHIFT_FORM';

const shiftFormActions = {
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
        type: shiftFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await ShiftService.find(id);
      }

      dispatch({
        type: shiftFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: shiftFormActions.INIT_ERROR,
      });

      getHistory().push('/shift');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: shiftFormActions.CREATE_STARTED,
      });

      await ShiftService.create(values);

      dispatch({
        type: shiftFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.shift.create.success'),
      );

      getHistory().push('/shift');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: shiftFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: shiftFormActions.UPDATE_STARTED,
      });

      await ShiftService.update(id, values);

      dispatch({
        type: shiftFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.shift.update.success'),
      );

      getHistory().push('/shift');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: shiftFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default shiftFormActions;
