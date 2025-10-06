import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'iconImage',
    label: i18n('entities.service.fields.iconImage'),
    schema: schemas.images(
      i18n('entities.service.fields.iconImage'),
      {
        "max": 1
      },
    ),
  },
  {
    name: 'title',
    label: i18n('entities.service.fields.title'),
    schema: schemas.string(
      i18n('entities.service.fields.title'),
      {},
    ),
  },
  {
    name: 'description',
    label: i18n('entities.service.fields.description'),
    schema: schemas.string(
      i18n('entities.service.fields.description'),
      {
        "required": true,
        "max": 800
      },
    ),
  },
  {
    name: 'price',
    label: i18n('entities.service.fields.price'),
    schema: schemas.decimal(
      i18n('entities.service.fields.price'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'serviceImages',
    label: i18n('entities.service.fields.serviceImages'),
    schema: schemas.images(
      i18n('entities.service.fields.serviceImages'),
      {
        "max": 10
      },
    ),
  },
  {
    name: 'specifications',
    label: i18n('entities.service.fields.specifications'),
    schema: schemas.string(
      i18n('entities.service.fields.specifications'),
      {
        "max": 800,
        "required": true
      },
    ),
  },
  {
    name: 'subtitle',
    label: i18n('entities.service.fields.subtitle'),
    schema: schemas.string(
      i18n('entities.service.fields.subtitle'),
      {
        "max": 150
      },
    ),
  },
];