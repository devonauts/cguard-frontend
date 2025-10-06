import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import ViewWrapper from 'src/view/shared/styles/ViewWrapper';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import moment from 'moment';
import StationViewItem from 'src/view/station/view/StationViewItem';
import SecurityGuardViewItem from 'src/view/securityGuard/view/SecurityGuardViewItem';
import InventoryHistoryViewItem from 'src/view/inventoryHistory/view/InventoryHistoryViewItem';
import PatrolLogViewItem from 'src/view/patrolLog/view/PatrolLogViewItem';
import IncidentViewItem from 'src/view/incident/view/IncidentViewItem';

function GuardShiftView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <ViewWrapper>
      {record.punchInTime && <TextViewItem
        label={i18n(
          'entities.guardShift.fields.punchInTime',
        )}
        value={moment(record.punchInTime).format(
          'YYYY-MM-DD HH:mm',
        )}
      />}

      <TextViewItem
        label={i18n('entities.guardShift.fields.shiftSchedule')}
        value={
          record.shiftSchedule &&
          i18n(
            `entities.guardShift.enumerators.shiftSchedule.${record.shiftSchedule}`,
          )
        }
      />

      <StationViewItem
        label={i18n('entities.guardShift.fields.stationName')}
        value={record.stationName}
      />

      <SecurityGuardViewItem
        label={i18n('entities.guardShift.fields.guardName')}
        value={record.guardName}
      />

      <InventoryHistoryViewItem
        label={i18n('entities.guardShift.fields.completeInventoryCheck')}
        value={record.completeInventoryCheck}
      />

      <TextViewItem
        label={i18n('entities.guardShift.fields.numberOfPatrolsDuringShift')}
        value={record.numberOfPatrolsDuringShift}
      />

      <PatrolLogViewItem
        label={i18n('entities.guardShift.fields.patrolsDone')}
        value={record.patrolsDone}
      />

      <TextViewItem
        label={i18n('entities.guardShift.fields.numberOfIncidentsDurindShift')}
        value={record.numberOfIncidentsDurindShift}
      />

      <IncidentViewItem
        label={i18n('entities.guardShift.fields.dailyIncidents')}
        value={record.dailyIncidents}
      />

      <TextViewItem
        label={i18n('entities.guardShift.fields.observations')}
        value={record.observations}
      />

      {record.punchOutTime && <TextViewItem
        label={i18n(
          'entities.guardShift.fields.punchOutTime',
        )}
        value={moment(record.punchOutTime).format(
          'YYYY-MM-DD HH:mm',
        )}
      />}
    </ViewWrapper>
  );
}

export default GuardShiftView;
