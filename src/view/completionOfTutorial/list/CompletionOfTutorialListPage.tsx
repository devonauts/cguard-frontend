import React from 'react';
import { i18n } from 'src/i18n';
import CompletionOfTutorialListFilter from 'src/view/completionOfTutorial/list/CompletionOfTutorialListFilter';
import CompletionOfTutorialListTable from 'src/view/completionOfTutorial/list/CompletionOfTutorialListTable';
import CompletionOfTutorialListToolbar from 'src/view/completionOfTutorial/list/CompletionOfTutorialListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function CompletionOfTutorialListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.completionOfTutorial.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.completionOfTutorial.list.title')}
        </PageTitle>

        <CompletionOfTutorialListToolbar />
        <CompletionOfTutorialListFilter />
        <CompletionOfTutorialListTable />
      </ContentWrapper>
    </>
  );
}

export default CompletionOfTutorialListPage;
