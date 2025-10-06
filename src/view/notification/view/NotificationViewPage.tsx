import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/notification/view/notificationViewActions';
import selectors from 'src/modules/notification/view/notificationViewSelectors';
import NotificationView from 'src/view/notification/view/NotificationView';
import NotificationViewToolbar from 'src/view/notification/view/NotificationViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function NotificationPage() {
  const dispatch = useDispatch();
  const { id } = useParams();

  const loading = useSelector(selectors.selectLoading);
  const record = useSelector(selectors.selectRecord);

  useEffect(() => {
    dispatch(actions.doFind(id));
  }, [dispatch, id]);

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.notification.menu'), '/notification'],
          [i18n('entities.notification.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.notification.view.title')}
        </PageTitle>

        <NotificationViewToolbar id={id} />

        <NotificationView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
}

export default NotificationPage;
