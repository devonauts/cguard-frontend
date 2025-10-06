import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import ViewWrapper from 'src/view/shared/styles/ViewWrapper';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import UserViewItem from 'src/view/user/view/UserViewItem';
import ClientAccountViewItem from 'src/view/clientAccount/view/ClientAccountViewItem';
import TaskViewItem from 'src/view/task/view/TaskViewItem';
import ReportViewItem from 'src/view/report/view/ReportViewItem';
import IncidentViewItem from 'src/view/incident/view/IncidentViewItem';
import PatrolCheckpointViewItem from 'src/view/patrolCheckpoint/view/PatrolCheckpointViewItem';
import PatrolViewItem from 'src/view/patrol/view/PatrolViewItem';
import ShiftViewItem from 'src/view/shift/view/ShiftViewItem';

function StationView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <ViewWrapper>
      <ClientAccountViewItem
        label={i18n('entities.station.fields.stationOrigin')}
        value={record.stationOrigin}
      />

      <TextViewItem
        label={i18n('entities.station.fields.stationName')}
        value={record.stationName}
      />

      <TextViewItem
        label={i18n('entities.station.fields.latitud')}
        value={record.latitud}
      />

      <TextViewItem
        label={i18n('entities.station.fields.longitud')}
        value={record.longitud}
      />

      <TextViewItem
        label={i18n('entities.station.fields.numberOfGuardsInStation')}
        value={
          record.numberOfGuardsInStation &&
          i18n(
            `entities.station.enumerators.numberOfGuardsInStation.${record.numberOfGuardsInStation}`,
          )
        }
      />

      <UserViewItem
        label={i18n('entities.station.fields.assignedGuards')}
        value={record.assignedGuards}
      />

      <TextViewItem
        label={i18n('entities.station.fields.stationSchedule')}
        value={
          record.stationSchedule &&
          i18n(
            `entities.station.enumerators.stationSchedule.${record.stationSchedule}`,
          )
        }
      />

      <TextViewItem
        label={i18n('entities.station.fields.startingTimeInDay')}
        value={record.startingTimeInDay}
      />

      <TextViewItem
        label={i18n('entities.station.fields.finishTimeInDay')}
        value={record.finishTimeInDay}
      />

      <TaskViewItem
        label={i18n('entities.station.fields.tasks')}
        value={record.tasks}
      />

      <ReportViewItem
        label={i18n('entities.station.fields.reports')}
        value={record.reports}
      />

      <IncidentViewItem
        label={i18n('entities.station.fields.incidents')}
        value={record.incidents}
      />

      <PatrolCheckpointViewItem
        label={i18n('entities.station.fields.checkpoints')}
        value={record.checkpoints}
      />

      <PatrolViewItem
        label={i18n('entities.station.fields.patrol')}
        value={record.patrol}
      />

      <ShiftViewItem
        label={i18n('entities.station.fields.shift')}
        value={record.shift}
      />
    </ViewWrapper>
  );
}

export default StationView;
