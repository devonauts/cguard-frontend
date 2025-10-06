import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/representanteEmpresa/importer/representanteEmpresaImporterActions';
import fields from 'src/modules/representanteEmpresa/importer/representanteEmpresaImporterFields';
import selectors from 'src/modules/representanteEmpresa/importer/representanteEmpresaImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

function RepresentanteEmpresaImportPage() {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.representanteEmpresa.importer.hint'),
  );

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.representanteEmpresa.menu'), '/representante-empresa'],
          [i18n('entities.representanteEmpresa.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.representanteEmpresa.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
}

export default RepresentanteEmpresaImportPage;
