import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import selectors from 'src/modules/auditLog/auditLogSelectors';
import actions from 'src/modules/auditLog/auditLogActions';
import { i18n } from 'src/i18n';
import ButtonIcon from 'src/view/shared/ButtonIcon';
import { Tooltip } from 'react-tooltip';
import Toolbar from 'src/view/shared/styles/Toolbar';

function AuditLogToolbar(props) {
  const loading = useSelector(selectors.selectLoading);
  const exportLoading = useSelector(
    selectors.selectExportLoading,
  );
  const hasRows = useSelector(selectors.selectHasRows);
  const dispatch = useDispatch();

  const doExport = () => {
    dispatch(actions.doExport());
  };

  const disabled = !hasRows || loading;

  return (
    <Toolbar>
      <span
        data-tooltip-content={disabled ? i18n('common.noDataToExport') : ''}
        data-tooltip-id="audit-log-toolbar-export-tooltip"
      >
        <button
          className="btn btn-light"
          type="button"
          disabled={disabled}
          onClick={doExport}
        >
          <ButtonIcon
            loading={exportLoading}
            iconClass="far fa-file-excel"
          />{' '}
          {i18n('common.export')}
        </button>
      </span>
      <Tooltip id="audit-log-toolbar-export-tooltip" />
    </Toolbar>
  );
}

export default AuditLogToolbar;
