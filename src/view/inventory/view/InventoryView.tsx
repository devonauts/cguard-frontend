import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import ViewWrapper from 'src/view/shared/styles/ViewWrapper';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import StationViewItem from 'src/view/station/view/StationViewItem';

function InventoryView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <ViewWrapper>
      <StationViewItem
        label={i18n('entities.inventory.fields.belongsTo')}
        value={record.belongsTo}
      />

      <TextViewItem
        label={i18n('entities.inventory.fields.belongsToStation')}
        value={record.belongsToStation}
      />

      <TextViewItem
        label={i18n('entities.inventory.fields.radio')}
        value={
          record.radio
            ? i18n('common.yes')
            : i18n('common.no')
        }
      />

      <TextViewItem
        label={i18n('entities.inventory.fields.radioType')}
        value={record.radioType}
      />

      <TextViewItem
        label={i18n('entities.inventory.fields.radioSerialNumber')}
        value={record.radioSerialNumber}
      />

      <TextViewItem
        label={i18n('entities.inventory.fields.gun')}
        value={
          record.gun
            ? i18n('common.yes')
            : i18n('common.no')
        }
      />

      <TextViewItem
        label={i18n('entities.inventory.fields.gunType')}
        value={
          record.gunType &&
          i18n(
            `entities.inventory.enumerators.gunType.${record.gunType}`,
          )
        }
      />

      <TextViewItem
        label={i18n('entities.inventory.fields.gunSerialNumber')}
        value={record.gunSerialNumber}
      />

      <TextViewItem
        label={i18n('entities.inventory.fields.armor')}
        value={
          record.armor
            ? i18n('common.yes')
            : i18n('common.no')
        }
      />

      <TextViewItem
        label={i18n('entities.inventory.fields.armorType')}
        value={record.armorType}
      />

      <TextViewItem
        label={i18n('entities.inventory.fields.armorSerialNumber')}
        value={record.armorSerialNumber}
      />

      <TextViewItem
        label={i18n('entities.inventory.fields.tolete')}
        value={
          record.tolete
            ? i18n('common.yes')
            : i18n('common.no')
        }
      />

      <TextViewItem
        label={i18n('entities.inventory.fields.pito')}
        value={
          record.pito
            ? i18n('common.yes')
            : i18n('common.no')
        }
      />

      <TextViewItem
        label={i18n('entities.inventory.fields.linterna')}
        value={
          record.linterna
            ? i18n('common.yes')
            : i18n('common.no')
        }
      />

      <TextViewItem
        label={i18n('entities.inventory.fields.vitacora')}
        value={
          record.vitacora
            ? i18n('common.yes')
            : i18n('common.no')
        }
      />

      <TextViewItem
        label={i18n('entities.inventory.fields.cintoCompleto')}
        value={
          record.cintoCompleto
            ? i18n('common.yes')
            : i18n('common.no')
        }
      />

      <TextViewItem
        label={i18n('entities.inventory.fields.ponchoDeAguas')}
        value={
          record.ponchoDeAguas
            ? i18n('common.yes')
            : i18n('common.no')
        }
      />

      <TextViewItem
        label={i18n('entities.inventory.fields.detectorDeMetales')}
        value={
          record.detectorDeMetales
            ? i18n('common.yes')
            : i18n('common.no')
        }
      />

      <TextViewItem
        label={i18n('entities.inventory.fields.caseta')}
        value={
          record.caseta
            ? i18n('common.yes')
            : i18n('common.no')
        }
      />

      <TextViewItem
        label={i18n('entities.inventory.fields.observations')}
        value={record.observations}
      />

      <TextViewItem
        label={i18n('entities.inventory.fields.transportation')}
        value={
          record.transportation &&
          i18n(
            `entities.inventory.enumerators.transportation.${record.transportation}`,
          )
        }
      />
    </ViewWrapper>
  );
}

export default InventoryView;
