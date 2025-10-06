import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/shift/importer/shiftImporterActions';
import fields from 'src/modules/shift/importer/shiftImporterFields';
import selectors from 'src/modules/shift/importer/shiftImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

function ShiftImportPage() {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.shift.importer.hint'),
  );

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.shift.menu'), '/shift'],
          [i18n('entities.shift.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.shift.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
}

export default ShiftImportPage;
