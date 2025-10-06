import listActions from 'src/modules/certification/list/certificationListActions';
import CertificationService from 'src/modules/certification/certificationService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'CERTIFICATION_DESTROY';

const certificationDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: certificationDestroyActions.DESTROY_STARTED,
      });

      await CertificationService.destroyAll([id]);

      dispatch({
        type: certificationDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.certification.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/certification');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: certificationDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: certificationDestroyActions.DESTROY_ALL_STARTED,
      });

      await CertificationService.destroyAll(ids);

      dispatch({
        type: certificationDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.certification.destroyAll.success'),
      );

      getHistory().push('/certification');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: certificationDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default certificationDestroyActions;
