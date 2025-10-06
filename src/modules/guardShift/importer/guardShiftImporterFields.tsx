import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';import guardShiftEnumerators from 'src/modules/guardShift/guardShiftEnumerators';
import moment from 'moment';

export default [
  {
    name: 'punchInTime',
    label: i18n('entities.guardShift.fields.punchInTime'),
    schema: schemas.datetime(
      i18n('entities.guardShift.fields.punchInTime'),
      {
        "required": true
      },
    ),
   render: (value) => value && value instanceof Date ? moment(value).format('YYYY-MM-DD HH:mm') : value,
  },
  {
    name: 'shiftSchedule',
    label: i18n('entities.guardShift.fields.shiftSchedule'),
    schema: schemas.enumerator(
      i18n('entities.guardShift.fields.shiftSchedule'),
      {
        "required": true,
        "options": guardShiftEnumerators.shiftSchedule
      },
    ),
  },
  {
    name: 'stationName',
    label: i18n('entities.guardShift.fields.stationName'),
    schema: schemas.relationToOne(
      i18n('entities.guardShift.fields.stationName'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'guardName',
    label: i18n('entities.guardShift.fields.guardName'),
    schema: schemas.relationToOne(
      i18n('entities.guardShift.fields.guardName'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'completeInventoryCheck',
    label: i18n('entities.guardShift.fields.completeInventoryCheck'),
    schema: schemas.relationToOne(
      i18n('entities.guardShift.fields.completeInventoryCheck'),
      {},
    ),
  },
  {
    name: 'numberOfPatrolsDuringShift',
    label: i18n('entities.guardShift.fields.numberOfPatrolsDuringShift'),
    schema: schemas.integer(
      i18n('entities.guardShift.fields.numberOfPatrolsDuringShift'),
      {},
    ),
  },
  {
    name: 'patrolsDone',
    label: i18n('entities.guardShift.fields.patrolsDone'),
    schema: schemas.relationToMany(
      i18n('entities.guardShift.fields.patrolsDone'),
      {},
    ),
  },
  {
    name: 'numberOfIncidentsDurindShift',
    label: i18n('entities.guardShift.fields.numberOfIncidentsDurindShift'),
    schema: schemas.integer(
      i18n('entities.guardShift.fields.numberOfIncidentsDurindShift'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'dailyIncidents',
    label: i18n('entities.guardShift.fields.dailyIncidents'),
    schema: schemas.relationToMany(
      i18n('entities.guardShift.fields.dailyIncidents'),
      {},
    ),
  },
  {
    name: 'observations',
    label: i18n('entities.guardShift.fields.observations'),
    schema: schemas.string(
      i18n('entities.guardShift.fields.observations'),
      {
        "max": 500,
        "required": true
      },
    ),
  },
  {
    name: 'punchOutTime',
    label: i18n('entities.guardShift.fields.punchOutTime'),
    schema: schemas.datetime(
      i18n('entities.guardShift.fields.punchOutTime'),
      {},
    ),
   render: (value) => value && value instanceof Date ? moment(value).format('YYYY-MM-DD HH:mm') : value,
  },
];