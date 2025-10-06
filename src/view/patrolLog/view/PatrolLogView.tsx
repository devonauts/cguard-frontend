import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import ViewWrapper from 'src/view/shared/styles/ViewWrapper';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import UserViewItem from 'src/view/user/view/UserViewItem';
import moment from 'moment';
import PatrolViewItem from 'src/view/patrol/view/PatrolViewItem';

function PatrolLogView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <ViewWrapper>
      <PatrolViewItem
        label={i18n('entities.patrolLog.fields.patrol')}
        value={record.patrol}
      />

      <UserViewItem
        label={i18n('entities.patrolLog.fields.scannedBy')}
        value={record.scannedBy}
      />

      {record.scanTime && <TextViewItem
        label={i18n(
          'entities.patrolLog.fields.scanTime',
        )}
        value={moment(record.scanTime).format(
          'YYYY-MM-DD HH:mm',
        )}
      />}

      <TextViewItem
        label={i18n('entities.patrolLog.fields.latitude')}
        value={record.latitude}
      />

      <TextViewItem
        label={i18n('entities.patrolLog.fields.longitude')}
        value={record.longitude}
      />

      <TextViewItem
        label={i18n('entities.patrolLog.fields.validLocation')}
        value={
          record.validLocation
            ? i18n('common.yes')
            : i18n('common.no')
        }
      />

      <TextViewItem
        label={i18n('entities.patrolLog.fields.status')}
        value={
          record.status &&
          i18n(
            `entities.patrolLog.enumerators.status.${record.status}`,
          )
        }
      />
    </ViewWrapper>
  );
}

export default PatrolLogView;
