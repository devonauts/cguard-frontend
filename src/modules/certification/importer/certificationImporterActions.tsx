import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/certification/importer/certificationImporterSelectors';
import CertificationService from 'src/modules/certification/certificationService';
import fields from 'src/modules/certification/importer/certificationImporterFields';
import { i18n } from 'src/i18n';

const certificationImporterActions = importerActions(
  'CERTIFICATION_IMPORTER',
  selectors,
  CertificationService.import,
  fields,
  i18n('entities.certification.importer.fileName'),
);

export default certificationImporterActions;