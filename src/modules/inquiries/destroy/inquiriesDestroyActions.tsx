import listActions from 'src/modules/inquiries/list/inquiriesListActions';
import InquiriesService from 'src/modules/inquiries/inquiriesService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'INQUIRIES_DESTROY';

const inquiriesDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: inquiriesDestroyActions.DESTROY_STARTED,
      });

      await InquiriesService.destroyAll([id]);

      dispatch({
        type: inquiriesDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.inquiries.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/inquiries');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: inquiriesDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: inquiriesDestroyActions.DESTROY_ALL_STARTED,
      });

      await InquiriesService.destroyAll(ids);

      dispatch({
        type: inquiriesDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.inquiries.destroyAll.success'),
      );

      getHistory().push('/inquiries');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: inquiriesDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default inquiriesDestroyActions;
