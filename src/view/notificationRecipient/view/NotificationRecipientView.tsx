import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import ViewWrapper from 'src/view/shared/styles/ViewWrapper';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import moment from 'moment';
import NotificationViewItem from 'src/view/notification/view/NotificationViewItem';

function NotificationRecipientView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <ViewWrapper>
      <NotificationViewItem
        label={i18n('entities.notificationRecipient.fields.notification')}
        value={record.notification}
      />

      <TextViewItem
        label={i18n('entities.notificationRecipient.fields.recipientId')}
        value={record.recipientId}
      />

      <TextViewItem
        label={i18n('entities.notificationRecipient.fields.readStatus')}
        value={
          record.readStatus
            ? i18n('common.yes')
            : i18n('common.no')
        }
      />

      <TextViewItem
        label={i18n('entities.notificationRecipient.fields.deliveryStatus')}
        value={
          record.deliveryStatus &&
          i18n(
            `entities.notificationRecipient.enumerators.deliveryStatus.${record.deliveryStatus}`,
          )
        }
      />

      {record.dateDelivered && <TextViewItem
        label={i18n(
          'entities.notificationRecipient.fields.dateDelivered',
        )}
        value={moment(record.dateDelivered).format(
          'YYYY-MM-DD HH:mm',
        )}
      />}
    </ViewWrapper>
  );
}

export default NotificationRecipientView;
