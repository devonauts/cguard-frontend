import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/report/importer/reportImporterSelectors';
import ReportService from 'src/modules/report/reportService';
import fields from 'src/modules/report/importer/reportImporterFields';
import { i18n } from 'src/i18n';

const reportImporterActions = importerActions(
  'REPORT_IMPORTER',
  selectors,
  ReportService.import,
  fields,
  i18n('entities.report.importer.fileName'),
);

export default reportImporterActions;