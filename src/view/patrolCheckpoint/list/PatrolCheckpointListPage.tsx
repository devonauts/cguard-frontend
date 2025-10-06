import React from 'react';
import { i18n } from 'src/i18n';
import PatrolCheckpointListFilter from 'src/view/patrolCheckpoint/list/PatrolCheckpointListFilter';
import PatrolCheckpointListTable from 'src/view/patrolCheckpoint/list/PatrolCheckpointListTable';
import PatrolCheckpointListToolbar from 'src/view/patrolCheckpoint/list/PatrolCheckpointListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function PatrolCheckpointListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.patrolCheckpoint.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.patrolCheckpoint.list.title')}
        </PageTitle>

        <PatrolCheckpointListToolbar />
        <PatrolCheckpointListFilter />
        <PatrolCheckpointListTable />
      </ContentWrapper>
    </>
  );
}

export default PatrolCheckpointListPage;
