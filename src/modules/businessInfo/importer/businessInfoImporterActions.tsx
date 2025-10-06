import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/businessInfo/importer/businessInfoImporterSelectors';
import BusinessInfoService from 'src/modules/businessInfo/businessInfoService';
import fields from 'src/modules/businessInfo/importer/businessInfoImporterFields';
import { i18n } from 'src/i18n';

const businessInfoImporterActions = importerActions(
  'BUSINESSINFO_IMPORTER',
  selectors,
  BusinessInfoService.import,
  fields,
  i18n('entities.businessInfo.importer.fileName'),
);

export default businessInfoImporterActions;