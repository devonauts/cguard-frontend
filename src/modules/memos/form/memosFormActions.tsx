import MemosService from 'src/modules/memos/memosService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'MEMOS_FORM';

const memosFormActions = {
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
        type: memosFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await MemosService.find(id);
      }

      dispatch({
        type: memosFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: memosFormActions.INIT_ERROR,
      });

      getHistory().push('/memos');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: memosFormActions.CREATE_STARTED,
      });

      await MemosService.create(values);

      dispatch({
        type: memosFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.memos.create.success'),
      );

      getHistory().push('/memos');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: memosFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: memosFormActions.UPDATE_STARTED,
      });

      await MemosService.update(id, values);

      dispatch({
        type: memosFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.memos.update.success'),
      );

      getHistory().push('/memos');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: memosFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default memosFormActions;
