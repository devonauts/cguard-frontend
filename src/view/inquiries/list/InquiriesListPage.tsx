import React from 'react';
import { i18n } from 'src/i18n';
import InquiriesListFilter from 'src/view/inquiries/list/InquiriesListFilter';
import InquiriesListTable from 'src/view/inquiries/list/InquiriesListTable';
import InquiriesListToolbar from 'src/view/inquiries/list/InquiriesListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function InquiriesListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.inquiries.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.inquiries.list.title')}
        </PageTitle>

        <InquiriesListToolbar />
        <InquiriesListFilter />
        <InquiriesListTable />
      </ContentWrapper>
    </>
  );
}

export default InquiriesListPage;
