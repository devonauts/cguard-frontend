import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/videoTutorialCategory/importer/videoTutorialCategoryImporterSelectors';
import VideoTutorialCategoryService from 'src/modules/videoTutorialCategory/videoTutorialCategoryService';
import fields from 'src/modules/videoTutorialCategory/importer/videoTutorialCategoryImporterFields';
import { i18n } from 'src/i18n';

const videoTutorialCategoryImporterActions = importerActions(
  'VIDEOTUTORIALCATEGORY_IMPORTER',
  selectors,
  VideoTutorialCategoryService.import,
  fields,
  i18n('entities.videoTutorialCategory.importer.fileName'),
);

export default videoTutorialCategoryImporterActions;