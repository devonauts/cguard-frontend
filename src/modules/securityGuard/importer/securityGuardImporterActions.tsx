import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/securityGuard/importer/securityGuardImporterSelectors';
import SecurityGuardService from 'src/modules/securityGuard/securityGuardService';
import fields from 'src/modules/securityGuard/importer/securityGuardImporterFields';
import { i18n } from 'src/i18n';

const securityGuardImporterActions = importerActions(
  'SECURITYGUARD_IMPORTER',
  selectors,
  SecurityGuardService.import,
  fields,
  i18n('entities.securityGuard.importer.fileName'),
);

export default securityGuardImporterActions;