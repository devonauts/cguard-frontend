import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import ViewWrapper from 'src/view/shared/styles/ViewWrapper';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import ImagesViewItem from 'src/view/shared/view/ImagesViewItem';

function ServiceView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <ViewWrapper>
      <ImagesViewItem
        label={i18n('entities.service.fields.iconImage')}
        value={record.iconImage}
      />

      <TextViewItem
        label={i18n('entities.service.fields.title')}
        value={record.title}
      />

      <TextViewItem
        label={i18n('entities.service.fields.description')}
        value={record.description}
      />

      <TextViewItem
        label={i18n('entities.service.fields.price')}
        value={record.price}
      />

      <ImagesViewItem
        label={i18n('entities.service.fields.serviceImages')}
        value={record.serviceImages}
      />

      <TextViewItem
        label={i18n('entities.service.fields.specifications')}
        value={record.specifications}
      />

      <TextViewItem
        label={i18n('entities.service.fields.subtitle')}
        value={record.subtitle}
      />
    </ViewWrapper>
  );
}

export default ServiceView;
