import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';import patrolLogEnumerators from 'src/modules/patrolLog/patrolLogEnumerators';
import moment from 'moment';

export default [
  {
    name: 'patrol',
    label: i18n('entities.patrolLog.fields.patrol'),
    schema: schemas.relationToOne(
      i18n('entities.patrolLog.fields.patrol'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'scannedBy',
    label: i18n('entities.patrolLog.fields.scannedBy'),
    schema: schemas.relationToOne(
      i18n('entities.patrolLog.fields.scannedBy'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'scanTime',
    label: i18n('entities.patrolLog.fields.scanTime'),
    schema: schemas.datetime(
      i18n('entities.patrolLog.fields.scanTime'),
      {
        "required": true
      },
    ),
   render: (value) => value && value instanceof Date ? moment(value).format('YYYY-MM-DD HH:mm') : value,
  },
  {
    name: 'latitude',
    label: i18n('entities.patrolLog.fields.latitude'),
    schema: schemas.string(
      i18n('entities.patrolLog.fields.latitude'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'longitude',
    label: i18n('entities.patrolLog.fields.longitude'),
    schema: schemas.string(
      i18n('entities.patrolLog.fields.longitude'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'validLocation',
    label: i18n('entities.patrolLog.fields.validLocation'),
    schema: schemas.boolean(
      i18n('entities.patrolLog.fields.validLocation'),
      {},
    ),
  },
  {
    name: 'status',
    label: i18n('entities.patrolLog.fields.status'),
    schema: schemas.enumerator(
      i18n('entities.patrolLog.fields.status'),
      {
        "required": true,
        "options": patrolLogEnumerators.status
      },
    ),
  },
];