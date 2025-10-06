import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import ViewWrapper from 'src/view/shared/styles/ViewWrapper';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import FilesViewItem from 'src/view/shared/view/FilesViewItem';

function InsuranceView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <ViewWrapper>
      <TextViewItem
        label={i18n('entities.insurance.fields.provider')}
        value={record.provider}
      />

      <TextViewItem
        label={i18n('entities.insurance.fields.policyNumber')}
        value={record.policyNumber}
      />

      <TextViewItem
        label={i18n('entities.insurance.fields.validFrom')}
        value={record.validFrom}
      />

      <TextViewItem
        label={i18n('entities.insurance.fields.validUntil')}
        value={record.validUntil}
      />

      <FilesViewItem
        label={i18n(
          'entities.insurance.fields.document',
        )}
        value={record.document}
      />
    </ViewWrapper>
  );
}

export default InsuranceView;
