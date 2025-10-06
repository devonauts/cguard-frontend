import listActions from 'src/modules/additionalService/list/additionalServiceListActions';
import AdditionalServiceService from 'src/modules/additionalService/additionalServiceService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'ADDITIONALSERVICE_DESTROY';

const additionalServiceDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: additionalServiceDestroyActions.DESTROY_STARTED,
      });

      await AdditionalServiceService.destroyAll([id]);

      dispatch({
        type: additionalServiceDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.additionalService.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/additional-service');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: additionalServiceDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: additionalServiceDestroyActions.DESTROY_ALL_STARTED,
      });

      await AdditionalServiceService.destroyAll(ids);

      dispatch({
        type: additionalServiceDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.additionalService.destroyAll.success'),
      );

      getHistory().push('/additional-service');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: additionalServiceDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default additionalServiceDestroyActions;
