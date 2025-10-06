import React from 'react';
import { i18n } from 'src/i18n';
import BillingListFilter from 'src/view/billing/list/BillingListFilter';
import BillingListTable from 'src/view/billing/list/BillingListTable';
import BillingListToolbar from 'src/view/billing/list/BillingListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function BillingListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.billing.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.billing.list.title')}
        </PageTitle>

        <BillingListToolbar />
        <BillingListFilter />
        <BillingListTable />
      </ContentWrapper>
    </>
  );
}

export default BillingListPage;
