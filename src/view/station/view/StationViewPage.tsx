import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/station/view/stationViewActions';
import selectors from 'src/modules/station/view/stationViewSelectors';
import StationView from 'src/view/station/view/StationView';
import StationViewToolbar from 'src/view/station/view/StationViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function StationPage() {
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
          [i18n('entities.station.menu'), '/station'],
          [i18n('entities.station.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.station.view.title')}
        </PageTitle>

        <StationViewToolbar match={match} />

        <StationView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
}

export default StationPage;
