import React from 'react';
import { i18n } from 'src/i18n';
import TutorialListFilter from 'src/view/tutorial/list/TutorialListFilter';
import TutorialListTable from 'src/view/tutorial/list/TutorialListTable';
import TutorialListToolbar from 'src/view/tutorial/list/TutorialListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function TutorialListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.tutorial.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.tutorial.list.title')}
        </PageTitle>

        <TutorialListToolbar />
        <TutorialListFilter />
        <TutorialListTable />
      </ContentWrapper>
    </>
  );
}

export default TutorialListPage;
