import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.incident.fields.id'),
  },
  {
    name: 'date',
    label: i18n('entities.incident.fields.date'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'title',
    label: i18n('entities.incident.fields.title'),
  },
  {
    name: 'description',
    label: i18n('entities.incident.fields.description'),
  },
  {
    name: 'imageUrl',
    label: i18n('entities.incident.fields.imageUrl'),
    render: exporterRenders.filesOrImages(),
  },
  {
    name: 'wasRead',
    label: i18n('entities.incident.fields.wasRead'),
    render: exporterRenders.boolean(),
  },
  {
    name: 'stationIncidents',
    label: i18n('entities.incident.fields.stationIncidents'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.incident.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.incident.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
