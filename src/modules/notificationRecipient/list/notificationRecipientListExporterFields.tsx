import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.notificationRecipient.fields.id'),
  },
  {
    name: 'notification',
    label: i18n('entities.notificationRecipient.fields.notification'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'recipientId',
    label: i18n('entities.notificationRecipient.fields.recipientId'),
  },
  {
    name: 'readStatus',
    label: i18n('entities.notificationRecipient.fields.readStatus'),
    render: exporterRenders.boolean(),
  },
  {
    name: 'deliveryStatus',
    label: i18n('entities.notificationRecipient.fields.deliveryStatus'),
  },
  {
    name: 'dateDelivered',
    label: i18n('entities.notificationRecipient.fields.dateDelivered'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.notificationRecipient.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.notificationRecipient.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
