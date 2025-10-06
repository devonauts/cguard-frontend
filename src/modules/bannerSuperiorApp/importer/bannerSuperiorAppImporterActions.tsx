import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/bannerSuperiorApp/importer/bannerSuperiorAppImporterSelectors';
import BannerSuperiorAppService from 'src/modules/bannerSuperiorApp/bannerSuperiorAppService';
import fields from 'src/modules/bannerSuperiorApp/importer/bannerSuperiorAppImporterFields';
import { i18n } from 'src/i18n';

const bannerSuperiorAppImporterActions = importerActions(
  'BANNERSUPERIORAPP_IMPORTER',
  selectors,
  BannerSuperiorAppService.import,
  fields,
  i18n('entities.bannerSuperiorApp.importer.fileName'),
);

export default bannerSuperiorAppImporterActions;