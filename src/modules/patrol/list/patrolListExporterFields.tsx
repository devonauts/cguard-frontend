import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.patrol.fields.id'),
  },
  {
    name: 'assignedGuard',
    label: i18n('entities.patrol.fields.assignedGuard'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'station',
    label: i18n('entities.patrol.fields.station'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'scheduledTime',
    label: i18n('entities.patrol.fields.scheduledTime'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'completed',
    label: i18n('entities.patrol.fields.completed'),
    render: exporterRenders.boolean(),
  },
  {
    name: 'checkpoints',
    label: i18n('entities.patrol.fields.checkpoints'),
    render: exporterRenders.relationToMany(),
  },
  {
    name: 'completionTime',
    label: i18n('entities.patrol.fields.completionTime'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'status',
    label: i18n('entities.patrol.fields.status'),
  },
  {
    name: 'logs',
    label: i18n('entities.patrol.fields.logs'),
    render: exporterRenders.relationToMany(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.patrol.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.patrol.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
