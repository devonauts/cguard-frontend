import React from 'react';
import { i18n } from 'src/i18n';
import GuardShiftListFilter from 'src/view/guardShift/list/GuardShiftListFilter';
import GuardShiftListTable from 'src/view/guardShift/list/GuardShiftListTable';
import GuardShiftListToolbar from 'src/view/guardShift/list/GuardShiftListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function GuardShiftListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.guardShift.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.guardShift.list.title')}
        </PageTitle>

        <GuardShiftListToolbar />
        <GuardShiftListFilter />
        <GuardShiftListTable />
      </ContentWrapper>
    </>
  );
}

export default GuardShiftListPage;
