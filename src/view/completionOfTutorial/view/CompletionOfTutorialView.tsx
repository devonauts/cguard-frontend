import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import ViewWrapper from 'src/view/shared/styles/ViewWrapper';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import moment from 'moment';
import SecurityGuardViewItem from 'src/view/securityGuard/view/SecurityGuardViewItem';
import TutorialViewItem from 'src/view/tutorial/view/TutorialViewItem';

function CompletionOfTutorialView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <ViewWrapper>
      <SecurityGuardViewItem
        label={i18n('entities.completionOfTutorial.fields.guardName')}
        value={record.guardName}
      />

      {record.dateTutorialStarted && <TextViewItem
        label={i18n(
          'entities.completionOfTutorial.fields.dateTutorialStarted',
        )}
        value={moment(record.dateTutorialStarted).format(
          'YYYY-MM-DD HH:mm',
        )}
      />}

      <TextViewItem
        label={i18n('entities.completionOfTutorial.fields.tutorialStarted')}
        value={
          record.tutorialStarted
            ? i18n('common.yes')
            : i18n('common.no')
        }
      />

      <TutorialViewItem
        label={i18n('entities.completionOfTutorial.fields.checkedTutorial')}
        value={record.checkedTutorial}
      />

      <TextViewItem
        label={i18n('entities.completionOfTutorial.fields.wasCompleted')}
        value={
          record.wasCompleted
            ? i18n('common.yes')
            : i18n('common.no')
        }
      />

      {record.dateEndedTutorial && <TextViewItem
        label={i18n(
          'entities.completionOfTutorial.fields.dateEndedTutorial',
        )}
        value={moment(record.dateEndedTutorial).format(
          'YYYY-MM-DD HH:mm',
        )}
      />}
    </ViewWrapper>
  );
}

export default CompletionOfTutorialView;
