import MemosService from 'src/modules/memos/memosService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'MEMOS_VIEW';

const memosViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: memosViewActions.FIND_STARTED,
      });

      const record = await MemosService.find(id);

      dispatch({
        type: memosViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: memosViewActions.FIND_ERROR,
      });

      getHistory().push('/memos');
    }
  },
};

export default memosViewActions;
