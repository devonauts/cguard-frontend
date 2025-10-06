import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.additionalService.fields.id'),
  },
  {
    name: 'stationAditionalServiceName',
    label: i18n('entities.additionalService.fields.stationAditionalServiceName'),
  },
  {
    name: 'dvr',
    label: i18n('entities.additionalService.fields.dvr'),
  },
  {
    name: 'dvrSerialCode',
    label: i18n('entities.additionalService.fields.dvrSerialCode'),
  },
  {
    name: 'juegoDeCamarasInteriores',
    label: i18n('entities.additionalService.fields.juegoDeCamarasInteriores'),
  },
  {
    name: 'juegoDeCamarasExteriores',
    label: i18n('entities.additionalService.fields.juegoDeCamarasExteriores'),
  },
  {
    name: 'stations',
    label: i18n('entities.additionalService.fields.stations'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.additionalService.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.additionalService.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
