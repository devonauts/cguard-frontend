import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';import moment from 'moment';

export default [
  {
    name: 'contractDate',
    label: i18n('entities.clientAccount.fields.contractDate'),
    schema: schemas.date(
      i18n('entities.clientAccount.fields.contractDate'),
      {},
    ),
   render: (value) => value && value instanceof Date ? moment(value).format('YYYY-MM-DD') : value,
  },
  {
    name: 'rucNumber',
    label: i18n('entities.clientAccount.fields.rucNumber'),
    schema: schemas.string(
      i18n('entities.clientAccount.fields.rucNumber'),
      {
        "max": 13
      },
    ),
  },
  {
    name: 'commercialName',
    label: i18n('entities.clientAccount.fields.commercialName'),
    schema: schemas.string(
      i18n('entities.clientAccount.fields.commercialName'),
      {
        "max": 200
      },
    ),
  },
  {
    name: 'address',
    label: i18n('entities.clientAccount.fields.address'),
    schema: schemas.string(
      i18n('entities.clientAccount.fields.address'),
      {
        "max": 200,
        "required": true
      },
    ),
  },
  {
    name: 'phoneNumber',
    label: i18n('entities.clientAccount.fields.phoneNumber'),
    schema: schemas.string(
      i18n('entities.clientAccount.fields.phoneNumber'),
      {
        "max": 10,
        "required": true
      },
    ),
  },
  {
    name: 'faxNumber',
    label: i18n('entities.clientAccount.fields.faxNumber'),
    schema: schemas.string(
      i18n('entities.clientAccount.fields.faxNumber'),
      {
        "max": 10
      },
    ),
  },
  {
    name: 'email',
    label: i18n('entities.clientAccount.fields.email'),
    schema: schemas.string(
      i18n('entities.clientAccount.fields.email'),
      {
        "required": true,
        "max": 150
      },
    ),
  },
  {
    name: 'logoUrl',
    label: i18n('entities.clientAccount.fields.logoUrl'),
    schema: schemas.images(
      i18n('entities.clientAccount.fields.logoUrl'),
      {
        "max": 1
      },
    ),
  },
  {
    name: 'placePictureUrl',
    label: i18n('entities.clientAccount.fields.placePictureUrl'),
    schema: schemas.images(
      i18n('entities.clientAccount.fields.placePictureUrl'),
      {
        "max": 1
      },
    ),
  },
  {
    name: 'representante',
    label: i18n('entities.clientAccount.fields.representante'),
    schema: schemas.relationToOne(
      i18n('entities.clientAccount.fields.representante'),
      {},
    ),
  },
  {
    name: 'purchasedServices',
    label: i18n('entities.clientAccount.fields.purchasedServices'),
    schema: schemas.relationToMany(
      i18n('entities.clientAccount.fields.purchasedServices'),
      {},
    ),
  },
  {
    name: 'stations',
    label: i18n('entities.clientAccount.fields.stations'),
    schema: schemas.relationToMany(
      i18n('entities.clientAccount.fields.stations'),
      {},
    ),
  },
  {
    name: 'billingInvoices',
    label: i18n('entities.clientAccount.fields.billingInvoices'),
    schema: schemas.relationToMany(
      i18n('entities.clientAccount.fields.billingInvoices'),
      {},
    ),
  },
  {
    name: 'pushNotifications',
    label: i18n('entities.clientAccount.fields.pushNotifications'),
    schema: schemas.relationToMany(
      i18n('entities.clientAccount.fields.pushNotifications'),
      {},
    ),
  },
];