import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import ViewWrapper from 'src/view/shared/styles/ViewWrapper';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import ImagesViewItem from 'src/view/shared/view/ImagesViewItem';

function CertificationView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <ViewWrapper>
      <TextViewItem
        label={i18n('entities.certification.fields.title')}
        value={record.title}
      />

      <TextViewItem
        label={i18n('entities.certification.fields.code')}
        value={record.code}
      />

      <ImagesViewItem
        label={i18n('entities.certification.fields.image')}
        value={record.image}
      />

      <ImagesViewItem
        label={i18n('entities.certification.fields.icon')}
        value={record.icon}
      />

      <TextViewItem
        label={i18n('entities.certification.fields.description')}
        value={record.description}
      />

      <TextViewItem
        label={i18n('entities.certification.fields.acquisitionDate')}
        value={record.acquisitionDate}
      />

      <TextViewItem
        label={i18n('entities.certification.fields.expirationDate')}
        value={record.expirationDate}
      />
    </ViewWrapper>
  );
}

export default CertificationView;
