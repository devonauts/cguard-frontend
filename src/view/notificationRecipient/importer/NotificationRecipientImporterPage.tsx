import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/notificationRecipient/importer/notificationRecipientImporterActions';
import fields from 'src/modules/notificationRecipient/importer/notificationRecipientImporterFields';
import selectors from 'src/modules/notificationRecipient/importer/notificationRecipientImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

function NotificationRecipientImportPage() {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.notificationRecipient.importer.hint'),
  );

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.notificationRecipient.menu'), '/notification-recipient'],
          [i18n('entities.notificationRecipient.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.notificationRecipient.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
}

export default NotificationRecipientImportPage;
