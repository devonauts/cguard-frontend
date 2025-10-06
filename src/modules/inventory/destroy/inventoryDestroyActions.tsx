import listActions from 'src/modules/inventory/list/inventoryListActions';
import InventoryService from 'src/modules/inventory/inventoryService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'INVENTORY_DESTROY';

const inventoryDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: inventoryDestroyActions.DESTROY_STARTED,
      });

      await InventoryService.destroyAll([id]);

      dispatch({
        type: inventoryDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.inventory.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/inventory');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: inventoryDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: inventoryDestroyActions.DESTROY_ALL_STARTED,
      });

      await InventoryService.destroyAll(ids);

      dispatch({
        type: inventoryDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.inventory.destroyAll.success'),
      );

      getHistory().push('/inventory');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: inventoryDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default inventoryDestroyActions;
