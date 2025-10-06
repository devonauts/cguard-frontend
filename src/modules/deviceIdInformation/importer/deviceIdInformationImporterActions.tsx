import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/deviceIdInformation/importer/deviceIdInformationImporterSelectors';
import DeviceIdInformationService from 'src/modules/deviceIdInformation/deviceIdInformationService';
import fields from 'src/modules/deviceIdInformation/importer/deviceIdInformationImporterFields';
import { i18n } from 'src/i18n';

const deviceIdInformationImporterActions = importerActions(
  'DEVICEIDINFORMATION_IMPORTER',
  selectors,
  DeviceIdInformationService.import,
  fields,
  i18n('entities.deviceIdInformation.importer.fileName'),
);

export default deviceIdInformationImporterActions;