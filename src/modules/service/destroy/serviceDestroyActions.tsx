import listActions from 'src/modules/service/list/serviceListActions';
import ServiceService from 'src/modules/service/serviceService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'SERVICE_DESTROY';

const serviceDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: serviceDestroyActions.DESTROY_STARTED,
      });

      await ServiceService.destroyAll([id]);

      dispatch({
        type: serviceDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.service.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/service');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: serviceDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: serviceDestroyActions.DESTROY_ALL_STARTED,
      });

      await ServiceService.destroyAll(ids);

      dispatch({
        type: serviceDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.service.destroyAll.success'),
      );

      getHistory().push('/service');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: serviceDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default serviceDestroyActions;
