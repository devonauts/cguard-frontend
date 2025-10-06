import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/insurance/view/insuranceViewActions';
import selectors from 'src/modules/insurance/view/insuranceViewSelectors';
import InsuranceView from 'src/view/insurance/view/InsuranceView';
import InsuranceViewToolbar from 'src/view/insurance/view/InsuranceViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function InsurancePage() {
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
          [i18n('entities.insurance.menu'), '/insurance'],
          [i18n('entities.insurance.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.insurance.view.title')}
        </PageTitle>

        <InsuranceViewToolbar match={match} />

        <InsuranceView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
}

export default InsurancePage;
