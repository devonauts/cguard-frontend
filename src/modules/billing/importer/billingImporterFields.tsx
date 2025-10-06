import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';import billingEnumerators from 'src/modules/billing/billingEnumerators';
import moment from 'moment';

export default [
  {
    name: 'invoiceNumber',
    label: i18n('entities.billing.fields.invoiceNumber'),
    schema: schemas.string(
      i18n('entities.billing.fields.invoiceNumber'),
      {
        "max": 50,
        "required": true
      },
    ),
  },
  {
    name: 'status',
    label: i18n('entities.billing.fields.status'),
    schema: schemas.enumerator(
      i18n('entities.billing.fields.status'),
      {
        "required": true,
        "options": billingEnumerators.status
      },
    ),
  },
  {
    name: 'clientsInvoiced',
    label: i18n('entities.billing.fields.clientsInvoiced'),
    schema: schemas.relationToOne(
      i18n('entities.billing.fields.clientsInvoiced'),
      {},
    ),
  },
  {
    name: 'montoPorPagar',
    label: i18n('entities.billing.fields.montoPorPagar'),
    schema: schemas.decimal(
      i18n('entities.billing.fields.montoPorPagar'),
      {},
    ),
  },
  {
    name: 'lastPaymentDate',
    label: i18n('entities.billing.fields.lastPaymentDate'),
    schema: schemas.date(
      i18n('entities.billing.fields.lastPaymentDate'),
      {},
    ),
   render: (value) => value && value instanceof Date ? moment(value).format('YYYY-MM-DD') : value,
  },
  {
    name: 'nextPaymentDate',
    label: i18n('entities.billing.fields.nextPaymentDate'),
    schema: schemas.date(
      i18n('entities.billing.fields.nextPaymentDate'),
      {},
    ),
   render: (value) => value && value instanceof Date ? moment(value).format('YYYY-MM-DD') : value,
  },
  {
    name: 'bill',
    label: i18n('entities.billing.fields.bill'),
    schema: schemas.files(
      i18n('entities.billing.fields.bill'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'description',
    label: i18n('entities.billing.fields.description'),
    schema: schemas.string(
      i18n('entities.billing.fields.description'),
      {
        "max": 100,
        "required": true
      },
    ),
  },
];