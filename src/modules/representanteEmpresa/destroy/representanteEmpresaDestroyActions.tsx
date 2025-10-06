import listActions from 'src/modules/representanteEmpresa/list/representanteEmpresaListActions';
import RepresentanteEmpresaService from 'src/modules/representanteEmpresa/representanteEmpresaService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'REPRESENTANTEEMPRESA_DESTROY';

const representanteEmpresaDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: representanteEmpresaDestroyActions.DESTROY_STARTED,
      });

      await RepresentanteEmpresaService.destroyAll([id]);

      dispatch({
        type: representanteEmpresaDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.representanteEmpresa.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/representante-empresa');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: representanteEmpresaDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: representanteEmpresaDestroyActions.DESTROY_ALL_STARTED,
      });

      await RepresentanteEmpresaService.destroyAll(ids);

      dispatch({
        type: representanteEmpresaDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.representanteEmpresa.destroyAll.success'),
      );

      getHistory().push('/representante-empresa');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: representanteEmpresaDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default representanteEmpresaDestroyActions;
