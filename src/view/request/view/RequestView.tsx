import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import ViewWrapper from 'src/view/shared/styles/ViewWrapper';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import moment from 'moment';
import FilesViewItem from 'src/view/shared/view/FilesViewItem';
import SecurityGuardViewItem from 'src/view/securityGuard/view/SecurityGuardViewItem';

function RequestView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <ViewWrapper>
      {record.dateTime && <TextViewItem
        label={i18n(
          'entities.request.fields.dateTime',
        )}
        value={moment(record.dateTime).format(
          'YYYY-MM-DD HH:mm',
        )}
      />}

      <SecurityGuardViewItem
        label={i18n('entities.request.fields.guardName')}
        value={record.guardName}
      />

      <TextViewItem
        label={i18n('entities.request.fields.subject')}
        value={record.subject}
      />

      <TextViewItem
        label={i18n('entities.request.fields.content')}
        value={record.content}
      />

      <TextViewItem
        label={i18n('entities.request.fields.action')}
        value={
          record.action &&
          i18n(
            `entities.request.enumerators.action.${record.action}`,
          )
        }
      />

      <FilesViewItem
        label={i18n(
          'entities.request.fields.requestDocumentPDF',
        )}
        value={record.requestDocumentPDF}
      />
    </ViewWrapper>
  );
}

export default RequestView;
