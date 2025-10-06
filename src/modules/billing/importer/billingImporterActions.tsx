import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/billing/importer/billingImporterSelectors';
import BillingService from 'src/modules/billing/billingService';
import fields from 'src/modules/billing/importer/billingImporterFields';
import { i18n } from 'src/i18n';

const billingImporterActions = importerActions(
  'BILLING_IMPORTER',
  selectors,
  BillingService.import,
  fields,
  i18n('entities.billing.importer.fileName'),
);

export default billingImporterActions;