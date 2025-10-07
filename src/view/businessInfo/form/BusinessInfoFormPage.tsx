import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch, useHistory } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/businessInfo/form/businessInfoFormActions';
import selectors from 'src/modules/businessInfo/form/businessInfoFormSelectors';
import { getHistory } from 'src/modules/store';
import BusinessInfoForm from 'src/view/businessInfo/form/BusinessInfoForm';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import Spinner from 'src/view/shared/Spinner';
import PageTitle from 'src/view/shared/styles/PageTitle';

function BusinessInfoFormPage(props) {
  const [dispatched, setDispatched] = useState(false);
  const dispatch = useDispatch();
  const match = useRouteMatch();
  const history = useHistory();

  const initLoading = useSelector(
    selectors.selectInitLoading,
  );
  const saveLoading = useSelector(
    selectors.selectSaveLoading,
  );
  const record = useSelector(selectors.selectRecord);

  const isEditing = Boolean(match.params.id);
  const title = isEditing
    ? i18n('entities.businessInfo.edit.title')
    : i18n('entities.businessInfo.new.title');

  useEffect(() => {
    dispatch(actions.doInit(match.params.id));
    setDispatched(true);
  }, [dispatch, match.params.id]);

  const doSubmit = (id, data) => {
    if (isEditing) {
      dispatch(actions.doUpdate(id, data));
    } else {
      dispatch(actions.doCreate(data));
    }
  };

  const handleCancel = () => {
    history.push('/business-info');
  };

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.businessInfo.menu'), '/business-info'],
          [title],
        ]}
      />

      <ContentWrapper>
        <PageTitle>{title}</PageTitle>

        {initLoading && <Spinner />}

        {dispatched && !initLoading && (
          <BusinessInfoForm
            saveLoading={saveLoading}
            initLoading={initLoading}
            record={record}
            isEditing={isEditing}
            onSubmit={doSubmit}
            onCancel={handleCancel}
          />
        )}
      </ContentWrapper>
    </>
  );
}

export default BusinessInfoFormPage;
