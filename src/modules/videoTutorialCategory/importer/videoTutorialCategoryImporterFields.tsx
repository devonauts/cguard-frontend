import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'categoryName',
    label: i18n('entities.videoTutorialCategory.fields.categoryName'),
    schema: schemas.string(
      i18n('entities.videoTutorialCategory.fields.categoryName'),
      {
        "max": 200
      },
    ),
  },
  {
    name: 'videosInCategory',
    label: i18n('entities.videoTutorialCategory.fields.videosInCategory'),
    schema: schemas.relationToMany(
      i18n('entities.videoTutorialCategory.fields.videosInCategory'),
      {},
    ),
  },
];