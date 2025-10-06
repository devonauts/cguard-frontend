import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/securityGuard/importer/securityGuardImporterActions';
import fields from 'src/modules/securityGuard/importer/securityGuardImporterFields';
import selectors from 'src/modules/securityGuard/importer/securityGuardImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

function SecurityGuardImportPage() {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.securityGuard.importer.hint'),
  );

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.securityGuard.menu'), '/security-guard'],
          [i18n('entities.securityGuard.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.securityGuard.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
}

export default SecurityGuardImportPage;
