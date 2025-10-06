import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.patrolLog.fields.id'),
  },
  {
    name: 'patrol',
    label: i18n('entities.patrolLog.fields.patrol'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'scannedBy',
    label: i18n('entities.patrolLog.fields.scannedBy'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'scanTime',
    label: i18n('entities.patrolLog.fields.scanTime'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'latitude',
    label: i18n('entities.patrolLog.fields.latitude'),
  },
  {
    name: 'longitude',
    label: i18n('entities.patrolLog.fields.longitude'),
  },
  {
    name: 'validLocation',
    label: i18n('entities.patrolLog.fields.validLocation'),
    render: exporterRenders.boolean(),
  },
  {
    name: 'status',
    label: i18n('entities.patrolLog.fields.status'),
  },
  {
    name: 'createdAt',
    label: i18n('entities.patrolLog.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.patrolLog.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
