import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'title',
    label: i18n('entities.bannerSuperiorApp.fields.title'),
    schema: schemas.string(
      i18n('entities.bannerSuperiorApp.fields.title'),
      {
        "max": 255,
        "required": true
      },
    ),
  },
  {
    name: 'imageUrl',
    label: i18n('entities.bannerSuperiorApp.fields.imageUrl'),
    schema: schemas.images(
      i18n('entities.bannerSuperiorApp.fields.imageUrl'),
      {
        "max": 1,
        "required": true
      },
    ),
  },
  {
    name: 'link',
    label: i18n('entities.bannerSuperiorApp.fields.link'),
    schema: schemas.string(
      i18n('entities.bannerSuperiorApp.fields.link'),
      {},
    ),
  },
];