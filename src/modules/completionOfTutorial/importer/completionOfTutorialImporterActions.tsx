import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/completionOfTutorial/importer/completionOfTutorialImporterSelectors';
import CompletionOfTutorialService from 'src/modules/completionOfTutorial/completionOfTutorialService';
import fields from 'src/modules/completionOfTutorial/importer/completionOfTutorialImporterFields';
import { i18n } from 'src/i18n';

const completionOfTutorialImporterActions = importerActions(
  'COMPLETIONOFTUTORIAL_IMPORTER',
  selectors,
  CompletionOfTutorialService.import,
  fields,
  i18n('entities.completionOfTutorial.importer.fileName'),
);

export default completionOfTutorialImporterActions;