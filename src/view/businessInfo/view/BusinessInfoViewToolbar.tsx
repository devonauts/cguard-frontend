import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { PencilIcon, TrashIcon, ClockIcon } from '@heroicons/react/24/outline';
import { i18n } from 'src/i18n';
import auditLogSelectors from 'src/modules/auditLog/auditLogSelectors';
import businessInfoSelectors from 'src/modules/businessInfo/businessInfoSelectors';
import destroyActions from 'src/modules/businessInfo/destroy/businessInfoDestroyActions';
import destroySelectors from 'src/modules/businessInfo/destroy/businessInfoDestroySelectors';
import ConfirmModal from 'src/view/shared/modals/ConfirmModal';
import Toolbar from 'src/view/shared/styles/Toolbar';
import Button from 'src/components/ui/Button';

function BusinessInfoViewToolbar(props) {
  const [
    destroyConfirmVisible,
    setDestroyConfirmVisible,
  ] = useState(false);

  const dispatch = useDispatch();

  const id = props.match.params.id;

  const hasPermissionToAuditLogs = useSelector(
    auditLogSelectors.selectPermissionToRead,
  );
  const hasPermissionToEdit = useSelector(
    businessInfoSelectors.selectPermissionToEdit,
  );
  const hasPermissionToDestroy = useSelector(
    businessInfoSelectors.selectPermissionToDestroy,
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
    <Toolbar>
      {hasPermissionToEdit && (
        <Link to={`/business-info/${id}/edit`}>
          <Button variant="primary" size="sm">
            <PencilIcon className="h-4 w-4" />
            {i18n('common.edit')}
          </Button>
        </Link>
      )}

      {hasPermissionToDestroy && (
        <Button
          variant="danger"
          size="sm"
          disabled={destroyLoading}
          onClick={doOpenDestroyConfirmModal}
        >
          <TrashIcon className="h-4 w-4" />
          {i18n('common.destroy')}
        </Button>
      )}

      {hasPermissionToAuditLogs && (
        <Link
          to={`/audit-logs?entityId=${encodeURIComponent(
            id,
          )}`}
        >
          <Button variant="secondary" size="sm">
            <ClockIcon className="h-4 w-4" />
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
    </Toolbar>
  );
}

export default BusinessInfoViewToolbar;
