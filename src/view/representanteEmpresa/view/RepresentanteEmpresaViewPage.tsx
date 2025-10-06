import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/representanteEmpresa/view/representanteEmpresaViewActions';
import selectors from 'src/modules/representanteEmpresa/view/representanteEmpresaViewSelectors';
import RepresentanteEmpresaView from 'src/view/representanteEmpresa/view/RepresentanteEmpresaView';
import RepresentanteEmpresaViewToolbar from 'src/view/representanteEmpresa/view/RepresentanteEmpresaViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function RepresentanteEmpresaPage() {
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
          [i18n('entities.representanteEmpresa.menu'), '/representante-empresa'],
          [i18n('entities.representanteEmpresa.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.representanteEmpresa.view.title')}
        </PageTitle>

        <RepresentanteEmpresaViewToolbar match={match} />

        <RepresentanteEmpresaView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
}

export default RepresentanteEmpresaPage;
