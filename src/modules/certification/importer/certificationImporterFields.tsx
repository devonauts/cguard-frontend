import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';import moment from 'moment';

export default [
  {
    name: 'title',
    label: i18n('entities.certification.fields.title'),
    schema: schemas.string(
      i18n('entities.certification.fields.title'),
      {
        "max": 255,
        "required": true
      },
    ),
  },
  {
    name: 'code',
    label: i18n('entities.certification.fields.code'),
    schema: schemas.string(
      i18n('entities.certification.fields.code'),
      {
        "required": true,
        "max": 255
      },
    ),
  },
  {
    name: 'image',
    label: i18n('entities.certification.fields.image'),
    schema: schemas.images(
      i18n('entities.certification.fields.image'),
      {
        "max": 1
      },
    ),
  },
  {
    name: 'icon',
    label: i18n('entities.certification.fields.icon'),
    schema: schemas.images(
      i18n('entities.certification.fields.icon'),
      {
        "required": true,
        "max": 1
      },
    ),
  },
  {
    name: 'description',
    label: i18n('entities.certification.fields.description'),
    schema: schemas.string(
      i18n('entities.certification.fields.description'),
      {
        "required": true,
        "max": 800
      },
    ),
  },
  {
    name: 'acquisitionDate',
    label: i18n('entities.certification.fields.acquisitionDate'),
    schema: schemas.date(
      i18n('entities.certification.fields.acquisitionDate'),
      {
        "required": true
      },
    ),
   render: (value) => value && value instanceof Date ? moment(value).format('YYYY-MM-DD') : value,
  },
  {
    name: 'expirationDate',
    label: i18n('entities.certification.fields.expirationDate'),
    schema: schemas.date(
      i18n('entities.certification.fields.expirationDate'),
      {
        "required": true
      },
    ),
   render: (value) => value && value instanceof Date ? moment(value).format('YYYY-MM-DD') : value,
  },
];