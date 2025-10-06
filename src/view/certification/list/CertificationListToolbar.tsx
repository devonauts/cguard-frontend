import { i18n } from 'src/i18n';
import auditLogSelectors from 'src/modules/auditLog/auditLogSelectors';
import certificationSelectors from 'src/modules/certification/certificationSelectors';
import destroyActions from 'src/modules/certification/destroy/certificationDestroyActions';
import destroySelectors from 'src/modules/certification/destroy/certificationDestroySelectors';
import actions from 'src/modules/certification/list/certificationListActions';
import selectors from 'src/modules/certification/list/certificationListSelectors';
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { PlusIcon, ArrowUpTrayIcon, TrashIcon, ClockIcon, DocumentArrowDownIcon } from '@heroicons/react/24/outline';
import ConfirmModal from 'src/view/shared/modals/ConfirmModal';
import Button from 'src/components/ui/Button';
import Toolbar from 'src/view/shared/styles/Toolbar';
import { Tooltip } from 'react-tooltip';

function CertificationToolbar(props) {
  const [
    destroyAllConfirmVisible,
    setDestroyAllConfirmVisible,
  ] = useState(false);

  const dispatch = useDispatch();

  const selectedKeys = useSelector(
    selectors.selectSelectedKeys,
  );
  const loading = useSelector(selectors.selectLoading);
  const destroyLoading = useSelector(
    destroySelectors.selectLoading,
  );
  const exportLoading = useSelector(
    selectors.selectExportLoading,
  );
  const hasRows = useSelector(selectors.selectHasRows);
  const hasPermissionToAuditLogs = useSelector(
    auditLogSelectors.selectPermissionToRead,
  );
  const hasPermissionToDestroy = useSelector(
    certificationSelectors.selectPermissionToDestroy,
  );
  const hasPermissionToCreate = useSelector(
    certificationSelectors.selectPermissionToCreate,
  );
  const hasPermissionToImport = useSelector(
    certificationSelectors.selectPermissionToImport,
  );

  const doOpenDestroyAllConfirmModal = () => {
    setDestroyAllConfirmVisible(true);
  };

  const doCloseDestroyAllConfirmModal = () => {
    setDestroyAllConfirmVisible(false);
  };

  const doExport = () => {
    dispatch(actions.doExport());
  };

  const doDestroyAllSelected = () => {
    doCloseDestroyAllConfirmModal();

    dispatch(destroyActions.doDestroyAll(selectedKeys));
  };

  const renderExportButton = () => {
    const disabled = !hasRows || loading;

    const button = (
      <Button
        variant="secondary"
        size="sm"
        disabled={disabled}
        onClick={doExport}
        loading={exportLoading}
      >
        <DocumentArrowDownIcon className="h-4 w-4" />
        {i18n('common.export')}
      </Button>
    );

    if (disabled) {
      return (
        <span
          data-tooltip-content={i18n('common.noDataToExport')}
          data-tooltip-id="certification-list-toolbar-export-tooltip"
        >
          {button}
          <Tooltip id="certification-list-toolbar-export-tooltip" />
        </span>
      );
    }

    return button;
  };

  const renderDestroyButton = () => {
    if (!hasPermissionToDestroy) {
      return null;
    }

    const disabled = !selectedKeys.length || loading;

    const button = (
      <Button
        variant="danger"
        size="sm"
        disabled={disabled}
        onClick={doOpenDestroyAllConfirmModal}
        loading={destroyLoading}
      >
        <TrashIcon className="h-4 w-4" />
        {i18n('common.destroy')}
      </Button>
    );

    if (disabled) {
      return (
        <span
          data-tooltip-content={i18n('common.mustSelectARow')}
          data-tooltip-id="certification-list-toolbar-destroy-tooltip"
        >
          {button}
          <Tooltip id="certification-list-toolbar-destroy-tooltip" />
        </span>
      );
    }

    return button;
  };

  return (
    <Toolbar>
      {hasPermissionToCreate && (
        <Link to="/certification/new">
          <Button variant="primary" size="sm">
            <PlusIcon className="h-4 w-4" />
            {i18n('common.new')}
          </Button>
        </Link>
      )}

      {hasPermissionToImport && (
        <Link to="/certification/importer">
          <Button variant="primary" size="sm">
            <ArrowUpTrayIcon className="h-4 w-4" />
            {i18n('common.import')}
          </Button>
        </Link>
      )}

      {renderDestroyButton()}

      {hasPermissionToAuditLogs && (
        <Link to="/audit-logs?entityNames=certification">
          <Button variant="secondary" size="sm">
            <ClockIcon className="h-4 w-4" />
            {i18n('auditLog.menu')}
          </Button>
        </Link>
      )}

      {renderExportButton()}

      {destroyAllConfirmVisible && (
        <ConfirmModal
          title={i18n('common.areYouSure')}
          onConfirm={() => doDestroyAllSelected()}
          onClose={() => doCloseDestroyAllConfirmModal()}
          okText={i18n('common.yes')}
          cancelText={i18n('common.no')}
        />
      )}
    </Toolbar>
  );
}

export default CertificationToolbar;
