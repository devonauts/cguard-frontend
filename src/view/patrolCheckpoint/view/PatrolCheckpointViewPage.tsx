import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/patrolCheckpoint/view/patrolCheckpointViewActions';
import selectors from 'src/modules/patrolCheckpoint/view/patrolCheckpointViewSelectors';
import PatrolCheckpointView from 'src/view/patrolCheckpoint/view/PatrolCheckpointView';
import PatrolCheckpointViewToolbar from 'src/view/patrolCheckpoint/view/PatrolCheckpointViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function PatrolCheckpointPage() {
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
          [i18n('entities.patrolCheckpoint.menu'), '/patrol-checkpoint'],
          [i18n('entities.patrolCheckpoint.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.patrolCheckpoint.view.title')}
        </PageTitle>

        <PatrolCheckpointViewToolbar match={match} />

        <PatrolCheckpointView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
}

export default PatrolCheckpointPage;
