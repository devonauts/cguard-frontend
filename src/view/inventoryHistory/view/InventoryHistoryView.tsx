import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import ViewWrapper from 'src/view/shared/styles/ViewWrapper';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import GuardShiftViewItem from 'src/view/guardShift/view/GuardShiftViewItem';
import InventoryViewItem from 'src/view/inventory/view/InventoryViewItem';

function InventoryHistoryView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <ViewWrapper>
      <GuardShiftViewItem
        label={i18n('entities.inventoryHistory.fields.shiftOrigin')}
        value={record.shiftOrigin}
      />

      <TextViewItem
        label={i18n('entities.inventoryHistory.fields.inventoryCheckedDate')}
        value={record.inventoryCheckedDate}
      />

      <InventoryViewItem
        label={i18n('entities.inventoryHistory.fields.inventoryOrigin')}
        value={record.inventoryOrigin}
      />

      <TextViewItem
        label={i18n('entities.inventoryHistory.fields.isComplete')}
        value={
          record.isComplete
            ? i18n('common.yes')
            : i18n('common.no')
        }
      />

      <TextViewItem
        label={i18n('entities.inventoryHistory.fields.observation')}
        value={record.observation}
      />
    </ViewWrapper>
  );
}

export default InventoryHistoryView;
