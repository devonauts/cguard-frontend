import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import ViewWrapper from 'src/view/shared/styles/ViewWrapper';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import UserViewItem from 'src/view/user/view/UserViewItem';
import moment from 'moment';
import StationViewItem from 'src/view/station/view/StationViewItem';
import PatrolCheckpointViewItem from 'src/view/patrolCheckpoint/view/PatrolCheckpointViewItem';
import PatrolLogViewItem from 'src/view/patrolLog/view/PatrolLogViewItem';

function PatrolView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <ViewWrapper>
      <UserViewItem
        label={i18n('entities.patrol.fields.assignedGuard')}
        value={record.assignedGuard}
      />

      <StationViewItem
        label={i18n('entities.patrol.fields.station')}
        value={record.station}
      />

      {record.scheduledTime && <TextViewItem
        label={i18n(
          'entities.patrol.fields.scheduledTime',
        )}
        value={moment(record.scheduledTime).format(
          'YYYY-MM-DD HH:mm',
        )}
      />}

      <TextViewItem
        label={i18n('entities.patrol.fields.completed')}
        value={
          record.completed
            ? i18n('common.yes')
            : i18n('common.no')
        }
      />

      <PatrolCheckpointViewItem
        label={i18n('entities.patrol.fields.checkpoints')}
        value={record.checkpoints}
      />

      {record.completionTime && <TextViewItem
        label={i18n(
          'entities.patrol.fields.completionTime',
        )}
        value={moment(record.completionTime).format(
          'YYYY-MM-DD HH:mm',
        )}
      />}

      <TextViewItem
        label={i18n('entities.patrol.fields.status')}
        value={
          record.status &&
          i18n(
            `entities.patrol.enumerators.status.${record.status}`,
          )
        }
      />

      <PatrolLogViewItem
        label={i18n('entities.patrol.fields.logs')}
        value={record.logs}
      />
    </ViewWrapper>
  );
}

export default PatrolView;
