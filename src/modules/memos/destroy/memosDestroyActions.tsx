import listActions from 'src/modules/memos/list/memosListActions';
import MemosService from 'src/modules/memos/memosService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'MEMOS_DESTROY';

const memosDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: memosDestroyActions.DESTROY_STARTED,
      });

      await MemosService.destroyAll([id]);

      dispatch({
        type: memosDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.memos.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/memos');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: memosDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: memosDestroyActions.DESTROY_ALL_STARTED,
      });

      await MemosService.destroyAll(ids);

      dispatch({
        type: memosDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.memos.destroyAll.success'),
      );

      getHistory().push('/memos');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: memosDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default memosDestroyActions;
