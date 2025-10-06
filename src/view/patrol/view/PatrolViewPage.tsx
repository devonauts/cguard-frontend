import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/patrol/view/patrolViewActions';
import selectors from 'src/modules/patrol/view/patrolViewSelectors';
import PatrolView from 'src/view/patrol/view/PatrolView';
import PatrolViewToolbar from 'src/view/patrol/view/PatrolViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function PatrolPage() {
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
          [i18n('entities.patrol.menu'), '/patrol'],
          [i18n('entities.patrol.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.patrol.view.title')}
        </PageTitle>

        <PatrolViewToolbar match={match} />

        <PatrolView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
}

export default PatrolPage;
