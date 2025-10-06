import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/inventory/view/inventoryViewActions';
import selectors from 'src/modules/inventory/view/inventoryViewSelectors';
import InventoryView from 'src/view/inventory/view/InventoryView';
import InventoryViewToolbar from 'src/view/inventory/view/InventoryViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function InventoryPage() {
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
          [i18n('entities.inventory.menu'), '/inventory'],
          [i18n('entities.inventory.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.inventory.view.title')}
        </PageTitle>

        <InventoryViewToolbar match={match} />

        <InventoryView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
}

export default InventoryPage;
