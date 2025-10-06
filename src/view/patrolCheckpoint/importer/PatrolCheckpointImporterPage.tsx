import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/patrolCheckpoint/importer/patrolCheckpointImporterActions';
import fields from 'src/modules/patrolCheckpoint/importer/patrolCheckpointImporterFields';
import selectors from 'src/modules/patrolCheckpoint/importer/patrolCheckpointImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

function PatrolCheckpointImportPage() {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.patrolCheckpoint.importer.hint'),
  );

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.patrolCheckpoint.menu'), '/patrol-checkpoint'],
          [i18n('entities.patrolCheckpoint.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.patrolCheckpoint.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
}

export default PatrolCheckpointImportPage;
