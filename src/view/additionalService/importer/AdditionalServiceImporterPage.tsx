import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/additionalService/importer/additionalServiceImporterActions';
import fields from 'src/modules/additionalService/importer/additionalServiceImporterFields';
import selectors from 'src/modules/additionalService/importer/additionalServiceImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

function AdditionalServiceImportPage() {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.additionalService.importer.hint'),
  );

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.additionalService.menu'), '/additional-service'],
          [i18n('entities.additionalService.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.additionalService.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
}

export default AdditionalServiceImportPage;
