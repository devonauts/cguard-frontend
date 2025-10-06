import React from 'react';
import { i18n } from 'src/i18n';
import BusinessInfoListFilter from 'src/view/businessInfo/list/BusinessInfoListFilter';
import BusinessInfoListTable from 'src/view/businessInfo/list/BusinessInfoListTable';
import BusinessInfoListToolbar from 'src/view/businessInfo/list/BusinessInfoListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function BusinessInfoListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.businessInfo.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.businessInfo.list.title')}
        </PageTitle>

        <BusinessInfoListToolbar />
        <BusinessInfoListFilter />
        <BusinessInfoListTable />
      </ContentWrapper>
    </>
  );
}

export default BusinessInfoListPage;
