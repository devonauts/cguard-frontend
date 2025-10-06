import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/incident/importer/incidentImporterSelectors';
import IncidentService from 'src/modules/incident/incidentService';
import fields from 'src/modules/incident/importer/incidentImporterFields';
import { i18n } from 'src/i18n';

const incidentImporterActions = importerActions(
  'INCIDENT_IMPORTER',
  selectors,
  IncidentService.import,
  fields,
  i18n('entities.incident.importer.fileName'),
);

export default incidentImporterActions;