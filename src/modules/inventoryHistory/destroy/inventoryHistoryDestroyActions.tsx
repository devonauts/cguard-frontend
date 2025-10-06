import listActions from 'src/modules/inventoryHistory/list/inventoryHistoryListActions';
import InventoryHistoryService from 'src/modules/inventoryHistory/inventoryHistoryService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'INVENTORYHISTORY_DESTROY';

const inventoryHistoryDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: inventoryHistoryDestroyActions.DESTROY_STARTED,
      });

      await InventoryHistoryService.destroyAll([id]);

      dispatch({
        type: inventoryHistoryDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.inventoryHistory.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/inventory-history');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: inventoryHistoryDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: inventoryHistoryDestroyActions.DESTROY_ALL_STARTED,
      });

      await InventoryHistoryService.destroyAll(ids);

      dispatch({
        type: inventoryHistoryDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.inventoryHistory.destroyAll.success'),
      );

      getHistory().push('/inventory-history');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: inventoryHistoryDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default inventoryHistoryDestroyActions;
