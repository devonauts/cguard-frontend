import { useEffect } from 'react';
import { i18n } from 'src/i18n';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import SettingsForm from 'src/view/settings/SettingsForm';
import SettingsFormToolbar from 'src/view/settings/SettingsFormToolbar';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';
import Spinner from '../shared/Spinner';
import actions from 'src/modules/settings/settingsActions';
import selectors from 'src/modules/settings/settingsSelectors';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

const SettingsFormPage = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const initLoading = useSelector(
    selectors.selectInitLoading,
  );

  const settings = useSelector(selectors.selectSettings);

  useEffect(() => {
    dispatch(actions.doInit());
  }, []);

  const handleCancel = () => {
    history.push('/');
  };

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('settings.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>{i18n('settings.title')}</PageTitle>

        <SettingsFormToolbar />

        {initLoading && <Spinner />}

        {!initLoading && settings && (
          <SettingsForm
            settings={settings}
            onCancel={handleCancel}
          />
        )}
      </ContentWrapper>
    </>
  );
};

export default SettingsFormPage;
