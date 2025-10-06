import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/videoTutorial/view/videoTutorialViewActions';
import selectors from 'src/modules/videoTutorial/view/videoTutorialViewSelectors';
import VideoTutorialView from 'src/view/videoTutorial/view/VideoTutorialView';
import VideoTutorialViewToolbar from 'src/view/videoTutorial/view/VideoTutorialViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function VideoTutorialPage() {
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
          [i18n('entities.videoTutorial.menu'), '/video-tutorial'],
          [i18n('entities.videoTutorial.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.videoTutorial.view.title')}
        </PageTitle>

        <VideoTutorialViewToolbar match={match} />

        <VideoTutorialView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
}

export default VideoTutorialPage;
