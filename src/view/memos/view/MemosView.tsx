import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import ViewWrapper from 'src/view/shared/styles/ViewWrapper';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import moment from 'moment';
import FilesViewItem from 'src/view/shared/view/FilesViewItem';
import SecurityGuardViewItem from 'src/view/securityGuard/view/SecurityGuardViewItem';

function MemosView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <ViewWrapper>
      {record.dateTime && <TextViewItem
        label={i18n(
          'entities.memos.fields.dateTime',
        )}
        value={moment(record.dateTime).format(
          'YYYY-MM-DD HH:mm',
        )}
      />}

      <SecurityGuardViewItem
        label={i18n('entities.memos.fields.guardName')}
        value={record.guardName}
      />

      <TextViewItem
        label={i18n('entities.memos.fields.subject')}
        value={record.subject}
      />

      <TextViewItem
        label={i18n('entities.memos.fields.content')}
        value={record.content}
      />

      <TextViewItem
        label={i18n('entities.memos.fields.wasAccepted')}
        value={
          record.wasAccepted
            ? i18n('common.yes')
            : i18n('common.no')
        }
      />

      <FilesViewItem
        label={i18n(
          'entities.memos.fields.memoDocumentPdf',
        )}
        value={record.memoDocumentPdf}
      />
    </ViewWrapper>
  );
}

export default MemosView;
