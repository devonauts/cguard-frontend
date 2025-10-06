import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/shift/view/shiftViewActions';
import selectors from 'src/modules/shift/view/shiftViewSelectors';
import ShiftView from 'src/view/shift/view/ShiftView';
import ShiftViewToolbar from 'src/view/shift/view/ShiftViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function ShiftPage() {
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
          [i18n('entities.shift.menu'), '/shift'],
          [i18n('entities.shift.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.shift.view.title')}
        </PageTitle>

        <ShiftViewToolbar match={match} />

        <ShiftView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
}

export default ShiftPage;
