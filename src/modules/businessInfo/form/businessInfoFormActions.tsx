import BusinessInfoService from 'src/modules/businessInfo/businessInfoService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'BUSINESSINFO_FORM';

const businessInfoFormActions = {
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
        type: businessInfoFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await BusinessInfoService.find(id);
      }

      dispatch({
        type: businessInfoFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: businessInfoFormActions.INIT_ERROR,
      });

      getHistory().push('/business-info');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: businessInfoFormActions.CREATE_STARTED,
      });

      await BusinessInfoService.create(values);

      dispatch({
        type: businessInfoFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.businessInfo.create.success'),
      );

      getHistory().push('/business-info');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: businessInfoFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: businessInfoFormActions.UPDATE_STARTED,
      });

      await BusinessInfoService.update(id, values);

      dispatch({
        type: businessInfoFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.businessInfo.update.success'),
      );

      getHistory().push('/business-info');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: businessInfoFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default businessInfoFormActions;
