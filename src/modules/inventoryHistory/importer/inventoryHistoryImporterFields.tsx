import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';import moment from 'moment';

export default [
  {
    name: 'shiftOrigin',
    label: i18n('entities.inventoryHistory.fields.shiftOrigin'),
    schema: schemas.relationToOne(
      i18n('entities.inventoryHistory.fields.shiftOrigin'),
      {},
    ),
  },
  {
    name: 'inventoryCheckedDate',
    label: i18n('entities.inventoryHistory.fields.inventoryCheckedDate'),
    schema: schemas.date(
      i18n('entities.inventoryHistory.fields.inventoryCheckedDate'),
      {},
    ),
   render: (value) => value && value instanceof Date ? moment(value).format('YYYY-MM-DD') : value,
  },
  {
    name: 'inventoryOrigin',
    label: i18n('entities.inventoryHistory.fields.inventoryOrigin'),
    schema: schemas.relationToOne(
      i18n('entities.inventoryHistory.fields.inventoryOrigin'),
      {},
    ),
  },
  {
    name: 'isComplete',
    label: i18n('entities.inventoryHistory.fields.isComplete'),
    schema: schemas.boolean(
      i18n('entities.inventoryHistory.fields.isComplete'),
      {},
    ),
  },
  {
    name: 'observation',
    label: i18n('entities.inventoryHistory.fields.observation'),
    schema: schemas.string(
      i18n('entities.inventoryHistory.fields.observation'),
      {
        "max": 500
      },
    ),
  },
];