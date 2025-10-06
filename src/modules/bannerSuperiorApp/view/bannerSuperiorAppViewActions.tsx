import BannerSuperiorAppService from 'src/modules/bannerSuperiorApp/bannerSuperiorAppService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'BANNERSUPERIORAPP_VIEW';

const bannerSuperiorAppViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: bannerSuperiorAppViewActions.FIND_STARTED,
      });

      const record = await BannerSuperiorAppService.find(id);

      dispatch({
        type: bannerSuperiorAppViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: bannerSuperiorAppViewActions.FIND_ERROR,
      });

      getHistory().push('/banner-superior-app');
    }
  },
};

export default bannerSuperiorAppViewActions;
