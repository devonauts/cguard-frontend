import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import ViewWrapper from 'src/view/shared/styles/ViewWrapper';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import UserViewItem from 'src/view/user/view/UserViewItem';
import ImagesViewItem from 'src/view/shared/view/ImagesViewItem';
import ServiceViewItem from 'src/view/service/view/ServiceViewItem';
import StationViewItem from 'src/view/station/view/StationViewItem';
import BillingViewItem from 'src/view/billing/view/BillingViewItem';
import NotificationRecipientViewItem from 'src/view/notificationRecipient/view/NotificationRecipientViewItem';

function ClientAccountView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <ViewWrapper>
      <TextViewItem
        label={i18n('entities.clientAccount.fields.contractDate')}
        value={record.contractDate}
      />

      <TextViewItem
        label={i18n('entities.clientAccount.fields.rucNumber')}
        value={record.rucNumber}
      />

      <TextViewItem
        label={i18n('entities.clientAccount.fields.commercialName')}
        value={record.commercialName}
      />

      <TextViewItem
        label={i18n('entities.clientAccount.fields.address')}
        value={record.address}
      />

      <TextViewItem
        label={i18n('entities.clientAccount.fields.phoneNumber')}
        value={record.phoneNumber}
      />

      <TextViewItem
        label={i18n('entities.clientAccount.fields.faxNumber')}
        value={record.faxNumber}
      />

      <TextViewItem
        label={i18n('entities.clientAccount.fields.email')}
        value={record.email}
      />

      <ImagesViewItem
        label={i18n('entities.clientAccount.fields.logoUrl')}
        value={record.logoUrl}
      />

      <ImagesViewItem
        label={i18n('entities.clientAccount.fields.placePictureUrl')}
        value={record.placePictureUrl}
      />

      <UserViewItem
        label={i18n('entities.clientAccount.fields.representante')}
        value={record.representante}
      />

      <ServiceViewItem
        label={i18n('entities.clientAccount.fields.purchasedServices')}
        value={record.purchasedServices}
      />

      <StationViewItem
        label={i18n('entities.clientAccount.fields.stations')}
        value={record.stations}
      />

      <BillingViewItem
        label={i18n('entities.clientAccount.fields.billingInvoices')}
        value={record.billingInvoices}
      />

      <NotificationRecipientViewItem
        label={i18n('entities.clientAccount.fields.pushNotifications')}
        value={record.pushNotifications}
      />
    </ViewWrapper>
  );
}

export default ClientAccountView;
