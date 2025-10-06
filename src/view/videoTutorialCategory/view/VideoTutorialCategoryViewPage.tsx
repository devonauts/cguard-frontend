import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/videoTutorialCategory/view/videoTutorialCategoryViewActions';
import selectors from 'src/modules/videoTutorialCategory/view/videoTutorialCategoryViewSelectors';
import VideoTutorialCategoryView from 'src/view/videoTutorialCategory/view/VideoTutorialCategoryView';
import VideoTutorialCategoryViewToolbar from 'src/view/videoTutorialCategory/view/VideoTutorialCategoryViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function VideoTutorialCategoryPage() {
  const dispatch = useDispatch();
  const match = useRouteMatch();

  const loading = useSelector(selectors.selectLoading);
  const record = useSelector(selectors.selectRecord);

  useEffect(() => {
    dispatch(actions.doFind(match.params.id));
  }, [dispatch, match.params.id]);

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.videoTutorialCategory.menu'), '/video-tutorial-category'],
          [i18n('entities.videoTutorialCategory.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.videoTutorialCategory.view.title')}
        </PageTitle>

        <VideoTutorialCategoryViewToolbar match={match} />

        <VideoTutorialCategoryView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
}

export default VideoTutorialCategoryPage;
