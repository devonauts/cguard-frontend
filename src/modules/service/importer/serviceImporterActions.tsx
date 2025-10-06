import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/service/importer/serviceImporterSelectors';
import ServiceService from 'src/modules/service/serviceService';
import fields from 'src/modules/service/importer/serviceImporterFields';
import { i18n } from 'src/i18n';

const serviceImporterActions = importerActions(
  'SERVICE_IMPORTER',
  selectors,
  ServiceService.import,
  fields,
  i18n('entities.service.importer.fileName'),
);

export default serviceImporterActions;