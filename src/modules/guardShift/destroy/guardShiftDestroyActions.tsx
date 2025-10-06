import listActions from 'src/modules/guardShift/list/guardShiftListActions';
import GuardShiftService from 'src/modules/guardShift/guardShiftService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'GUARDSHIFT_DESTROY';

const guardShiftDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: guardShiftDestroyActions.DESTROY_STARTED,
      });

      await GuardShiftService.destroyAll([id]);

      dispatch({
        type: guardShiftDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.guardShift.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/guard-shift');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: guardShiftDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: guardShiftDestroyActions.DESTROY_ALL_STARTED,
      });

      await GuardShiftService.destroyAll(ids);

      dispatch({
        type: guardShiftDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.guardShift.destroyAll.success'),
      );

      getHistory().push('/guard-shift');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: guardShiftDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default guardShiftDestroyActions;
