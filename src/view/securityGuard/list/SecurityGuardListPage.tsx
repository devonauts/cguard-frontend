import React from 'react';
import { i18n } from 'src/i18n';
import SecurityGuardListFilter from 'src/view/securityGuard/list/SecurityGuardListFilter';
import SecurityGuardListTable from 'src/view/securityGuard/list/SecurityGuardListTable';
import SecurityGuardListToolbar from 'src/view/securityGuard/list/SecurityGuardListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function SecurityGuardListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.securityGuard.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.securityGuard.list.title')}
        </PageTitle>

        <SecurityGuardListToolbar />
        <SecurityGuardListFilter />
        <SecurityGuardListTable />
      </ContentWrapper>
    </>
  );
}

export default SecurityGuardListPage;
