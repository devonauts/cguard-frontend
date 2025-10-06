import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.billing.fields.id'),
  },
  {
    name: 'invoiceNumber',
    label: i18n('entities.billing.fields.invoiceNumber'),
  },
  {
    name: 'status',
    label: i18n('entities.billing.fields.status'),
  },
  {
    name: 'clientsInvoiced',
    label: i18n('entities.billing.fields.clientsInvoiced'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'montoPorPagar',
    label: i18n('entities.billing.fields.montoPorPagar'),
    render: exporterRenders.decimal(),
  },
  {
    name: 'lastPaymentDate',
    label: i18n('entities.billing.fields.lastPaymentDate'),
  },
  {
    name: 'nextPaymentDate',
    label: i18n('entities.billing.fields.nextPaymentDate'),
  },
  {
    name: 'bill',
    label: i18n('entities.billing.fields.bill'),
    render: exporterRenders.filesOrImages(),
  },
  {
    name: 'description',
    label: i18n('entities.billing.fields.description'),
  },
  {
    name: 'createdAt',
    label: i18n('entities.billing.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.billing.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
