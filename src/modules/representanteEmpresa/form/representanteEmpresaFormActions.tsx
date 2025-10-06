import RepresentanteEmpresaService from 'src/modules/representanteEmpresa/representanteEmpresaService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'REPRESENTANTEEMPRESA_FORM';

const representanteEmpresaFormActions = {
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
        type: representanteEmpresaFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await RepresentanteEmpresaService.find(id);
      }

      dispatch({
        type: representanteEmpresaFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: representanteEmpresaFormActions.INIT_ERROR,
      });

      getHistory().push('/representante-empresa');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: representanteEmpresaFormActions.CREATE_STARTED,
      });

      await RepresentanteEmpresaService.create(values);

      dispatch({
        type: representanteEmpresaFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.representanteEmpresa.create.success'),
      );

      getHistory().push('/representante-empresa');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: representanteEmpresaFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: representanteEmpresaFormActions.UPDATE_STARTED,
      });

      await RepresentanteEmpresaService.update(id, values);

      dispatch({
        type: representanteEmpresaFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.representanteEmpresa.update.success'),
      );

      getHistory().push('/representante-empresa');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: representanteEmpresaFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default representanteEmpresaFormActions;
