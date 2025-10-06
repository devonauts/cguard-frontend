import RepresentanteEmpresaService from 'src/modules/representanteEmpresa/representanteEmpresaService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'REPRESENTANTEEMPRESA_VIEW';

const representanteEmpresaViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: representanteEmpresaViewActions.FIND_STARTED,
      });

      const record = await RepresentanteEmpresaService.find(id);

      dispatch({
        type: representanteEmpresaViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: representanteEmpresaViewActions.FIND_ERROR,
      });

      getHistory().push('/representante-empresa');
    }
  },
};

export default representanteEmpresaViewActions;
