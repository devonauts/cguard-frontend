import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import ViewWrapper from 'src/view/shared/styles/ViewWrapper';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import ImagesViewItem from 'src/view/shared/view/ImagesViewItem';
import StationViewItem from 'src/view/station/view/StationViewItem';
import PatrolViewItem from 'src/view/patrol/view/PatrolViewItem';

function PatrolCheckpointView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <ViewWrapper>
      <StationViewItem
        label={i18n('entities.patrolCheckpoint.fields.station')}
        value={record.station}
      />

      <TextViewItem
        label={i18n('entities.patrolCheckpoint.fields.name')}
        value={record.name}
      />

      <TextViewItem
        label={i18n('entities.patrolCheckpoint.fields.latitud')}
        value={record.latitud}
      />

      <TextViewItem
        label={i18n('entities.patrolCheckpoint.fields.longitud')}
        value={record.longitud}
      />

      <ImagesViewItem
        label={i18n('entities.patrolCheckpoint.fields.assignedQrImage')}
        value={record.assignedQrImage}
      />

      <PatrolViewItem
        label={i18n('entities.patrolCheckpoint.fields.patrols')}
        value={record.patrols}
      />
    </ViewWrapper>
  );
}

export default PatrolCheckpointView;
