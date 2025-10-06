import InventoryHistoryService from 'src/modules/inventoryHistory/inventoryHistoryService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'INVENTORYHISTORY_FORM';

const inventoryHistoryFormActions = {
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
        type: inventoryHistoryFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await InventoryHistoryService.find(id);
      }

      dispatch({
        type: inventoryHistoryFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: inventoryHistoryFormActions.INIT_ERROR,
      });

      getHistory().push('/inventory-history');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: inventoryHistoryFormActions.CREATE_STARTED,
      });

      await InventoryHistoryService.create(values);

      dispatch({
        type: inventoryHistoryFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.inventoryHistory.create.success'),
      );

      getHistory().push('/inventory-history');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: inventoryHistoryFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: inventoryHistoryFormActions.UPDATE_STARTED,
      });

      await InventoryHistoryService.update(id, values);

      dispatch({
        type: inventoryHistoryFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.inventoryHistory.update.success'),
      );

      getHistory().push('/inventory-history');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: inventoryHistoryFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default inventoryHistoryFormActions;
