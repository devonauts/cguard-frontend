import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import ViewWrapper from 'src/view/shared/styles/ViewWrapper';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import moment from 'moment';
import StationViewItem from 'src/view/station/view/StationViewItem';

function ReportView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <ViewWrapper>
      <TextViewItem
        label={i18n('entities.report.fields.title')}
        value={record.title}
      />

      <StationViewItem
        label={i18n('entities.report.fields.station')}
        value={record.station}
      />

      {record.generatedDate && <TextViewItem
        label={i18n(
          'entities.report.fields.generatedDate',
        )}
        value={moment(record.generatedDate).format(
          'YYYY-MM-DD HH:mm',
        )}
      />}

      <TextViewItem
        label={i18n('entities.report.fields.content')}
        value={record.content}
      />
    </ViewWrapper>
  );
}

export default ReportView;
