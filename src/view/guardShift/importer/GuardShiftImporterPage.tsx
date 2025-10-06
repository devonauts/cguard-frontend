import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/guardShift/importer/guardShiftImporterActions';
import fields from 'src/modules/guardShift/importer/guardShiftImporterFields';
import selectors from 'src/modules/guardShift/importer/guardShiftImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

function GuardShiftImportPage() {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.guardShift.importer.hint'),
  );

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.guardShift.menu'), '/guard-shift'],
          [i18n('entities.guardShift.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.guardShift.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
}

export default GuardShiftImportPage;
