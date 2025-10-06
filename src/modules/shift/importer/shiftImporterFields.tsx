import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';import moment from 'moment';

export default [
  {
    name: 'startTime',
    label: i18n('entities.shift.fields.startTime'),
    schema: schemas.datetime(
      i18n('entities.shift.fields.startTime'),
      {
        "required": true
      },
    ),
   render: (value) => value && value instanceof Date ? moment(value).format('YYYY-MM-DD HH:mm') : value,
  },
  {
    name: 'endTime',
    label: i18n('entities.shift.fields.endTime'),
    schema: schemas.datetime(
      i18n('entities.shift.fields.endTime'),
      {
        "required": true
      },
    ),
   render: (value) => value && value instanceof Date ? moment(value).format('YYYY-MM-DD HH:mm') : value,
  },
  {
    name: 'station',
    label: i18n('entities.shift.fields.station'),
    schema: schemas.relationToOne(
      i18n('entities.shift.fields.station'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'guard',
    label: i18n('entities.shift.fields.guard'),
    schema: schemas.relationToOne(
      i18n('entities.shift.fields.guard'),
      {
        "required": true
      },
    ),
  },
];