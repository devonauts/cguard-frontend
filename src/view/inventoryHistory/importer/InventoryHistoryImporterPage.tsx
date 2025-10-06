import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/inventoryHistory/importer/inventoryHistoryImporterActions';
import fields from 'src/modules/inventoryHistory/importer/inventoryHistoryImporterFields';
import selectors from 'src/modules/inventoryHistory/importer/inventoryHistoryImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

function InventoryHistoryImportPage() {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.inventoryHistory.importer.hint'),
  );

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.inventoryHistory.menu'), '/inventory-history'],
          [i18n('entities.inventoryHistory.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.inventoryHistory.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
}

export default InventoryHistoryImportPage;
