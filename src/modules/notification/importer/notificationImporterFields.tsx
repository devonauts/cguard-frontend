import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';import notificationEnumerators from 'src/modules/notification/notificationEnumerators';

export default [
  {
    name: 'deviceId',
    label: i18n('entities.notification.fields.deviceId'),
    schema: schemas.relationToMany(
      i18n('entities.notification.fields.deviceId'),
      {},
    ),
  },
  {
    name: 'title',
    label: i18n('entities.notification.fields.title'),
    schema: schemas.string(
      i18n('entities.notification.fields.title'),
      {
        "max": 100
      },
    ),
  },
  {
    name: 'body',
    label: i18n('entities.notification.fields.body'),
    schema: schemas.string(
      i18n('entities.notification.fields.body'),
      {
        "max": 200
      },
    ),
  },
  {
    name: 'imageUrl',
    label: i18n('entities.notification.fields.imageUrl'),
    schema: schemas.images(
      i18n('entities.notification.fields.imageUrl'),
      {
        "max": 1
      },
    ),
  },
  {
    name: 'targetType',
    label: i18n('entities.notification.fields.targetType'),
    schema: schemas.enumerator(
      i18n('entities.notification.fields.targetType'),
      {
        "options": notificationEnumerators.targetType
      },
    ),
  },
  {
    name: 'targetId',
    label: i18n('entities.notification.fields.targetId'),
    schema: schemas.string(
      i18n('entities.notification.fields.targetId'),
      {},
    ),
  },
  {
    name: 'whoCreatedTheNotification',
    label: i18n('entities.notification.fields.whoCreatedTheNotification'),
    schema: schemas.relationToOne(
      i18n('entities.notification.fields.whoCreatedTheNotification'),
      {},
    ),
  },
  {
    name: 'deliveryStatus',
    label: i18n('entities.notification.fields.deliveryStatus'),
    schema: schemas.enumerator(
      i18n('entities.notification.fields.deliveryStatus'),
      {
        "options": notificationEnumerators.deliveryStatus
      },
    ),
  },
  {
    name: 'readStatus',
    label: i18n('entities.notification.fields.readStatus'),
    schema: schemas.boolean(
      i18n('entities.notification.fields.readStatus'),
      {},
    ),
  },
];