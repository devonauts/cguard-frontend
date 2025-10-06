import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/report/importer/reportImporterActions';
import fields from 'src/modules/report/importer/reportImporterFields';
import selectors from 'src/modules/report/importer/reportImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

function ReportImportPage() {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.report.importer.hint'),
  );

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.report.menu'), '/report'],
          [i18n('entities.report.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.report.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
}

export default ReportImportPage;
