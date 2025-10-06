import listActions from 'src/modules/billing/list/billingListActions';
import BillingService from 'src/modules/billing/billingService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'BILLING_DESTROY';

const billingDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: billingDestroyActions.DESTROY_STARTED,
      });

      await BillingService.destroyAll([id]);

      dispatch({
        type: billingDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.billing.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/billing');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: billingDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: billingDestroyActions.DESTROY_ALL_STARTED,
      });

      await BillingService.destroyAll(ids);

      dispatch({
        type: billingDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.billing.destroyAll.success'),
      );

      getHistory().push('/billing');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: billingDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default billingDestroyActions;
