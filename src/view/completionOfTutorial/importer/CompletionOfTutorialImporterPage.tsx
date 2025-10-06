import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/completionOfTutorial/importer/completionOfTutorialImporterActions';
import fields from 'src/modules/completionOfTutorial/importer/completionOfTutorialImporterFields';
import selectors from 'src/modules/completionOfTutorial/importer/completionOfTutorialImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

function CompletionOfTutorialImportPage() {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.completionOfTutorial.importer.hint'),
  );

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.completionOfTutorial.menu'), '/completion-of-tutorial'],
          [i18n('entities.completionOfTutorial.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.completionOfTutorial.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
}

export default CompletionOfTutorialImportPage;
