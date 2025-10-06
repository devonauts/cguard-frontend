import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/guardShift/view/guardShiftViewActions';
import selectors from 'src/modules/guardShift/view/guardShiftViewSelectors';
import GuardShiftView from 'src/view/guardShift/view/GuardShiftView';
import GuardShiftViewToolbar from 'src/view/guardShift/view/GuardShiftViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function GuardShiftPage() {
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
          [i18n('entities.guardShift.menu'), '/guard-shift'],
          [i18n('entities.guardShift.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.guardShift.view.title')}
        </PageTitle>

        <GuardShiftViewToolbar match={match} />

        <GuardShiftView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
}

export default GuardShiftPage;
