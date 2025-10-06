import InventoryHistoryService from 'src/modules/inventoryHistory/inventoryHistoryService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'INVENTORYHISTORY_VIEW';

const inventoryHistoryViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: inventoryHistoryViewActions.FIND_STARTED,
      });

      const record = await InventoryHistoryService.find(id);

      dispatch({
        type: inventoryHistoryViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: inventoryHistoryViewActions.FIND_ERROR,
      });

      getHistory().push('/inventory-history');
    }
  },
};

export default inventoryHistoryViewActions;
