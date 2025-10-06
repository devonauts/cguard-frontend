import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import ViewWrapper from 'src/view/shared/styles/ViewWrapper';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import ImagesViewItem from 'src/view/shared/view/ImagesViewItem';

function BannerSuperiorAppView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <ViewWrapper>
      <TextViewItem
        label={i18n('entities.bannerSuperiorApp.fields.title')}
        value={record.title}
      />

      <ImagesViewItem
        label={i18n('entities.bannerSuperiorApp.fields.imageUrl')}
        value={record.imageUrl}
      />

      <TextViewItem
        label={i18n('entities.bannerSuperiorApp.fields.link')}
        value={record.link}
      />
    </ViewWrapper>
  );
}

export default BannerSuperiorAppView;
