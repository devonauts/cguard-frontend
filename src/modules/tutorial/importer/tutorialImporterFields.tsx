import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'tutorialName',
    label: i18n('entities.tutorial.fields.tutorialName'),
    schema: schemas.string(
      i18n('entities.tutorial.fields.tutorialName'),
      {
        "max": 200
      },
    ),
  },
  {
    name: 'tutorialCategory',
    label: i18n('entities.tutorial.fields.tutorialCategory'),
    schema: schemas.relationToOne(
      i18n('entities.tutorial.fields.tutorialCategory'),
      {},
    ),
  },
  {
    name: 'tutorialVideos',
    label: i18n('entities.tutorial.fields.tutorialVideos'),
    schema: schemas.relationToMany(
      i18n('entities.tutorial.fields.tutorialVideos'),
      {},
    ),
  },
];