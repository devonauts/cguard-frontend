import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/inventoryHistory/view/inventoryHistoryViewActions';
import selectors from 'src/modules/inventoryHistory/view/inventoryHistoryViewSelectors';
import InventoryHistoryView from 'src/view/inventoryHistory/view/InventoryHistoryView';
import InventoryHistoryViewToolbar from 'src/view/inventoryHistory/view/InventoryHistoryViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function InventoryHistoryPage() {
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
          [i18n('entities.inventoryHistory.menu'), '/inventory-history'],
          [i18n('entities.inventoryHistory.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.inventoryHistory.view.title')}
        </PageTitle>

        <InventoryHistoryViewToolbar match={match} />

        <InventoryHistoryView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
}

export default InventoryHistoryPage;
