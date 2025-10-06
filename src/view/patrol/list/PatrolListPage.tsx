import React from 'react';
import { i18n } from 'src/i18n';
import PatrolListFilter from 'src/view/patrol/list/PatrolListFilter';
import PatrolListTable from 'src/view/patrol/list/PatrolListTable';
import PatrolListToolbar from 'src/view/patrol/list/PatrolListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function PatrolListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.patrol.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.patrol.list.title')}
        </PageTitle>

        <PatrolListToolbar />
        <PatrolListFilter />
        <PatrolListTable />
      </ContentWrapper>
    </>
  );
}

export default PatrolListPage;
