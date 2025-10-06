import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/deviceIdInformation/importer/deviceIdInformationImporterActions';
import fields from 'src/modules/deviceIdInformation/importer/deviceIdInformationImporterFields';
import selectors from 'src/modules/deviceIdInformation/importer/deviceIdInformationImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

function DeviceIdInformationImportPage() {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.deviceIdInformation.importer.hint'),
  );

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.deviceIdInformation.menu'), '/device-id-information'],
          [i18n('entities.deviceIdInformation.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.deviceIdInformation.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
}

export default DeviceIdInformationImportPage;
