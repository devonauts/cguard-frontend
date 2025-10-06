import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/report/view/reportViewActions';
import selectors from 'src/modules/report/view/reportViewSelectors';
import ReportView from 'src/view/report/view/ReportView';
import ReportViewToolbar from 'src/view/report/view/ReportViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function ReportPage() {
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
          [i18n('entities.report.menu'), '/report'],
          [i18n('entities.report.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.report.view.title')}
        </PageTitle>

        <ReportViewToolbar match={match} />

        <ReportView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
}

export default ReportPage;
