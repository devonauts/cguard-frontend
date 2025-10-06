import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.service.fields.id'),
  },
  {
    name: 'iconImage',
    label: i18n('entities.service.fields.iconImage'),
    render: exporterRenders.filesOrImages(),
  },
  {
    name: 'title',
    label: i18n('entities.service.fields.title'),
  },
  {
    name: 'description',
    label: i18n('entities.service.fields.description'),
  },
  {
    name: 'price',
    label: i18n('entities.service.fields.price'),
    render: exporterRenders.decimal(),
  },
  {
    name: 'serviceImages',
    label: i18n('entities.service.fields.serviceImages'),
    render: exporterRenders.filesOrImages(),
  },
  {
    name: 'specifications',
    label: i18n('entities.service.fields.specifications'),
  },
  {
    name: 'subtitle',
    label: i18n('entities.service.fields.subtitle'),
  },
  {
    name: 'createdAt',
    label: i18n('entities.service.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.service.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
