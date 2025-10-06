import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/additionalService/importer/additionalServiceImporterSelectors';
import AdditionalServiceService from 'src/modules/additionalService/additionalServiceService';
import fields from 'src/modules/additionalService/importer/additionalServiceImporterFields';
import { i18n } from 'src/i18n';

const additionalServiceImporterActions = importerActions(
  'ADDITIONALSERVICE_IMPORTER',
  selectors,
  AdditionalServiceService.import,
  fields,
  i18n('entities.additionalService.importer.fileName'),
);

export default additionalServiceImporterActions;