import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/tutorial/view/tutorialViewActions';
import selectors from 'src/modules/tutorial/view/tutorialViewSelectors';
import TutorialView from 'src/view/tutorial/view/TutorialView';
import TutorialViewToolbar from 'src/view/tutorial/view/TutorialViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function TutorialPage() {
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
          [i18n('entities.tutorial.menu'), '/tutorial'],
          [i18n('entities.tutorial.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.tutorial.view.title')}
        </PageTitle>

        <TutorialViewToolbar match={match} />

        <TutorialView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
}

export default TutorialPage;
