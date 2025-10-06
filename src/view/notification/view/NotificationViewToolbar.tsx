import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { i18n } from 'src/i18n';
import auditLogSelectors from 'src/modules/auditLog/auditLogSelectors';
import notificationSelectors from 'src/modules/notification/notificationSelectors';
import destroyActions from 'src/modules/notification/destroy/notificationDestroyActions';
import destroySelectors from 'src/modules/notification/destroy/notificationDestroySelectors';
import ConfirmModal from 'src/view/shared/modals/ConfirmModal';
import Toolbar from 'src/view/shared/styles/Toolbar';
import { Button } from 'src/components/ui';
import { PencilIcon, TrashIcon, ClockIcon } from '@heroicons/react/24/outline';

function NotificationViewToolbar(props) {
  const [
    destroyConfirmVisible,
    setDestroyConfirmVisible,
  ] = useState(false);

  const dispatch = useDispatch();

  const id = props.id;

  const hasPermissionToAuditLogs = useSelector(
    auditLogSelectors.selectPermissionToRead,
  );
  const hasPermissionToEdit = useSelector(
    notificationSelectors.selectPermissionToEdit,
  );
  const hasPermissionToDestroy = useSelector(
    notificationSelectors.selectPermissionToDestroy,
  );
  const destroyLoading = useSelector(
    destroySelectors.selectLoading,
  );

  const doOpenDestroyConfirmModal = () => {
    setDestroyConfirmVisible(true);
  };

  const doCloseDestroyConfirmModal = () => {
    setDestroyConfirmVisible(false);
  };

  const doDestroy = () => {
    doCloseDestroyConfirmModal();
    dispatch(destroyActions.doDestroy(id));
  };

  return (
    <div className="flex items-center space-x-3">
      {hasPermissionToEdit && (
        <Link to={`/notification/${id}/edit`}>
          <Button
            variant="primary"
            icon={<PencilIcon />}
          >
            {i18n('common.edit')}
          </Button>
        </Link>
      )}

      {hasPermissionToDestroy && (
        <Button
          variant="danger"
          loading={destroyLoading}
          disabled={destroyLoading}
          onClick={doOpenDestroyConfirmModal}
          icon={<TrashIcon />}
        >
          {i18n('common.destroy')}
        </Button>
      )}

      {hasPermissionToAuditLogs && (
        <Link
          to={`/audit-logs?entityId=${encodeURIComponent(
            id,
          )}`}
        >
          <Button
            variant="light"
            icon={<ClockIcon />}
          >
            {i18n('auditLog.menu')}
          </Button>
        </Link>
      )}

      {destroyConfirmVisible && (
        <ConfirmModal
          title={i18n('common.areYouSure')}
          onConfirm={() => doDestroy()}
          onClose={() => doCloseDestroyConfirmModal()}
          okText={i18n('common.yes')}
          cancelText={i18n('common.no')}
        />
      )}
    </div>
  );
}

export default NotificationViewToolbar;
