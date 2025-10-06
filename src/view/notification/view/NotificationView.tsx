import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import ViewWrapper from 'src/view/shared/styles/ViewWrapper';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import UserViewItem from 'src/view/user/view/UserViewItem';
import ImagesViewItem from 'src/view/shared/view/ImagesViewItem';
import DeviceIdInformationViewItem from 'src/view/deviceIdInformation/view/DeviceIdInformationViewItem';

function NotificationView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <ViewWrapper>
      <DeviceIdInformationViewItem
        label={i18n('entities.notification.fields.deviceId')}
        value={record.deviceId}
      />

      <TextViewItem
        label={i18n('entities.notification.fields.title')}
        value={record.title}
      />

      <TextViewItem
        label={i18n('entities.notification.fields.body')}
        value={record.body}
      />

      <ImagesViewItem
        label={i18n('entities.notification.fields.imageUrl')}
        value={record.imageUrl}
      />

      <TextViewItem
        label={i18n('entities.notification.fields.targetType')}
        value={
          record.targetType &&
          i18n(
            `entities.notification.enumerators.targetType.${record.targetType}`,
          )
        }
      />

      <TextViewItem
        label={i18n('entities.notification.fields.targetId')}
        value={record.targetId}
      />

      <UserViewItem
        label={i18n('entities.notification.fields.whoCreatedTheNotification')}
        value={record.whoCreatedTheNotification}
      />

      <TextViewItem
        label={i18n('entities.notification.fields.deliveryStatus')}
        value={
          record.deliveryStatus &&
          i18n(
            `entities.notification.enumerators.deliveryStatus.${record.deliveryStatus}`,
          )
        }
      />

      <TextViewItem
        label={i18n('entities.notification.fields.readStatus')}
        value={
          record.readStatus
            ? i18n('common.yes')
            : i18n('common.no')
        }
      />
    </ViewWrapper>
  );
}

export default NotificationView;
