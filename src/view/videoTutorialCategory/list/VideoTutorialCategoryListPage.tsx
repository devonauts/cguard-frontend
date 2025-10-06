import React from 'react';
import { i18n } from 'src/i18n';
import VideoTutorialCategoryListFilter from 'src/view/videoTutorialCategory/list/VideoTutorialCategoryListFilter';
import VideoTutorialCategoryListTable from 'src/view/videoTutorialCategory/list/VideoTutorialCategoryListTable';
import VideoTutorialCategoryListToolbar from 'src/view/videoTutorialCategory/list/VideoTutorialCategoryListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function VideoTutorialCategoryListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.videoTutorialCategory.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.videoTutorialCategory.list.title')}
        </PageTitle>

        <VideoTutorialCategoryListToolbar />
        <VideoTutorialCategoryListFilter />
        <VideoTutorialCategoryListTable />
      </ContentWrapper>
    </>
  );
}

export default VideoTutorialCategoryListPage;
