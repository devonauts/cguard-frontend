import React from 'react';
import { i18n } from 'src/i18n';
import ClientAccountListFilter from 'src/view/clientAccount/list/ClientAccountListFilter';
import ClientAccountListTable from 'src/view/clientAccount/list/ClientAccountListTable';
import ClientAccountListToolbar from 'src/view/clientAccount/list/ClientAccountListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function ClientAccountListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.clientAccount.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.clientAccount.list.title')}
        </PageTitle>

        <ClientAccountListToolbar />
        <ClientAccountListFilter />
        <ClientAccountListTable />
      </ContentWrapper>
    </>
  );
}

export default ClientAccountListPage;
