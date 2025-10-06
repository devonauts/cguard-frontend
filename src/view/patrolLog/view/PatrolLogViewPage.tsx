import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/patrolLog/view/patrolLogViewActions';
import selectors from 'src/modules/patrolLog/view/patrolLogViewSelectors';
import PatrolLogView from 'src/view/patrolLog/view/PatrolLogView';
import PatrolLogViewToolbar from 'src/view/patrolLog/view/PatrolLogViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function PatrolLogPage() {
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
          [i18n('entities.patrolLog.menu'), '/patrol-log'],
          [i18n('entities.patrolLog.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.patrolLog.view.title')}
        </PageTitle>

        <PatrolLogViewToolbar match={match} />

        <PatrolLogView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
}

export default PatrolLogPage;
