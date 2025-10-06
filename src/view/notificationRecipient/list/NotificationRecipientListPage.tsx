import React from 'react';
import { i18n } from 'src/i18n';
import NotificationRecipientListFilter from 'src/view/notificationRecipient/list/NotificationRecipientListFilter';
import NotificationRecipientListTable from 'src/view/notificationRecipient/list/NotificationRecipientListTable';
import NotificationRecipientListToolbar from 'src/view/notificationRecipient/list/NotificationRecipientListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function NotificationRecipientListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.notificationRecipient.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.notificationRecipient.list.title')}
        </PageTitle>

        <NotificationRecipientListToolbar />
        <NotificationRecipientListFilter />
        <NotificationRecipientListTable />
      </ContentWrapper>
    </>
  );
}

export default NotificationRecipientListPage;
