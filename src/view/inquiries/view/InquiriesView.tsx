import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import ViewWrapper from 'src/view/shared/styles/ViewWrapper';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import ServiceViewItem from 'src/view/service/view/ServiceViewItem';

function InquiriesView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <ViewWrapper>
      <TextViewItem
        label={i18n('entities.inquiries.fields.names')}
        value={record.names}
      />

      <TextViewItem
        label={i18n('entities.inquiries.fields.city')}
        value={record.city}
      />

      <TextViewItem
        label={i18n('entities.inquiries.fields.email')}
        value={record.email}
      />

      <TextViewItem
        label={i18n('entities.inquiries.fields.phoneNumber')}
        value={record.phoneNumber}
      />

      <TextViewItem
        label={i18n('entities.inquiries.fields.message')}
        value={record.message}
      />

      <ServiceViewItem
        label={i18n('entities.inquiries.fields.serviceOfInterest')}
        value={record.serviceOfInterest}
      />
    </ViewWrapper>
  );
}

export default InquiriesView;
