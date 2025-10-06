import React from 'react';
import { i18n } from 'src/i18n';
import DeviceIdInformationListFilter from 'src/view/deviceIdInformation/list/DeviceIdInformationListFilter';
import DeviceIdInformationListTable from 'src/view/deviceIdInformation/list/DeviceIdInformationListTable';
import DeviceIdInformationListToolbar from 'src/view/deviceIdInformation/list/DeviceIdInformationListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function DeviceIdInformationListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.deviceIdInformation.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.deviceIdInformation.list.title')}
        </PageTitle>

        <DeviceIdInformationListToolbar />
        <DeviceIdInformationListFilter />
        <DeviceIdInformationListTable />
      </ContentWrapper>
    </>
  );
}

export default DeviceIdInformationListPage;
