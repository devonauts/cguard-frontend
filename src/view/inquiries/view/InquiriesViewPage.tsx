import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/inquiries/view/inquiriesViewActions';
import selectors from 'src/modules/inquiries/view/inquiriesViewSelectors';
import InquiriesView from 'src/view/inquiries/view/InquiriesView';
import InquiriesViewToolbar from 'src/view/inquiries/view/InquiriesViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function InquiriesPage() {
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
          [i18n('entities.inquiries.menu'), '/inquiries'],
          [i18n('entities.inquiries.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.inquiries.view.title')}
        </PageTitle>

        <InquiriesViewToolbar match={match} />

        <InquiriesView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
}

export default InquiriesPage;
