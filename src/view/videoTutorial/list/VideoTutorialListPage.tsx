import React from 'react';
import { i18n } from 'src/i18n';
import VideoTutorialListFilter from 'src/view/videoTutorial/list/VideoTutorialListFilter';
import VideoTutorialListTable from 'src/view/videoTutorial/list/VideoTutorialListTable';
import VideoTutorialListToolbar from 'src/view/videoTutorial/list/VideoTutorialListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function VideoTutorialListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.videoTutorial.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.videoTutorial.list.title')}
        </PageTitle>

        <VideoTutorialListToolbar />
        <VideoTutorialListFilter />
        <VideoTutorialListTable />
      </ContentWrapper>
    </>
  );
}

export default VideoTutorialListPage;
