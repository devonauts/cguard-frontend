import listActions from 'src/modules/patrolLog/list/patrolLogListActions';
import PatrolLogService from 'src/modules/patrolLog/patrolLogService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'PATROLLOG_DESTROY';

const patrolLogDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: patrolLogDestroyActions.DESTROY_STARTED,
      });

      await PatrolLogService.destroyAll([id]);

      dispatch({
        type: patrolLogDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.patrolLog.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/patrol-log');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: patrolLogDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: patrolLogDestroyActions.DESTROY_ALL_STARTED,
      });

      await PatrolLogService.destroyAll(ids);

      dispatch({
        type: patrolLogDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.patrolLog.destroyAll.success'),
      );

      getHistory().push('/patrol-log');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: patrolLogDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default patrolLogDestroyActions;
