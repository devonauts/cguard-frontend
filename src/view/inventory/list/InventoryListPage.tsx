import React from 'react';
import { i18n } from 'src/i18n';
import InventoryListFilter from 'src/view/inventory/list/InventoryListFilter';
import InventoryListTable from 'src/view/inventory/list/InventoryListTable';
import InventoryListToolbar from 'src/view/inventory/list/InventoryListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function InventoryListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.inventory.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.inventory.list.title')}
        </PageTitle>

        <InventoryListToolbar />
        <InventoryListFilter />
        <InventoryListTable />
      </ContentWrapper>
    </>
  );
}

export default InventoryListPage;
