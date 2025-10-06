import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/billing/view/billingViewActions';
import selectors from 'src/modules/billing/view/billingViewSelectors';
import BillingView from 'src/view/billing/view/BillingView';
import BillingViewToolbar from 'src/view/billing/view/BillingViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function BillingPage() {
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
          [i18n('entities.billing.menu'), '/billing'],
          [i18n('entities.billing.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.billing.view.title')}
        </PageTitle>

        <BillingViewToolbar match={match} />

        <BillingView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
}

export default BillingPage;
