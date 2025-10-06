import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import ViewWrapper from 'src/view/shared/styles/ViewWrapper';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import StationViewItem from 'src/view/station/view/StationViewItem';

function AdditionalServiceView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <ViewWrapper>
      <TextViewItem
        label={i18n('entities.additionalService.fields.stationAditionalServiceName')}
        value={record.stationAditionalServiceName}
      />

      <TextViewItem
        label={i18n('entities.additionalService.fields.dvr')}
        value={
          record.dvr &&
          i18n(
            `entities.additionalService.enumerators.dvr.${record.dvr}`,
          )
        }
      />

      <TextViewItem
        label={i18n('entities.additionalService.fields.dvrSerialCode')}
        value={record.dvrSerialCode}
      />

      <TextViewItem
        label={i18n('entities.additionalService.fields.juegoDeCamarasInteriores')}
        value={
          record.juegoDeCamarasInteriores &&
          i18n(
            `entities.additionalService.enumerators.juegoDeCamarasInteriores.${record.juegoDeCamarasInteriores}`,
          )
        }
      />

      <TextViewItem
        label={i18n('entities.additionalService.fields.juegoDeCamarasExteriores')}
        value={
          record.juegoDeCamarasExteriores &&
          i18n(
            `entities.additionalService.enumerators.juegoDeCamarasExteriores.${record.juegoDeCamarasExteriores}`,
          )
        }
      />

      <StationViewItem
        label={i18n('entities.additionalService.fields.stations')}
        value={record.stations}
      />
    </ViewWrapper>
  );
}

export default AdditionalServiceView;
