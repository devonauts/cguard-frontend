import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/videoTutorial/importer/videoTutorialImporterSelectors';
import VideoTutorialService from 'src/modules/videoTutorial/videoTutorialService';
import fields from 'src/modules/videoTutorial/importer/videoTutorialImporterFields';
import { i18n } from 'src/i18n';

const videoTutorialImporterActions = importerActions(
  'VIDEOTUTORIAL_IMPORTER',
  selectors,
  VideoTutorialService.import,
  fields,
  i18n('entities.videoTutorial.importer.fileName'),
);

export default videoTutorialImporterActions;