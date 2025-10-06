import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import ViewWrapper from 'src/view/shared/styles/ViewWrapper';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import VideoTutorialViewItem from 'src/view/videoTutorial/view/VideoTutorialViewItem';

function VideoTutorialCategoryView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <ViewWrapper>
      <TextViewItem
        label={i18n('entities.videoTutorialCategory.fields.categoryName')}
        value={record.categoryName}
      />

      <VideoTutorialViewItem
        label={i18n('entities.videoTutorialCategory.fields.videosInCategory')}
        value={record.videosInCategory}
      />
    </ViewWrapper>
  );
}

export default VideoTutorialCategoryView;
