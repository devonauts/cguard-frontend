import BillingService from 'src/modules/billing/billingService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'BILLING_FORM';

const billingFormActions = {
  INIT_STARTED: `${prefix}_INIT_STARTED`,
  INIT_SUCCESS: `${prefix}_INIT_SUCCESS`,
  INIT_ERROR: `${prefix}_INIT_ERROR`,

  CREATE_STARTED: `${prefix}_CREATE_STARTED`,
  CREATE_SUCCESS: `${prefix}_CREATE_SUCCESS`,
  CREATE_ERROR: `${prefix}_CREATE_ERROR`,

  UPDATE_STARTED: `${prefix}_UPDATE_STARTED`,
  UPDATE_SUCCESS: `${prefix}_UPDATE_SUCCESS`,
  UPDATE_ERROR: `${prefix}_UPDATE_ERROR`,

  doInit: (id) => async (dispatch) => {
    try {
      dispatch({
        type: billingFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await BillingService.find(id);
      }

      dispatch({
        type: billingFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: billingFormActions.INIT_ERROR,
      });

      getHistory().push('/billing');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: billingFormActions.CREATE_STARTED,
      });

      await BillingService.create(values);

      dispatch({
        type: billingFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.billing.create.success'),
      );

      getHistory().push('/billing');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: billingFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: billingFormActions.UPDATE_STARTED,
      });

      await BillingService.update(id, values);

      dispatch({
        type: billingFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.billing.update.success'),
      );

      getHistory().push('/billing');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: billingFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default billingFormActions;
