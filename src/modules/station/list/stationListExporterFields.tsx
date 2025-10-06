import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.station.fields.id'),
  },
  {
    name: 'stationOrigin',
    label: i18n('entities.station.fields.stationOrigin'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'stationName',
    label: i18n('entities.station.fields.stationName'),
  },
  {
    name: 'latitud',
    label: i18n('entities.station.fields.latitud'),
  },
  {
    name: 'longitud',
    label: i18n('entities.station.fields.longitud'),
  },
  {
    name: 'numberOfGuardsInStation',
    label: i18n('entities.station.fields.numberOfGuardsInStation'),
  },
  {
    name: 'assignedGuards',
    label: i18n('entities.station.fields.assignedGuards'),
    render: exporterRenders.relationToMany(),
  },
  {
    name: 'stationSchedule',
    label: i18n('entities.station.fields.stationSchedule'),
  },
  {
    name: 'startingTimeInDay',
    label: i18n('entities.station.fields.startingTimeInDay'),
  },
  {
    name: 'finishTimeInDay',
    label: i18n('entities.station.fields.finishTimeInDay'),
  },
  {
    name: 'tasks',
    label: i18n('entities.station.fields.tasks'),
    render: exporterRenders.relationToMany(),
  },
  {
    name: 'reports',
    label: i18n('entities.station.fields.reports'),
    render: exporterRenders.relationToMany(),
  },
  {
    name: 'incidents',
    label: i18n('entities.station.fields.incidents'),
    render: exporterRenders.relationToMany(),
  },
  {
    name: 'checkpoints',
    label: i18n('entities.station.fields.checkpoints'),
    render: exporterRenders.relationToMany(),
  },
  {
    name: 'patrol',
    label: i18n('entities.station.fields.patrol'),
    render: exporterRenders.relationToMany(),
  },
  {
    name: 'shift',
    label: i18n('entities.station.fields.shift'),
    render: exporterRenders.relationToMany(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.station.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.station.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
