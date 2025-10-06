import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/notificationRecipient/view/notificationRecipientViewActions';
import selectors from 'src/modules/notificationRecipient/view/notificationRecipientViewSelectors';
import NotificationRecipientView from 'src/view/notificationRecipient/view/NotificationRecipientView';
import NotificationRecipientViewToolbar from 'src/view/notificationRecipient/view/NotificationRecipientViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function NotificationRecipientPage() {
  const dispatch = useDispatch();
  const match = useRouteMatch();

  const loading = useSelector(selectors.selectLoading);
  const record = useSelector(selectors.selectRecord);

  useEffect(() => {
    dispatch(actions.doFind(match.params.id));
  }, [dispatch, match.params.id]);

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.notificationRecipient.menu'), '/notification-recipient'],
          [i18n('entities.notificationRecipient.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.notificationRecipient.view.title')}
        </PageTitle>

        <NotificationRecipientViewToolbar match={match} />

        <NotificationRecipientView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
}

export default NotificationRecipientPage;
