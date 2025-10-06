import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/station/importer/stationImporterSelectors';
import StationService from 'src/modules/station/stationService';
import fields from 'src/modules/station/importer/stationImporterFields';
import { i18n } from 'src/i18n';

const stationImporterActions = importerActions(
  'STATION_IMPORTER',
  selectors,
  StationService.import,
  fields,
  i18n('entities.station.importer.fileName'),
);

export default stationImporterActions;