import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import ViewWrapper from 'src/view/shared/styles/ViewWrapper';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import moment from 'moment';
import ImagesViewItem from 'src/view/shared/view/ImagesViewItem';
import StationViewItem from 'src/view/station/view/StationViewItem';

function IncidentView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <ViewWrapper>
      {record.date && <TextViewItem
        label={i18n(
          'entities.incident.fields.date',
        )}
        value={moment(record.date).format(
          'YYYY-MM-DD HH:mm',
        )}
      />}

      <TextViewItem
        label={i18n('entities.incident.fields.title')}
        value={record.title}
      />

      <TextViewItem
        label={i18n('entities.incident.fields.description')}
        value={record.description}
      />

      <ImagesViewItem
        label={i18n('entities.incident.fields.imageUrl')}
        value={record.imageUrl}
      />

      <TextViewItem
        label={i18n('entities.incident.fields.wasRead')}
        value={
          record.wasRead
            ? i18n('common.yes')
            : i18n('common.no')
        }
      />

      <StationViewItem
        label={i18n('entities.incident.fields.stationIncidents')}
        value={record.stationIncidents}
      />
    </ViewWrapper>
  );
}

export default IncidentView;
