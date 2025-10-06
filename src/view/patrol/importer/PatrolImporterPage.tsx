import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/patrol/importer/patrolImporterActions';
import fields from 'src/modules/patrol/importer/patrolImporterFields';
import selectors from 'src/modules/patrol/importer/patrolImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

function PatrolImportPage() {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.patrol.importer.hint'),
  );

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.patrol.menu'), '/patrol'],
          [i18n('entities.patrol.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.patrol.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
}

export default PatrolImportPage;
