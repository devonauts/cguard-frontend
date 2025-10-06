import React from 'react';
import { i18n } from 'src/i18n';
import MemosListFilter from 'src/view/memos/list/MemosListFilter';
import MemosListTable from 'src/view/memos/list/MemosListTable';
import MemosListToolbar from 'src/view/memos/list/MemosListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function MemosListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.memos.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.memos.list.title')}
        </PageTitle>

        <MemosListToolbar />
        <MemosListFilter />
        <MemosListTable />
      </ContentWrapper>
    </>
  );
}

export default MemosListPage;
