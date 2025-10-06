import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/patrolLog/importer/patrolLogImporterSelectors';
import PatrolLogService from 'src/modules/patrolLog/patrolLogService';
import fields from 'src/modules/patrolLog/importer/patrolLogImporterFields';
import { i18n } from 'src/i18n';

const patrolLogImporterActions = importerActions(
  'PATROLLOG_IMPORTER',
  selectors,
  PatrolLogService.import,
  fields,
  i18n('entities.patrolLog.importer.fileName'),
);

export default patrolLogImporterActions;