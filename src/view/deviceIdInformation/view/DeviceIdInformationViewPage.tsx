import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/deviceIdInformation/view/deviceIdInformationViewActions';
import selectors from 'src/modules/deviceIdInformation/view/deviceIdInformationViewSelectors';
import DeviceIdInformationView from 'src/view/deviceIdInformation/view/DeviceIdInformationView';
import DeviceIdInformationViewToolbar from 'src/view/deviceIdInformation/view/DeviceIdInformationViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function DeviceIdInformationPage() {
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
          [i18n('entities.deviceIdInformation.menu'), '/device-id-information'],
          [i18n('entities.deviceIdInformation.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.deviceIdInformation.view.title')}
        </PageTitle>

        <DeviceIdInformationViewToolbar match={match} />

        <DeviceIdInformationView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
}

export default DeviceIdInformationPage;
