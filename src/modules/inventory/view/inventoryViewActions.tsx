import InventoryService from 'src/modules/inventory/inventoryService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'INVENTORY_VIEW';

const inventoryViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: inventoryViewActions.FIND_STARTED,
      });

      const record = await InventoryService.find(id);

      dispatch({
        type: inventoryViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: inventoryViewActions.FIND_ERROR,
      });

      getHistory().push('/inventory');
    }
  },
};

export default inventoryViewActions;
