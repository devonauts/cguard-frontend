import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/billing/importer/billingImporterActions';
import fields from 'src/modules/billing/importer/billingImporterFields';
import selectors from 'src/modules/billing/importer/billingImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

function BillingImportPage() {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.billing.importer.hint'),
  );

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.billing.menu'), '/billing'],
          [i18n('entities.billing.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.billing.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
}

export default BillingImportPage;
