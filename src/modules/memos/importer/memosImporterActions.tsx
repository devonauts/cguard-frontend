import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/memos/importer/memosImporterSelectors';
import MemosService from 'src/modules/memos/memosService';
import fields from 'src/modules/memos/importer/memosImporterFields';
import { i18n } from 'src/i18n';

const memosImporterActions = importerActions(
  'MEMOS_IMPORTER',
  selectors,
  MemosService.import,
  fields,
  i18n('entities.memos.importer.fileName'),
);

export default memosImporterActions;