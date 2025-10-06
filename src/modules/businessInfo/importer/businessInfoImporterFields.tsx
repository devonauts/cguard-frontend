import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'companyName',
    label: i18n('entities.businessInfo.fields.companyName'),
    schema: schemas.string(
      i18n('entities.businessInfo.fields.companyName'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'description',
    label: i18n('entities.businessInfo.fields.description'),
    schema: schemas.string(
      i18n('entities.businessInfo.fields.description'),
      {
        "required": true,
        "max": 5000
      },
    ),
  },
  {
    name: 'logo',
    label: i18n('entities.businessInfo.fields.logo'),
    schema: schemas.images(
      i18n('entities.businessInfo.fields.logo'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'contactPhone',
    label: i18n('entities.businessInfo.fields.contactPhone'),
    schema: schemas.string(
      i18n('entities.businessInfo.fields.contactPhone'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'contactEmail',
    label: i18n('entities.businessInfo.fields.contactEmail'),
    schema: schemas.string(
      i18n('entities.businessInfo.fields.contactEmail'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'address',
    label: i18n('entities.businessInfo.fields.address'),
    schema: schemas.string(
      i18n('entities.businessInfo.fields.address'),
      {
        "required": true
      },
    ),
  },
];