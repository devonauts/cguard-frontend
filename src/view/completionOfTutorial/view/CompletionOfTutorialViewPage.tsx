import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/completionOfTutorial/view/completionOfTutorialViewActions';
import selectors from 'src/modules/completionOfTutorial/view/completionOfTutorialViewSelectors';
import CompletionOfTutorialView from 'src/view/completionOfTutorial/view/CompletionOfTutorialView';
import CompletionOfTutorialViewToolbar from 'src/view/completionOfTutorial/view/CompletionOfTutorialViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function CompletionOfTutorialPage() {
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
          [i18n('entities.completionOfTutorial.menu'), '/completion-of-tutorial'],
          [i18n('entities.completionOfTutorial.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.completionOfTutorial.view.title')}
        </PageTitle>

        <CompletionOfTutorialViewToolbar match={match} />

        <CompletionOfTutorialView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
}

export default CompletionOfTutorialPage;
