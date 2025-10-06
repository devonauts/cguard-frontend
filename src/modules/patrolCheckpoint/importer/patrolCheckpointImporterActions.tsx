import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/patrolCheckpoint/importer/patrolCheckpointImporterSelectors';
import PatrolCheckpointService from 'src/modules/patrolCheckpoint/patrolCheckpointService';
import fields from 'src/modules/patrolCheckpoint/importer/patrolCheckpointImporterFields';
import { i18n } from 'src/i18n';

const patrolCheckpointImporterActions = importerActions(
  'PATROLCHECKPOINT_IMPORTER',
  selectors,
  PatrolCheckpointService.import,
  fields,
  i18n('entities.patrolCheckpoint.importer.fileName'),
);

export default patrolCheckpointImporterActions;