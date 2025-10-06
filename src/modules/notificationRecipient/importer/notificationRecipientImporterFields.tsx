import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';import notificationRecipientEnumerators from 'src/modules/notificationRecipient/notificationRecipientEnumerators';
import moment from 'moment';

export default [
  {
    name: 'notification',
    label: i18n('entities.notificationRecipient.fields.notification'),
    schema: schemas.relationToOne(
      i18n('entities.notificationRecipient.fields.notification'),
      {},
    ),
  },
  {
    name: 'recipientId',
    label: i18n('entities.notificationRecipient.fields.recipientId'),
    schema: schemas.string(
      i18n('entities.notificationRecipient.fields.recipientId'),
      {},
    ),
  },
  {
    name: 'readStatus',
    label: i18n('entities.notificationRecipient.fields.readStatus'),
    schema: schemas.boolean(
      i18n('entities.notificationRecipient.fields.readStatus'),
      {},
    ),
  },
  {
    name: 'deliveryStatus',
    label: i18n('entities.notificationRecipient.fields.deliveryStatus'),
    schema: schemas.enumerator(
      i18n('entities.notificationRecipient.fields.deliveryStatus'),
      {
        "options": notificationRecipientEnumerators.deliveryStatus
      },
    ),
  },
  {
    name: 'dateDelivered',
    label: i18n('entities.notificationRecipient.fields.dateDelivered'),
    schema: schemas.datetime(
      i18n('entities.notificationRecipient.fields.dateDelivered'),
      {},
    ),
   render: (value) => value && value instanceof Date ? moment(value).format('YYYY-MM-DD HH:mm') : value,
  },
];