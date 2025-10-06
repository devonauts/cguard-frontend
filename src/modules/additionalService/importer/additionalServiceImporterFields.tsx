import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';import additionalServiceEnumerators from 'src/modules/additionalService/additionalServiceEnumerators';

export default [
  {
    name: 'stationAditionalServiceName',
    label: i18n('entities.additionalService.fields.stationAditionalServiceName'),
    schema: schemas.string(
      i18n('entities.additionalService.fields.stationAditionalServiceName'),
      {
        "required": true,
        "max": 250
      },
    ),
  },
  {
    name: 'dvr',
    label: i18n('entities.additionalService.fields.dvr'),
    schema: schemas.enumerator(
      i18n('entities.additionalService.fields.dvr'),
      {
        "options": additionalServiceEnumerators.dvr
      },
    ),
  },
  {
    name: 'dvrSerialCode',
    label: i18n('entities.additionalService.fields.dvrSerialCode'),
    schema: schemas.string(
      i18n('entities.additionalService.fields.dvrSerialCode'),
      {
        "required": true,
        "max": 100
      },
    ),
  },
  {
    name: 'juegoDeCamarasInteriores',
    label: i18n('entities.additionalService.fields.juegoDeCamarasInteriores'),
    schema: schemas.enumerator(
      i18n('entities.additionalService.fields.juegoDeCamarasInteriores'),
      {
        "options": additionalServiceEnumerators.juegoDeCamarasInteriores
      },
    ),
  },
  {
    name: 'juegoDeCamarasExteriores',
    label: i18n('entities.additionalService.fields.juegoDeCamarasExteriores'),
    schema: schemas.enumerator(
      i18n('entities.additionalService.fields.juegoDeCamarasExteriores'),
      {
        "options": additionalServiceEnumerators.juegoDeCamarasExteriores
      },
    ),
  },
  {
    name: 'stations',
    label: i18n('entities.additionalService.fields.stations'),
    schema: schemas.relationToOne(
      i18n('entities.additionalService.fields.stations'),
      {},
    ),
  },
];