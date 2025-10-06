import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import ViewWrapper from 'src/view/shared/styles/ViewWrapper';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import ImagesViewItem from 'src/view/shared/view/ImagesViewItem';

function BusinessInfoView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <ViewWrapper>
      <TextViewItem
        label={i18n('entities.businessInfo.fields.companyName')}
        value={record.companyName}
      />

      <TextViewItem
        label={i18n('entities.businessInfo.fields.description')}
        value={record.description}
      />

      <ImagesViewItem
        label={i18n('entities.businessInfo.fields.logo')}
        value={record.logo}
      />

      <TextViewItem
        label={i18n('entities.businessInfo.fields.contactPhone')}
        value={record.contactPhone}
      />

      <TextViewItem
        label={i18n('entities.businessInfo.fields.contactEmail')}
        value={record.contactEmail}
      />

      <TextViewItem
        label={i18n('entities.businessInfo.fields.address')}
        value={record.address}
      />
    </ViewWrapper>
  );
}

export default BusinessInfoView;
