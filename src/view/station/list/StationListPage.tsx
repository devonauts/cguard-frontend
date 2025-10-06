import React from 'react';
import { i18n } from 'src/i18n';
import StationListFilter from 'src/view/station/list/StationListFilter';
import StationListTable from 'src/view/station/list/StationListTable';
import StationListToolbar from 'src/view/station/list/StationListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function StationListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.station.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.station.list.title')}
        </PageTitle>

        <StationListToolbar />
        <StationListFilter />
        <StationListTable />
      </ContentWrapper>
    </>
  );
}

export default StationListPage;
