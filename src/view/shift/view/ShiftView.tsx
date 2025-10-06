import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import ViewWrapper from 'src/view/shared/styles/ViewWrapper';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import UserViewItem from 'src/view/user/view/UserViewItem';
import moment from 'moment';
import StationViewItem from 'src/view/station/view/StationViewItem';

function ShiftView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <ViewWrapper>
      {record.startTime && <TextViewItem
        label={i18n(
          'entities.shift.fields.startTime',
        )}
        value={moment(record.startTime).format(
          'YYYY-MM-DD HH:mm',
        )}
      />}

      {record.endTime && <TextViewItem
        label={i18n(
          'entities.shift.fields.endTime',
        )}
        value={moment(record.endTime).format(
          'YYYY-MM-DD HH:mm',
        )}
      />}

      <StationViewItem
        label={i18n('entities.shift.fields.station')}
        value={record.station}
      />

      <UserViewItem
        label={i18n('entities.shift.fields.guard')}
        value={record.guard}
      />
    </ViewWrapper>
  );
}

export default ShiftView;
