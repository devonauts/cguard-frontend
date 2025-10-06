import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/clientAccount/importer/clientAccountImporterActions';
import fields from 'src/modules/clientAccount/importer/clientAccountImporterFields';
import selectors from 'src/modules/clientAccount/importer/clientAccountImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

function ClientAccountImportPage() {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.clientAccount.importer.hint'),
  );

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.clientAccount.menu'), '/client-account'],
          [i18n('entities.clientAccount.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.clientAccount.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
}

export default ClientAccountImportPage;
