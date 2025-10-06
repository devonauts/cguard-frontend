import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.inquiries.fields.id'),
  },
  {
    name: 'names',
    label: i18n('entities.inquiries.fields.names'),
  },
  {
    name: 'city',
    label: i18n('entities.inquiries.fields.city'),
  },
  {
    name: 'email',
    label: i18n('entities.inquiries.fields.email'),
  },
  {
    name: 'phoneNumber',
    label: i18n('entities.inquiries.fields.phoneNumber'),
  },
  {
    name: 'message',
    label: i18n('entities.inquiries.fields.message'),
  },
  {
    name: 'serviceOfInterest',
    label: i18n('entities.inquiries.fields.serviceOfInterest'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.inquiries.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.inquiries.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
