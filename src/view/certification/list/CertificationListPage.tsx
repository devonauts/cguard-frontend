import React from 'react';
import { i18n } from 'src/i18n';
import CertificationListFilter from 'src/view/certification/list/CertificationListFilter';
import CertificationListTable from 'src/view/certification/list/CertificationListTable';
import CertificationListToolbar from 'src/view/certification/list/CertificationListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function CertificationListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.certification.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.certification.list.title')}
        </PageTitle>

        <CertificationListToolbar />
        <CertificationListFilter />
        <CertificationListTable />
      </ContentWrapper>
    </>
  );
}

export default CertificationListPage;
