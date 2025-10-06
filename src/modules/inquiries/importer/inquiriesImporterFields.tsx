import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'names',
    label: i18n('entities.inquiries.fields.names'),
    schema: schemas.string(
      i18n('entities.inquiries.fields.names'),
      {
        "max": 200,
        "required": true
      },
    ),
  },
  {
    name: 'city',
    label: i18n('entities.inquiries.fields.city'),
    schema: schemas.string(
      i18n('entities.inquiries.fields.city'),
      {
        "max": 70,
        "required": true
      },
    ),
  },
  {
    name: 'email',
    label: i18n('entities.inquiries.fields.email'),
    schema: schemas.string(
      i18n('entities.inquiries.fields.email'),
      {
        "max": 200,
        "required": true
      },
    ),
  },
  {
    name: 'phoneNumber',
    label: i18n('entities.inquiries.fields.phoneNumber'),
    schema: schemas.string(
      i18n('entities.inquiries.fields.phoneNumber'),
      {
        "max": 10,
        "required": true
      },
    ),
  },
  {
    name: 'message',
    label: i18n('entities.inquiries.fields.message'),
    schema: schemas.string(
      i18n('entities.inquiries.fields.message'),
      {
        "max": 300,
        "required": true
      },
    ),
  },
  {
    name: 'serviceOfInterest',
    label: i18n('entities.inquiries.fields.serviceOfInterest'),
    schema: schemas.relationToOne(
      i18n('entities.inquiries.fields.serviceOfInterest'),
      {
        "required": true
      },
    ),
  },
];