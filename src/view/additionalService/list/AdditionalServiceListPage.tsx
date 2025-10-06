import React from 'react';
import { i18n } from 'src/i18n';
import AdditionalServiceListFilter from 'src/view/additionalService/list/AdditionalServiceListFilter';
import AdditionalServiceListTable from 'src/view/additionalService/list/AdditionalServiceListTable';
import AdditionalServiceListToolbar from 'src/view/additionalService/list/AdditionalServiceListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function AdditionalServiceListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.additionalService.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.additionalService.list.title')}
        </PageTitle>

        <AdditionalServiceListToolbar />
        <AdditionalServiceListFilter />
        <AdditionalServiceListTable />
      </ContentWrapper>
    </>
  );
}

export default AdditionalServiceListPage;
