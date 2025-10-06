import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/tutorial/importer/tutorialImporterActions';
import fields from 'src/modules/tutorial/importer/tutorialImporterFields';
import selectors from 'src/modules/tutorial/importer/tutorialImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

function TutorialImportPage() {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.tutorial.importer.hint'),
  );

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.tutorial.menu'), '/tutorial'],
          [i18n('entities.tutorial.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.tutorial.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
}

export default TutorialImportPage;
