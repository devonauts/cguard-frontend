import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.notification.fields.id'),
  },
  {
    name: 'deviceId',
    label: i18n('entities.notification.fields.deviceId'),
    render: exporterRenders.relationToMany(),
  },
  {
    name: 'title',
    label: i18n('entities.notification.fields.title'),
  },
  {
    name: 'body',
    label: i18n('entities.notification.fields.body'),
  },
  {
    name: 'imageUrl',
    label: i18n('entities.notification.fields.imageUrl'),
    render: exporterRenders.filesOrImages(),
  },
  {
    name: 'targetType',
    label: i18n('entities.notification.fields.targetType'),
  },
  {
    name: 'targetId',
    label: i18n('entities.notification.fields.targetId'),
  },
  {
    name: 'whoCreatedTheNotification',
    label: i18n('entities.notification.fields.whoCreatedTheNotification'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'deliveryStatus',
    label: i18n('entities.notification.fields.deliveryStatus'),
  },
  {
    name: 'readStatus',
    label: i18n('entities.notification.fields.readStatus'),
    render: exporterRenders.boolean(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.notification.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.notification.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
