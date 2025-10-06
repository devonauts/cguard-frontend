import listActions from 'src/modules/businessInfo/list/businessInfoListActions';
import BusinessInfoService from 'src/modules/businessInfo/businessInfoService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'BUSINESSINFO_DESTROY';

const businessInfoDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: businessInfoDestroyActions.DESTROY_STARTED,
      });

      await BusinessInfoService.destroyAll([id]);

      dispatch({
        type: businessInfoDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.businessInfo.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/business-info');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: businessInfoDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: businessInfoDestroyActions.DESTROY_ALL_STARTED,
      });

      await BusinessInfoService.destroyAll(ids);

      dispatch({
        type: businessInfoDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.businessInfo.destroyAll.success'),
      );

      getHistory().push('/business-info');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: businessInfoDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default businessInfoDestroyActions;
