import React from 'react';
import { i18n } from 'src/i18n';
import InventoryHistoryListFilter from 'src/view/inventoryHistory/list/InventoryHistoryListFilter';
import InventoryHistoryListTable from 'src/view/inventoryHistory/list/InventoryHistoryListTable';
import InventoryHistoryListToolbar from 'src/view/inventoryHistory/list/InventoryHistoryListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function InventoryHistoryListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.inventoryHistory.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.inventoryHistory.list.title')}
        </PageTitle>

        <InventoryHistoryListToolbar />
        <InventoryHistoryListFilter />
        <InventoryHistoryListTable />
      </ContentWrapper>
    </>
  );
}

export default InventoryHistoryListPage;
