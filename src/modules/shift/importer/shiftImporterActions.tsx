import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/shift/importer/shiftImporterSelectors';
import ShiftService from 'src/modules/shift/shiftService';
import fields from 'src/modules/shift/importer/shiftImporterFields';
import { i18n } from 'src/i18n';

const shiftImporterActions = importerActions(
  'SHIFT_IMPORTER',
  selectors,
  ShiftService.import,
  fields,
  i18n('entities.shift.importer.fileName'),
);

export default shiftImporterActions;