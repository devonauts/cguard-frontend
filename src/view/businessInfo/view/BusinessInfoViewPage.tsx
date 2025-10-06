import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/businessInfo/view/businessInfoViewActions';
import selectors from 'src/modules/businessInfo/view/businessInfoViewSelectors';
import BusinessInfoView from 'src/view/businessInfo/view/BusinessInfoView';
import BusinessInfoViewToolbar from 'src/view/businessInfo/view/BusinessInfoViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function BusinessInfoPage() {
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
          [i18n('entities.businessInfo.menu'), '/business-info'],
          [i18n('entities.businessInfo.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.businessInfo.view.title')}
        </PageTitle>

        <BusinessInfoViewToolbar match={match} />

        <BusinessInfoView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
}

export default BusinessInfoPage;
