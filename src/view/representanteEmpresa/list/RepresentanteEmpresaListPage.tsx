import React from 'react';
import { i18n } from 'src/i18n';
import RepresentanteEmpresaListFilter from 'src/view/representanteEmpresa/list/RepresentanteEmpresaListFilter';
import RepresentanteEmpresaListTable from 'src/view/representanteEmpresa/list/RepresentanteEmpresaListTable';
import RepresentanteEmpresaListToolbar from 'src/view/representanteEmpresa/list/RepresentanteEmpresaListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function RepresentanteEmpresaListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.representanteEmpresa.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.representanteEmpresa.list.title')}
        </PageTitle>

        <RepresentanteEmpresaListToolbar />
        <RepresentanteEmpresaListFilter />
        <RepresentanteEmpresaListTable />
      </ContentWrapper>
    </>
  );
}

export default RepresentanteEmpresaListPage;
