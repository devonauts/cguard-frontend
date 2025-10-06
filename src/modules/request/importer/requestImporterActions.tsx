import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/request/importer/requestImporterSelectors';
import RequestService from 'src/modules/request/requestService';
import fields from 'src/modules/request/importer/requestImporterFields';
import { i18n } from 'src/i18n';

const requestImporterActions = importerActions(
  'REQUEST_IMPORTER',
  selectors,
  RequestService.import,
  fields,
  i18n('entities.request.importer.fileName'),
);

export default requestImporterActions;