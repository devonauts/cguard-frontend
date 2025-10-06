import React from 'react';
import { i18n } from 'src/i18n';
import InsuranceListFilter from 'src/view/insurance/list/InsuranceListFilter';
import InsuranceListTable from 'src/view/insurance/list/InsuranceListTable';
import InsuranceListToolbar from 'src/view/insurance/list/InsuranceListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function InsuranceListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.insurance.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.insurance.list.title')}
        </PageTitle>

        <InsuranceListToolbar />
        <InsuranceListFilter />
        <InsuranceListTable />
      </ContentWrapper>
    </>
  );
}

export default InsuranceListPage;
