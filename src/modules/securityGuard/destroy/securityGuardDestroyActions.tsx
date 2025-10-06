import listActions from 'src/modules/securityGuard/list/securityGuardListActions';
import SecurityGuardService from 'src/modules/securityGuard/securityGuardService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'SECURITYGUARD_DESTROY';

const securityGuardDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: securityGuardDestroyActions.DESTROY_STARTED,
      });

      await SecurityGuardService.destroyAll([id]);

      dispatch({
        type: securityGuardDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.securityGuard.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/security-guard');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: securityGuardDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: securityGuardDestroyActions.DESTROY_ALL_STARTED,
      });

      await SecurityGuardService.destroyAll(ids);

      dispatch({
        type: securityGuardDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.securityGuard.destroyAll.success'),
      );

      getHistory().push('/security-guard');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: securityGuardDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default securityGuardDestroyActions;
