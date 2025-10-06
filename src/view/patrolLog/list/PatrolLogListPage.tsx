import React from 'react';
import { i18n } from 'src/i18n';
import PatrolLogListFilter from 'src/view/patrolLog/list/PatrolLogListFilter';
import PatrolLogListTable from 'src/view/patrolLog/list/PatrolLogListTable';
import PatrolLogListToolbar from 'src/view/patrolLog/list/PatrolLogListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function PatrolLogListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.patrolLog.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.patrolLog.list.title')}
        </PageTitle>

        <PatrolLogListToolbar />
        <PatrolLogListFilter />
        <PatrolLogListTable />
      </ContentWrapper>
    </>
  );
}

export default PatrolLogListPage;
