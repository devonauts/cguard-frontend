import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/clientAccount/importer/clientAccountImporterSelectors';
import ClientAccountService from 'src/modules/clientAccount/clientAccountService';
import fields from 'src/modules/clientAccount/importer/clientAccountImporterFields';
import { i18n } from 'src/i18n';

const clientAccountImporterActions = importerActions(
  'CLIENTACCOUNT_IMPORTER',
  selectors,
  ClientAccountService.import,
  fields,
  i18n('entities.clientAccount.importer.fileName'),
);

export default clientAccountImporterActions;