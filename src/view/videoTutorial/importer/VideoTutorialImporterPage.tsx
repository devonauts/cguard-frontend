import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/videoTutorial/importer/videoTutorialImporterActions';
import fields from 'src/modules/videoTutorial/importer/videoTutorialImporterFields';
import selectors from 'src/modules/videoTutorial/importer/videoTutorialImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

function VideoTutorialImportPage() {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.videoTutorial.importer.hint'),
  );

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.videoTutorial.menu'), '/video-tutorial'],
          [i18n('entities.videoTutorial.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.videoTutorial.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
}

export default VideoTutorialImportPage;
