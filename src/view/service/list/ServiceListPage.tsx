import React from 'react';
import { i18n } from 'src/i18n';
import ServiceListFilter from 'src/view/service/list/ServiceListFilter';
import ServiceListTable from 'src/view/service/list/ServiceListTable';
import ServiceListToolbar from 'src/view/service/list/ServiceListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function ServiceListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.service.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.service.list.title')}
        </PageTitle>

        <ServiceListToolbar />
        <ServiceListFilter />
        <ServiceListTable />
      </ContentWrapper>
    </>
  );
}

export default ServiceListPage;
