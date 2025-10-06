import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/insurance/importer/insuranceImporterSelectors';
import InsuranceService from 'src/modules/insurance/insuranceService';
import fields from 'src/modules/insurance/importer/insuranceImporterFields';
import { i18n } from 'src/i18n';

const insuranceImporterActions = importerActions(
  'INSURANCE_IMPORTER',
  selectors,
  InsuranceService.import,
  fields,
  i18n('entities.insurance.importer.fileName'),
);

export default insuranceImporterActions;