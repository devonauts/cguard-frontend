import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'deviceId',
    label: i18n('entities.deviceIdInformation.fields.deviceId'),
    schema: schemas.string(
      i18n('entities.deviceIdInformation.fields.deviceId'),
      {
        "max": 200
      },
    ),
  },
];