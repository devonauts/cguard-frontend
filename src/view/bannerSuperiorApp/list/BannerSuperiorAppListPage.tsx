import React from 'react';
import { i18n } from 'src/i18n';
import BannerSuperiorAppListFilter from 'src/view/bannerSuperiorApp/list/BannerSuperiorAppListFilter';
import BannerSuperiorAppListTable from 'src/view/bannerSuperiorApp/list/BannerSuperiorAppListTable';
import BannerSuperiorAppListToolbar from 'src/view/bannerSuperiorApp/list/BannerSuperiorAppListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function BannerSuperiorAppListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.bannerSuperiorApp.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.bannerSuperiorApp.list.title')}
        </PageTitle>

        <BannerSuperiorAppListToolbar />
        <BannerSuperiorAppListFilter />
        <BannerSuperiorAppListTable />
      </ContentWrapper>
    </>
  );
}

export default BannerSuperiorAppListPage;
