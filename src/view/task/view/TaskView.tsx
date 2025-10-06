import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import ViewWrapper from 'src/view/shared/styles/ViewWrapper';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import moment from 'moment';
import ImagesViewItem from 'src/view/shared/view/ImagesViewItem';
import StationViewItem from 'src/view/station/view/StationViewItem';

function TaskView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <ViewWrapper>
      <StationViewItem
        label={i18n('entities.task.fields.taskBelongsToStation')}
        value={record.taskBelongsToStation}
      />

      <TextViewItem
        label={i18n('entities.task.fields.taskToDo')}
        value={record.taskToDo}
      />

      <TextViewItem
        label={i18n('entities.task.fields.wasItDone')}
        value={
          record.wasItDone
            ? i18n('common.yes')
            : i18n('common.no')
        }
      />

      <ImagesViewItem
        label={i18n('entities.task.fields.imageOptional')}
        value={record.imageOptional}
      />

      {record.dateToDoTheTask && <TextViewItem
        label={i18n(
          'entities.task.fields.dateToDoTheTask',
        )}
        value={moment(record.dateToDoTheTask).format(
          'YYYY-MM-DD HH:mm',
        )}
      />}

      {record.dateCompletedTask && <TextViewItem
        label={i18n(
          'entities.task.fields.dateCompletedTask',
        )}
        value={moment(record.dateCompletedTask).format(
          'YYYY-MM-DD HH:mm',
        )}
      />}

      <ImagesViewItem
        label={i18n('entities.task.fields.taskCompletedImage')}
        value={record.taskCompletedImage}
      />
    </ViewWrapper>
  );
}

export default TaskView;
