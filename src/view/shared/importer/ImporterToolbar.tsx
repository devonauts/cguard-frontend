import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ArrowDownTrayIcon, ArrowUpTrayIcon, TrashIcon } from '@heroicons/react/24/outline';
import { i18n } from 'src/i18n';
import Toolbar from 'src/view/shared/styles/Toolbar';
import Button from 'src/components/ui/Button';
import { Tooltip } from 'react-tooltip';
import ConfirmModal from 'src/view/shared/modals/ConfirmModal';

export default (
  selectors,
  actions,
  fields,
  templateHelp,
) => {
  function ImporterToolbar() {
    const dispatch = useDispatch();
    const [
      resetConfirmVisible,
      setResetConfirmVisible,
    ] = useState(false);
    const [
      discardConfirmVisible,
      setDiscardConfirmVisible,
    ] = useState(false);

    const hasRows = useSelector(selectors.selectHasRows);
    const importing = useSelector(
      selectors.selectImporting,
    );
    const completed = useSelector(
      selectors.selectCompleted,
    );

    const doOpenResetConfirmModal = () => {
      setResetConfirmVisible(true);
    };

    const doCloseResetConfirmModal = () => {
      setResetConfirmVisible(false);
    };

    const doOpenDiscardConfirmModal = () => {
      setDiscardConfirmVisible(true);
    };

    const doCloseDiscardConfirmModal = () => {
      setDiscardConfirmVisible(false);
    };

    const doReset = () => {
      doCloseDiscardConfirmModal();
      doCloseResetConfirmModal();
      dispatch(actions.doReset());
    };

    const doPause = () => {
      dispatch(actions.doPause());
    };

    const doImport = () => {
      dispatch(actions.doImport());
    };

    const doDownloadTemplate = () => {
      dispatch(actions.doDownloadTemplate());
    };

    const showDownloadTemplate = !hasRows;
    const showImport = hasRows && !importing && !completed;
    const showDiscard = hasRows && !importing && !completed;
    const showNew = Boolean(completed);
    const showPause = hasRows && importing;

    return (
      <Toolbar>
        {showDownloadTemplate && (
          <>
            <Button
              variant="secondary"
              size="sm"
              onClick={doDownloadTemplate}
            >
              <ArrowDownTrayIcon className="h-4 w-4" />
              {i18n('importer.form.downloadTemplate')}
            </Button>

            {templateHelp && (
              <span
                data-tooltip-content={templateHelp}
                data-tooltip-id="importer-toolbar-help-tooltip"
                data-tooltip-html={templateHelp}
              >
                <i
                  style={{ fontSize: '18px' }}
                  className="fas fa-info-circle"
                />
                <Tooltip id="importer-toolbar-help-tooltip" />
              </span>
            )}
          </>
        )}

        {showImport && (
          <Button
            variant="primary"
            size="sm"
            onClick={doImport}
          >
            <ArrowUpTrayIcon className="h-4 w-4" />
            {i18n('common.import')}
          </Button>
        )}

        {showPause && (
          <Button
            variant="secondary"
            size="sm"
            onClick={doPause}
          >
            <i className="fas fa-pause"></i>
            {i18n('common.pause')}
          </Button>
        )}

        {showNew && (
          <Button
            variant="secondary"
            size="sm"
            onClick={doOpenResetConfirmModal}
          >
            <i className="far fa-file"></i>
            {i18n('common.new')}
          </Button>
        )}

        {showDiscard && (
          <Button
            variant="secondary"
            size="sm"
            onClick={doOpenDiscardConfirmModal}
          >
            <TrashIcon className="h-4 w-4" />
            {i18n('common.discard')}
          </Button>
        )}

        {discardConfirmVisible && (
          <ConfirmModal
            title={i18n('importer.list.discardConfirm')}
            onConfirm={() => doReset()}
            onClose={() => doCloseDiscardConfirmModal()}
            okText={i18n('common.yes')}
            cancelText={i18n('common.no')}
          />
        )}

        {resetConfirmVisible && (
          <ConfirmModal
            title={i18n('common.areYouSure')}
            onConfirm={() => doReset()}
            onClose={() => doCloseResetConfirmModal()}
            okText={i18n('common.yes')}
            cancelText={i18n('common.no')}
          />
        )}
      </Toolbar>
    );
  }

  return ImporterToolbar;
};
