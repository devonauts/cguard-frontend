import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/representanteEmpresa/importer/representanteEmpresaImporterSelectors';
import RepresentanteEmpresaService from 'src/modules/representanteEmpresa/representanteEmpresaService';
import fields from 'src/modules/representanteEmpresa/importer/representanteEmpresaImporterFields';
import { i18n } from 'src/i18n';

const representanteEmpresaImporterActions = importerActions(
  'REPRESENTANTEEMPRESA_IMPORTER',
  selectors,
  RepresentanteEmpresaService.import,
  fields,
  i18n('entities.representanteEmpresa.importer.fileName'),
);

export default representanteEmpresaImporterActions;