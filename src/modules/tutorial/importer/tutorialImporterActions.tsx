import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/tutorial/importer/tutorialImporterSelectors';
import TutorialService from 'src/modules/tutorial/tutorialService';
import fields from 'src/modules/tutorial/importer/tutorialImporterFields';
import { i18n } from 'src/i18n';

const tutorialImporterActions = importerActions(
  'TUTORIAL_IMPORTER',
  selectors,
  TutorialService.import,
  fields,
  i18n('entities.tutorial.importer.fileName'),
);

export default tutorialImporterActions;