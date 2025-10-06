import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/businessInfo/importer/businessInfoImporterActions';
import fields from 'src/modules/businessInfo/importer/businessInfoImporterFields';
import selectors from 'src/modules/businessInfo/importer/businessInfoImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

function BusinessInfoImportPage() {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.businessInfo.importer.hint'),
  );

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.businessInfo.menu'), '/business-info'],
          [i18n('entities.businessInfo.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.businessInfo.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
}

export default BusinessInfoImportPage;
