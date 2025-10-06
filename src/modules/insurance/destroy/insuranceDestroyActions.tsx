import listActions from 'src/modules/insurance/list/insuranceListActions';
import InsuranceService from 'src/modules/insurance/insuranceService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'INSURANCE_DESTROY';

const insuranceDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: insuranceDestroyActions.DESTROY_STARTED,
      });

      await InsuranceService.destroyAll([id]);

      dispatch({
        type: insuranceDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.insurance.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/insurance');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: insuranceDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: insuranceDestroyActions.DESTROY_ALL_STARTED,
      });

      await InsuranceService.destroyAll(ids);

      dispatch({
        type: insuranceDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.insurance.destroyAll.success'),
      );

      getHistory().push('/insurance');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: insuranceDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default insuranceDestroyActions;
