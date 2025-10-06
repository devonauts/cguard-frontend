import listActions from 'src/modules/deviceIdInformation/list/deviceIdInformationListActions';
import DeviceIdInformationService from 'src/modules/deviceIdInformation/deviceIdInformationService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'DEVICEIDINFORMATION_DESTROY';

const deviceIdInformationDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: deviceIdInformationDestroyActions.DESTROY_STARTED,
      });

      await DeviceIdInformationService.destroyAll([id]);

      dispatch({
        type: deviceIdInformationDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.deviceIdInformation.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/device-id-information');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: deviceIdInformationDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: deviceIdInformationDestroyActions.DESTROY_ALL_STARTED,
      });

      await DeviceIdInformationService.destroyAll(ids);

      dispatch({
        type: deviceIdInformationDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.deviceIdInformation.destroyAll.success'),
      );

      getHistory().push('/device-id-information');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: deviceIdInformationDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default deviceIdInformationDestroyActions;
