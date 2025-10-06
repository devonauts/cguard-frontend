import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.clientAccount.fields.id'),
  },
  {
    name: 'contractDate',
    label: i18n('entities.clientAccount.fields.contractDate'),
  },
  {
    name: 'rucNumber',
    label: i18n('entities.clientAccount.fields.rucNumber'),
  },
  {
    name: 'commercialName',
    label: i18n('entities.clientAccount.fields.commercialName'),
  },
  {
    name: 'address',
    label: i18n('entities.clientAccount.fields.address'),
  },
  {
    name: 'phoneNumber',
    label: i18n('entities.clientAccount.fields.phoneNumber'),
  },
  {
    name: 'faxNumber',
    label: i18n('entities.clientAccount.fields.faxNumber'),
  },
  {
    name: 'email',
    label: i18n('entities.clientAccount.fields.email'),
  },
  {
    name: 'logoUrl',
    label: i18n('entities.clientAccount.fields.logoUrl'),
    render: exporterRenders.filesOrImages(),
  },
  {
    name: 'placePictureUrl',
    label: i18n('entities.clientAccount.fields.placePictureUrl'),
    render: exporterRenders.filesOrImages(),
  },
  {
    name: 'representante',
    label: i18n('entities.clientAccount.fields.representante'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'purchasedServices',
    label: i18n('entities.clientAccount.fields.purchasedServices'),
    render: exporterRenders.relationToMany(),
  },
  {
    name: 'stations',
    label: i18n('entities.clientAccount.fields.stations'),
    render: exporterRenders.relationToMany(),
  },
  {
    name: 'billingInvoices',
    label: i18n('entities.clientAccount.fields.billingInvoices'),
    render: exporterRenders.relationToMany(),
  },
  {
    name: 'pushNotifications',
    label: i18n('entities.clientAccount.fields.pushNotifications'),
    render: exporterRenders.relationToMany(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.clientAccount.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.clientAccount.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
