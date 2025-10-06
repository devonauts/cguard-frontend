import CompletionOfTutorialService from 'src/modules/completionOfTutorial/completionOfTutorialService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'COMPLETIONOFTUTORIAL_FORM';

const completionOfTutorialFormActions = {
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
        type: completionOfTutorialFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await CompletionOfTutorialService.find(id);
      }

      dispatch({
        type: completionOfTutorialFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: completionOfTutorialFormActions.INIT_ERROR,
      });

      getHistory().push('/completion-of-tutorial');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: completionOfTutorialFormActions.CREATE_STARTED,
      });

      await CompletionOfTutorialService.create(values);

      dispatch({
        type: completionOfTutorialFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.completionOfTutorial.create.success'),
      );

      getHistory().push('/completion-of-tutorial');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: completionOfTutorialFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: completionOfTutorialFormActions.UPDATE_STARTED,
      });

      await CompletionOfTutorialService.update(id, values);

      dispatch({
        type: completionOfTutorialFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.completionOfTutorial.update.success'),
      );

      getHistory().push('/completion-of-tutorial');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: completionOfTutorialFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default completionOfTutorialFormActions;
