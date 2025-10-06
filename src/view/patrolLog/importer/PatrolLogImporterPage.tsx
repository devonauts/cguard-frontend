import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/patrolLog/importer/patrolLogImporterActions';
import fields from 'src/modules/patrolLog/importer/patrolLogImporterFields';
import selectors from 'src/modules/patrolLog/importer/patrolLogImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

function PatrolLogImportPage() {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.patrolLog.importer.hint'),
  );

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.patrolLog.menu'), '/patrol-log'],
          [i18n('entities.patrolLog.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.patrolLog.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
}

export default PatrolLogImportPage;
