import React from 'react';
import { i18n } from 'src/i18n';
import RequestListFilter from 'src/view/request/list/RequestListFilter';
import RequestListTable from 'src/view/request/list/RequestListTable';
import RequestListToolbar from 'src/view/request/list/RequestListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function RequestListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.request.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.request.list.title')}
        </PageTitle>

        <RequestListToolbar />
        <RequestListFilter />
        <RequestListTable />
      </ContentWrapper>
    </>
  );
}

export default RequestListPage;
