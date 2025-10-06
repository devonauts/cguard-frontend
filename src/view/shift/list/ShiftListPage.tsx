import React from 'react';
import { i18n } from 'src/i18n';
import ShiftListFilter from 'src/view/shift/list/ShiftListFilter';
import ShiftListTable from 'src/view/shift/list/ShiftListTable';
import ShiftListToolbar from 'src/view/shift/list/ShiftListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function ShiftListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.shift.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.shift.list.title')}
        </PageTitle>

        <ShiftListToolbar />
        <ShiftListFilter />
        <ShiftListTable />
      </ContentWrapper>
    </>
  );
}

export default ShiftListPage;
