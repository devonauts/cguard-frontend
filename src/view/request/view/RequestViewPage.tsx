import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/request/view/requestViewActions';
import selectors from 'src/modules/request/view/requestViewSelectors';
import RequestView from 'src/view/request/view/RequestView';
import RequestViewToolbar from 'src/view/request/view/RequestViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function RequestPage() {
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
          [i18n('entities.request.menu'), '/request'],
          [i18n('entities.request.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.request.view.title')}
        </PageTitle>

        <RequestViewToolbar match={match} />

        <RequestView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
}

export default RequestPage;
