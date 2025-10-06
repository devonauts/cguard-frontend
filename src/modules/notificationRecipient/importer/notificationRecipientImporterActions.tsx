import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/notificationRecipient/importer/notificationRecipientImporterSelectors';
import NotificationRecipientService from 'src/modules/notificationRecipient/notificationRecipientService';
import fields from 'src/modules/notificationRecipient/importer/notificationRecipientImporterFields';
import { i18n } from 'src/i18n';

const notificationRecipientImporterActions = importerActions(
  'NOTIFICATIONRECIPIENT_IMPORTER',
  selectors,
  NotificationRecipientService.import,
  fields,
  i18n('entities.notificationRecipient.importer.fileName'),
);

export default notificationRecipientImporterActions;