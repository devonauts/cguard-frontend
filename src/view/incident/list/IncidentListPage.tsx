import React from 'react';
import { i18n } from 'src/i18n';
import IncidentListFilter from 'src/view/incident/list/IncidentListFilter';
import IncidentListTable from 'src/view/incident/list/IncidentListTable';
import IncidentListToolbar from 'src/view/incident/list/IncidentListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function IncidentListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.incident.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.incident.list.title')}
        </PageTitle>

        <IncidentListToolbar />
        <IncidentListFilter />
        <IncidentListTable />
      </ContentWrapper>
    </>
  );
}

export default IncidentListPage;
