import CertificationService from 'src/modules/certification/certificationService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'CERTIFICATION_FORM';

const certificationFormActions = {
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
        type: certificationFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await CertificationService.find(id);
      }

      dispatch({
        type: certificationFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: certificationFormActions.INIT_ERROR,
      });

      getHistory().push('/certification');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: certificationFormActions.CREATE_STARTED,
      });

      await CertificationService.create(values);

      dispatch({
        type: certificationFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.certification.create.success'),
      );

      getHistory().push('/certification');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: certificationFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: certificationFormActions.UPDATE_STARTED,
      });

      await CertificationService.update(id, values);

      dispatch({
        type: certificationFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.certification.update.success'),
      );

      getHistory().push('/certification');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: certificationFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default certificationFormActions;
