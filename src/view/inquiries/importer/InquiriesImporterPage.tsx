import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/inquiries/importer/inquiriesImporterActions';
import fields from 'src/modules/inquiries/importer/inquiriesImporterFields';
import selectors from 'src/modules/inquiries/importer/inquiriesImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

function InquiriesImportPage() {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.inquiries.importer.hint'),
  );

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.inquiries.menu'), '/inquiries'],
          [i18n('entities.inquiries.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.inquiries.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
}

export default InquiriesImportPage;
