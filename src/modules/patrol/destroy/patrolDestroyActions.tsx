import listActions from 'src/modules/patrol/list/patrolListActions';
import PatrolService from 'src/modules/patrol/patrolService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'PATROL_DESTROY';

const patrolDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: patrolDestroyActions.DESTROY_STARTED,
      });

      await PatrolService.destroyAll([id]);

      dispatch({
        type: patrolDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.patrol.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/patrol');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: patrolDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: patrolDestroyActions.DESTROY_ALL_STARTED,
      });

      await PatrolService.destroyAll(ids);

      dispatch({
        type: patrolDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.patrol.destroyAll.success'),
      );

      getHistory().push('/patrol');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: patrolDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default patrolDestroyActions;
