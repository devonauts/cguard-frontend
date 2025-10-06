import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/inquiries/importer/inquiriesImporterSelectors';
import InquiriesService from 'src/modules/inquiries/inquiriesService';
import fields from 'src/modules/inquiries/importer/inquiriesImporterFields';
import { i18n } from 'src/i18n';

const inquiriesImporterActions = importerActions(
  'INQUIRIES_IMPORTER',
  selectors,
  InquiriesService.import,
  fields,
  i18n('entities.inquiries.importer.fileName'),
);

export default inquiriesImporterActions;