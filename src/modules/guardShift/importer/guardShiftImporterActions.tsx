import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/guardShift/importer/guardShiftImporterSelectors';
import GuardShiftService from 'src/modules/guardShift/guardShiftService';
import fields from 'src/modules/guardShift/importer/guardShiftImporterFields';
import { i18n } from 'src/i18n';

const guardShiftImporterActions = importerActions(
  'GUARDSHIFT_IMPORTER',
  selectors,
  GuardShiftService.import,
  fields,
  i18n('entities.guardShift.importer.fileName'),
);

export default guardShiftImporterActions;