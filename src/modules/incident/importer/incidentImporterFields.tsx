import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';import moment from 'moment';

export default [
  {
    name: 'date',
    label: i18n('entities.incident.fields.date'),
    schema: schemas.datetime(
      i18n('entities.incident.fields.date'),
      {
        "required": true
      },
    ),
   render: (value) => value && value instanceof Date ? moment(value).format('YYYY-MM-DD HH:mm') : value,
  },
  {
    name: 'title',
    label: i18n('entities.incident.fields.title'),
    schema: schemas.string(
      i18n('entities.incident.fields.title'),
      {
        "required": true,
        "max": 255
      },
    ),
  },
  {
    name: 'description',
    label: i18n('entities.incident.fields.description'),
    schema: schemas.string(
      i18n('entities.incident.fields.description'),
      {
        "max": 2500,
        "required": true
      },
    ),
  },
  {
    name: 'imageUrl',
    label: i18n('entities.incident.fields.imageUrl'),
    schema: schemas.images(
      i18n('entities.incident.fields.imageUrl'),
      {
        "min": 1,
        "max": 20
      },
    ),
  },
  {
    name: 'wasRead',
    label: i18n('entities.incident.fields.wasRead'),
    schema: schemas.boolean(
      i18n('entities.incident.fields.wasRead'),
      {},
    ),
  },
  {
    name: 'stationIncidents',
    label: i18n('entities.incident.fields.stationIncidents'),
    schema: schemas.relationToOne(
      i18n('entities.incident.fields.stationIncidents'),
      {},
    ),
  },
];