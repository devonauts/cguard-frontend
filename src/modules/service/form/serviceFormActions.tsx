import ServiceService from 'src/modules/service/serviceService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'SERVICE_FORM';

const serviceFormActions = {
  INIT_STARTED: `${prefix}_INIT_STARTED`,
  INIT_SUCCESS: `${prefix}_INIT_SUCCESS`,
  INIT_ERROR: `${prefix}_INIT_ERROR`,

  CREATE_STARTED: `${prefix}_CREATE_STARTED`,
  CREATE_SUCCESS: `${prefix}_CREATE_SUCCESS`,
  CREATE_ERROR: `${prefix}_CREATE_ERROR`,

  UPDATE_STARTED: `${prefix}_UPDATE_STARTED`,
  UPDATE_SUCCESS: `${prefix}_UPDATE_SUCCESS`,
  UPDATE_ERROR: `${prefix}_UPDATE_ERROR`,

  doInit: (id) => async (dispatch) => {
    try {
      dispatch({
        type: serviceFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await ServiceService.find(id);
      }

      dispatch({
        type: serviceFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: serviceFormActions.INIT_ERROR,
      });

      getHistory().push('/service');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: serviceFormActions.CREATE_STARTED,
      });

      await ServiceService.create(values);

      dispatch({
        type: serviceFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.service.create.success'),
      );

      getHistory().push('/service');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: serviceFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: serviceFormActions.UPDATE_STARTED,
      });

      await ServiceService.update(id, values);

      dispatch({
        type: serviceFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.service.update.success'),
      );

      getHistory().push('/service');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: serviceFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default serviceFormActions;
