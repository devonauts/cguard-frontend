import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { i18n } from 'src/i18n';
import actions from 'src/modules/user/form/userFormActions';
import selectors from 'src/modules/user/form/userFormSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';
import UserNewForm from 'src/view/user/new/UserNewForm';
import { useHistory } from 'react-router-dom';

function UserNewPage(props) {
  const dispatch = useDispatch();
  const history = useHistory();

  const saveLoading = useSelector(
    selectors.selectSaveLoading,
  );

  useEffect(() => {
    dispatch(actions.doInit());
  }, [dispatch]);

  const doSubmit = (id, data) => {
    dispatch(actions.doAdd(data));
  };

  const handleCancel = useCallback(() => {
    history.replace('/user');
  }, [history]);

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('user.menu'), '/user'],
          [i18n('user.new.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>{i18n('user.new.title')}</PageTitle>

        <UserNewForm
          saveLoading={saveLoading}
          onSubmit={doSubmit}
          onCancel={handleCancel}
        />
      </ContentWrapper>
    </>
  );
}

export default UserNewPage;
