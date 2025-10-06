import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.patrolCheckpoint.fields.id'),
  },
  {
    name: 'station',
    label: i18n('entities.patrolCheckpoint.fields.station'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'name',
    label: i18n('entities.patrolCheckpoint.fields.name'),
  },
  {
    name: 'latitud',
    label: i18n('entities.patrolCheckpoint.fields.latitud'),
  },
  {
    name: 'longitud',
    label: i18n('entities.patrolCheckpoint.fields.longitud'),
  },
  {
    name: 'assignedQrImage',
    label: i18n('entities.patrolCheckpoint.fields.assignedQrImage'),
    render: exporterRenders.filesOrImages(),
  },
  {
    name: 'patrols',
    label: i18n('entities.patrolCheckpoint.fields.patrols'),
    render: exporterRenders.relationToMany(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.patrolCheckpoint.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.patrolCheckpoint.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
