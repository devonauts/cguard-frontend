import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/patrol/importer/patrolImporterSelectors';
import PatrolService from 'src/modules/patrol/patrolService';
import fields from 'src/modules/patrol/importer/patrolImporterFields';
import { i18n } from 'src/i18n';

const patrolImporterActions = importerActions(
  'PATROL_IMPORTER',
  selectors,
  PatrolService.import,
  fields,
  i18n('entities.patrol.importer.fileName'),
);

export default patrolImporterActions;