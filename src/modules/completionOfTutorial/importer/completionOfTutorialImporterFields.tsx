import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';import moment from 'moment';

export default [
  {
    name: 'guardName',
    label: i18n('entities.completionOfTutorial.fields.guardName'),
    schema: schemas.relationToOne(
      i18n('entities.completionOfTutorial.fields.guardName'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'dateTutorialStarted',
    label: i18n('entities.completionOfTutorial.fields.dateTutorialStarted'),
    schema: schemas.datetime(
      i18n('entities.completionOfTutorial.fields.dateTutorialStarted'),
      {},
    ),
   render: (value) => value && value instanceof Date ? moment(value).format('YYYY-MM-DD HH:mm') : value,
  },
  {
    name: 'tutorialStarted',
    label: i18n('entities.completionOfTutorial.fields.tutorialStarted'),
    schema: schemas.boolean(
      i18n('entities.completionOfTutorial.fields.tutorialStarted'),
      {},
    ),
  },
  {
    name: 'checkedTutorial',
    label: i18n('entities.completionOfTutorial.fields.checkedTutorial'),
    schema: schemas.relationToOne(
      i18n('entities.completionOfTutorial.fields.checkedTutorial'),
      {},
    ),
  },
  {
    name: 'wasCompleted',
    label: i18n('entities.completionOfTutorial.fields.wasCompleted'),
    schema: schemas.boolean(
      i18n('entities.completionOfTutorial.fields.wasCompleted'),
      {},
    ),
  },
  {
    name: 'dateEndedTutorial',
    label: i18n('entities.completionOfTutorial.fields.dateEndedTutorial'),
    schema: schemas.datetime(
      i18n('entities.completionOfTutorial.fields.dateEndedTutorial'),
      {},
    ),
   render: (value) => value && value instanceof Date ? moment(value).format('YYYY-MM-DD HH:mm') : value,
  },
];