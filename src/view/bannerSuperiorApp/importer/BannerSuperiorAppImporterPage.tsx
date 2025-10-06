import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/bannerSuperiorApp/importer/bannerSuperiorAppImporterActions';
import fields from 'src/modules/bannerSuperiorApp/importer/bannerSuperiorAppImporterFields';
import selectors from 'src/modules/bannerSuperiorApp/importer/bannerSuperiorAppImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

function BannerSuperiorAppImportPage() {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.bannerSuperiorApp.importer.hint'),
  );

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.bannerSuperiorApp.menu'), '/banner-superior-app'],
          [i18n('entities.bannerSuperiorApp.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.bannerSuperiorApp.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
}

export default BannerSuperiorAppImportPage;
