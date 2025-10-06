import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import ViewWrapper from 'src/view/shared/styles/ViewWrapper';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import VideoTutorialCategoryViewItem from 'src/view/videoTutorialCategory/view/VideoTutorialCategoryViewItem';

function TutorialView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <ViewWrapper>
      <TextViewItem
        label={i18n('entities.tutorial.fields.tutorialName')}
        value={record.tutorialName}
      />

      <VideoTutorialCategoryViewItem
        label={i18n('entities.tutorial.fields.tutorialCategory')}
        value={record.tutorialCategory}
      />

      <VideoTutorialCategoryViewItem
        label={i18n('entities.tutorial.fields.tutorialVideos')}
        value={record.tutorialVideos}
      />
    </ViewWrapper>
  );
}

export default TutorialView;
