import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';import moment from 'moment';

export default [
  {
    name: 'taskBelongsToStation',
    label: i18n('entities.task.fields.taskBelongsToStation'),
    schema: schemas.relationToOne(
      i18n('entities.task.fields.taskBelongsToStation'),
      {},
    ),
  },
  {
    name: 'taskToDo',
    label: i18n('entities.task.fields.taskToDo'),
    schema: schemas.string(
      i18n('entities.task.fields.taskToDo'),
      {
        "required": true,
        "max": 300
      },
    ),
  },
  {
    name: 'wasItDone',
    label: i18n('entities.task.fields.wasItDone'),
    schema: schemas.boolean(
      i18n('entities.task.fields.wasItDone'),
      {},
    ),
  },
  {
    name: 'imageOptional',
    label: i18n('entities.task.fields.imageOptional'),
    schema: schemas.images(
      i18n('entities.task.fields.imageOptional'),
      {
        "max": 1
      },
    ),
  },
  {
    name: 'dateToDoTheTask',
    label: i18n('entities.task.fields.dateToDoTheTask'),
    schema: schemas.datetime(
      i18n('entities.task.fields.dateToDoTheTask'),
      {
        "required": true
      },
    ),
   render: (value) => value && value instanceof Date ? moment(value).format('YYYY-MM-DD HH:mm') : value,
  },
  {
    name: 'dateCompletedTask',
    label: i18n('entities.task.fields.dateCompletedTask'),
    schema: schemas.datetime(
      i18n('entities.task.fields.dateCompletedTask'),
      {},
    ),
   render: (value) => value && value instanceof Date ? moment(value).format('YYYY-MM-DD HH:mm') : value,
  },
  {
    name: 'taskCompletedImage',
    label: i18n('entities.task.fields.taskCompletedImage'),
    schema: schemas.images(
      i18n('entities.task.fields.taskCompletedImage'),
      {
        "max": 5
      },
    ),
  },
];