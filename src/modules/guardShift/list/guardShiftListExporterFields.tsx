import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.guardShift.fields.id'),
  },
  {
    name: 'punchInTime',
    label: i18n('entities.guardShift.fields.punchInTime'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'shiftSchedule',
    label: i18n('entities.guardShift.fields.shiftSchedule'),
  },
  {
    name: 'stationName',
    label: i18n('entities.guardShift.fields.stationName'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'guardName',
    label: i18n('entities.guardShift.fields.guardName'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'completeInventoryCheck',
    label: i18n('entities.guardShift.fields.completeInventoryCheck'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'numberOfPatrolsDuringShift',
    label: i18n('entities.guardShift.fields.numberOfPatrolsDuringShift'),
  },
  {
    name: 'patrolsDone',
    label: i18n('entities.guardShift.fields.patrolsDone'),
    render: exporterRenders.relationToMany(),
  },
  {
    name: 'numberOfIncidentsDurindShift',
    label: i18n('entities.guardShift.fields.numberOfIncidentsDurindShift'),
  },
  {
    name: 'dailyIncidents',
    label: i18n('entities.guardShift.fields.dailyIncidents'),
    render: exporterRenders.relationToMany(),
  },
  {
    name: 'observations',
    label: i18n('entities.guardShift.fields.observations'),
  },
  {
    name: 'punchOutTime',
    label: i18n('entities.guardShift.fields.punchOutTime'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.guardShift.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.guardShift.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
