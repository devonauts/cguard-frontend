import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/securityGuard/view/securityGuardViewActions';
import selectors from 'src/modules/securityGuard/view/securityGuardViewSelectors';
import SecurityGuardView from 'src/view/securityGuard/view/SecurityGuardView';
import SecurityGuardViewToolbar from 'src/view/securityGuard/view/SecurityGuardViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function SecurityGuardPage() {
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
          [i18n('entities.securityGuard.menu'), '/security-guard'],
          [i18n('entities.securityGuard.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.securityGuard.view.title')}
        </PageTitle>

        <SecurityGuardViewToolbar match={match} />

        <SecurityGuardView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
}

export default SecurityGuardPage;
