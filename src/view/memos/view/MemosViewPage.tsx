import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/memos/view/memosViewActions';
import selectors from 'src/modules/memos/view/memosViewSelectors';
import MemosView from 'src/view/memos/view/MemosView';
import MemosViewToolbar from 'src/view/memos/view/MemosViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function MemosPage() {
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
          [i18n('entities.memos.menu'), '/memos'],
          [i18n('entities.memos.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.memos.view.title')}
        </PageTitle>

        <MemosViewToolbar match={match} />

        <MemosView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
}

export default MemosPage;
