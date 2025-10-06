import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'videoTutorialName',
    label: i18n('entities.videoTutorial.fields.videoTutorialName'),
    schema: schemas.string(
      i18n('entities.videoTutorial.fields.videoTutorialName'),
      {
        "required": true,
        "max": 200
      },
    ),
  },
  {
    name: 'videoTutorialLink',
    label: i18n('entities.videoTutorial.fields.videoTutorialLink'),
    schema: schemas.string(
      i18n('entities.videoTutorial.fields.videoTutorialLink'),
      {
        "max": 800
      },
    ),
  },
  {
    name: 'videoTutorialCategory',
    label: i18n('entities.videoTutorial.fields.videoTutorialCategory'),
    schema: schemas.relationToOne(
      i18n('entities.videoTutorial.fields.videoTutorialCategory'),
      {},
    ),
  },
];