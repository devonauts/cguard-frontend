import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import ViewWrapper from 'src/view/shared/styles/ViewWrapper';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import VideoTutorialCategoryViewItem from 'src/view/videoTutorialCategory/view/VideoTutorialCategoryViewItem';

function VideoTutorialView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <ViewWrapper>
      <TextViewItem
        label={i18n('entities.videoTutorial.fields.videoTutorialName')}
        value={record.videoTutorialName}
      />

      <TextViewItem
        label={i18n('entities.videoTutorial.fields.videoTutorialLink')}
        value={record.videoTutorialLink}
      />

      <VideoTutorialCategoryViewItem
        label={i18n('entities.videoTutorial.fields.videoTutorialCategory')}
        value={record.videoTutorialCategory}
      />
    </ViewWrapper>
  );
}

export default VideoTutorialView;
