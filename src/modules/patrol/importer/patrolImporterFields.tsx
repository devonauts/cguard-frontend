import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';import patrolEnumerators from 'src/modules/patrol/patrolEnumerators';
import moment from 'moment';

export default [
  {
    name: 'assignedGuard',
    label: i18n('entities.patrol.fields.assignedGuard'),
    schema: schemas.relationToOne(
      i18n('entities.patrol.fields.assignedGuard'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'station',
    label: i18n('entities.patrol.fields.station'),
    schema: schemas.relationToOne(
      i18n('entities.patrol.fields.station'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'scheduledTime',
    label: i18n('entities.patrol.fields.scheduledTime'),
    schema: schemas.datetime(
      i18n('entities.patrol.fields.scheduledTime'),
      {
        "required": true
      },
    ),
   render: (value) => value && value instanceof Date ? moment(value).format('YYYY-MM-DD HH:mm') : value,
  },
  {
    name: 'completed',
    label: i18n('entities.patrol.fields.completed'),
    schema: schemas.boolean(
      i18n('entities.patrol.fields.completed'),
      {},
    ),
  },
  {
    name: 'checkpoints',
    label: i18n('entities.patrol.fields.checkpoints'),
    schema: schemas.relationToMany(
      i18n('entities.patrol.fields.checkpoints'),
      {},
    ),
  },
  {
    name: 'completionTime',
    label: i18n('entities.patrol.fields.completionTime'),
    schema: schemas.datetime(
      i18n('entities.patrol.fields.completionTime'),
      {},
    ),
   render: (value) => value && value instanceof Date ? moment(value).format('YYYY-MM-DD HH:mm') : value,
  },
  {
    name: 'status',
    label: i18n('entities.patrol.fields.status'),
    schema: schemas.enumerator(
      i18n('entities.patrol.fields.status'),
      {
        "options": patrolEnumerators.status
      },
    ),
  },
  {
    name: 'logs',
    label: i18n('entities.patrol.fields.logs'),
    schema: schemas.relationToMany(
      i18n('entities.patrol.fields.logs'),
      {},
    ),
  },
];