import listActions from 'src/modules/bannerSuperiorApp/list/bannerSuperiorAppListActions';
import BannerSuperiorAppService from 'src/modules/bannerSuperiorApp/bannerSuperiorAppService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'BANNERSUPERIORAPP_DESTROY';

const bannerSuperiorAppDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: bannerSuperiorAppDestroyActions.DESTROY_STARTED,
      });

      await BannerSuperiorAppService.destroyAll([id]);

      dispatch({
        type: bannerSuperiorAppDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.bannerSuperiorApp.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/banner-superior-app');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: bannerSuperiorAppDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: bannerSuperiorAppDestroyActions.DESTROY_ALL_STARTED,
      });

      await BannerSuperiorAppService.destroyAll(ids);

      dispatch({
        type: bannerSuperiorAppDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.bannerSuperiorApp.destroyAll.success'),
      );

      getHistory().push('/banner-superior-app');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: bannerSuperiorAppDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default bannerSuperiorAppDestroyActions;
