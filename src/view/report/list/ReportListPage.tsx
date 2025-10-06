import React from 'react';
import { i18n } from 'src/i18n';
import ReportListFilter from 'src/view/report/list/ReportListFilter';
import ReportListTable from 'src/view/report/list/ReportListTable';
import ReportListToolbar from 'src/view/report/list/ReportListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function ReportListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.report.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.report.list.title')}
        </PageTitle>

        <ReportListToolbar />
        <ReportListFilter />
        <ReportListTable />
      </ContentWrapper>
    </>
  );
}

export default ReportListPage;
