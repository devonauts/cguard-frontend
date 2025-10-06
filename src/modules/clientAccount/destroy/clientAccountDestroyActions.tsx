import listActions from 'src/modules/clientAccount/list/clientAccountListActions';
import ClientAccountService from 'src/modules/clientAccount/clientAccountService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'CLIENTACCOUNT_DESTROY';

const clientAccountDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: clientAccountDestroyActions.DESTROY_STARTED,
      });

      await ClientAccountService.destroyAll([id]);

      dispatch({
        type: clientAccountDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.clientAccount.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/client-account');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: clientAccountDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: clientAccountDestroyActions.DESTROY_ALL_STARTED,
      });

      await ClientAccountService.destroyAll(ids);

      dispatch({
        type: clientAccountDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.clientAccount.destroyAll.success'),
      );

      getHistory().push('/client-account');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: clientAccountDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default clientAccountDestroyActions;
