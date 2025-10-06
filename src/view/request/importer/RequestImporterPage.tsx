import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/request/importer/requestImporterActions';
import fields from 'src/modules/request/importer/requestImporterFields';
import selectors from 'src/modules/request/importer/requestImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

function RequestImportPage() {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.request.importer.hint'),
  );

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.request.menu'), '/request'],
          [i18n('entities.request.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.request.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
}

export default RequestImportPage;
