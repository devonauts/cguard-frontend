import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { i18n } from 'src/i18n';
import guardShiftSelectors from 'src/modules/guardShift/guardShiftSelectors';
import destroyActions from 'src/modules/guardShift/destroy/guardShiftDestroyActions';
import destroySelectors from 'src/modules/guardShift/destroy/guardShiftDestroySelectors';
import actions from 'src/modules/guardShift/list/guardShiftListActions';
import selectors from 'src/modules/guardShift/list/guardShiftListSelectors';
import TableColumnHeader from 'src/view/shared/table/TableColumnHeader';
import ConfirmModal from 'src/view/shared/modals/ConfirmModal';
import Spinner from 'src/view/shared/Spinner';
import TableWrapper from 'src/view/shared/styles/TableWrapper';
import Pagination from 'src/view/shared/table/Pagination';
import moment from 'moment';
import StationListItem from 'src/view/station/list/StationListItem';
import SecurityGuardListItem from 'src/view/securityGuard/list/SecurityGuardListItem';
import InventoryHistoryListItem from 'src/view/inventoryHistory/list/InventoryHistoryListItem';
import PatrolLogListItem from 'src/view/patrolLog/list/PatrolLogListItem';
import IncidentListItem from 'src/view/incident/list/IncidentListItem';

function GuardShiftListTable(props) {
  const [
    recordIdToDestroy,
    setRecordIdToDestroy,
  ] = useState(null);
  const dispatch = useDispatch();

  const findLoading = useSelector(selectors.selectLoading);

  const destroyLoading = useSelector(
    destroySelectors.selectLoading,
  );

  const loading = findLoading || destroyLoading;

  const rows = useSelector(selectors.selectRows);
  const pagination = useSelector(
    selectors.selectPagination,
  );
  const selectedKeys = useSelector(
    selectors.selectSelectedKeys,
  );
  const hasRows = useSelector(selectors.selectHasRows);
  const sorter = useSelector(selectors.selectSorter);
  const isAllSelected = useSelector(
    selectors.selectIsAllSelected,
  );
  const hasPermissionToEdit = useSelector(
    guardShiftSelectors.selectPermissionToEdit,
  );
  const hasPermissionToDestroy = useSelector(
    guardShiftSelectors.selectPermissionToDestroy,
  );

  const doOpenDestroyConfirmModal = (id) => {
    setRecordIdToDestroy(id);
  };

  const doCloseDestroyConfirmModal = () => {
    setRecordIdToDestroy(null);
  };

  const doChangeSort = (field) => {
    const order =
      sorter.field === field && sorter.order === 'ascend'
        ? 'descend'
        : 'ascend';

    dispatch(
      actions.doChangeSort({
        field,
        order,
      }),
    );
  };

  const doChangePagination = (pagination) => {
    dispatch(actions.doChangePagination(pagination));
  };

  const doDestroy = (id) => {
    doCloseDestroyConfirmModal();

    dispatch(destroyActions.doDestroy(id));
  };

  const doToggleAllSelected = () => {
    dispatch(actions.doToggleAllSelected());
  };

  const doToggleOneSelected = (id) => {
    dispatch(actions.doToggleOneSelected(id));
  };

  return (
    <TableWrapper>
      <div className="table-responsive">
        <table className="table table-striped     mt-2">
          <thead className="thead">
            <tr>
              <TableColumnHeader className="th-checkbox">
                {hasRows && (
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="table-header-checkbox"
                      checked={Boolean(isAllSelected)}
                      onChange={() => doToggleAllSelected()}
                    />
                    <label
                      htmlFor="table-header-checkbox"
                      className="custom-control-label"
                    >
                      &#160;
                    </label>
                  </div>
                )}
              </TableColumnHeader>
                <TableColumnHeader
                  onSort={doChangeSort}
                  hasRows={hasRows}
                  sorter={sorter}
                  name={'punchInTime'}
                  label={i18n(
                    'entities.guardShift.fields.punchInTime',
                  )}
                />
                <TableColumnHeader
                  onSort={doChangeSort}
                  hasRows={hasRows}
                  sorter={sorter}
                  name={'shiftSchedule'}
                  label={i18n(
                    'entities.guardShift.fields.shiftSchedule',
                  )}
                />
                <TableColumnHeader
                  label={i18n(
                    'entities.guardShift.fields.stationName',
                  )}
                />
                <TableColumnHeader
                  label={i18n(
                    'entities.guardShift.fields.guardName',
                  )}
                />
                <TableColumnHeader
                  label={i18n(
                    'entities.guardShift.fields.completeInventoryCheck',
                  )}
                />
                <TableColumnHeader
                  onSort={doChangeSort}
                  hasRows={hasRows}
                  sorter={sorter}
                  name={'numberOfPatrolsDuringShift'}
                  label={i18n(
                    'entities.guardShift.fields.numberOfPatrolsDuringShift',
                  )}
                  align="right"
                />
                <TableColumnHeader
                  label={i18n(
                    'entities.guardShift.fields.patrolsDone',
                  )}
                />
                <TableColumnHeader
                  onSort={doChangeSort}
                  hasRows={hasRows}
                  sorter={sorter}
                  name={'numberOfIncidentsDurindShift'}
                  label={i18n(
                    'entities.guardShift.fields.numberOfIncidentsDurindShift',
                  )}
                  align="right"
                />
                <TableColumnHeader
                  label={i18n(
                    'entities.guardShift.fields.dailyIncidents',
                  )}
                />
                <TableColumnHeader
                  onSort={doChangeSort}
                  hasRows={hasRows}
                  sorter={sorter}
                  name={'observations'}
                  label={i18n(
                    'entities.guardShift.fields.observations',
                  )}
                />
                <TableColumnHeader
                  onSort={doChangeSort}
                  hasRows={hasRows}
                  sorter={sorter}
                  name={'punchOutTime'}
                  label={i18n(
                    'entities.guardShift.fields.punchOutTime',
                  )}
                />
              <TableColumnHeader className="th-actions" />
            </tr>
          </thead>
          <tbody>
            {loading && (
              <tr>
                <td colSpan={100}>
                  <Spinner />
                </td>
              </tr>
            )}
            {!loading && !hasRows && (
              <tr>
                <td colSpan={100}>
                  <div className="d-flex justify-content-center">
                    {i18n('table.noData')}
                  </div>
                </td>
              </tr>
            )}
            {!loading &&
              rows.map((row) => (
                <tr key={row.id}>
                  <th className="th-checkbox" scope="row">
                    <div className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id={`table-header-checkbox-${row.id}`}
                        checked={selectedKeys.includes(
                          row.id,
                        )}
                        onChange={() =>
                          doToggleOneSelected(row.id)
                        }
                      />
                      <label
                        htmlFor={`table-header-checkbox-${row.id}`}
                        className="custom-control-label"
                      >
                        &#160;
                      </label>
                    </div>
                  </th>
                  <td>
                    {row.punchInTime
                      ? moment(row.punchInTime).format(
                          'YYYY-MM-DD HH:mm',
                        )
                      : null}
                  </td>
                  <td>
                    {row.shiftSchedule
                      ? i18n(
                          `entities.guardShift.enumerators.shiftSchedule.${row.shiftSchedule}`,
                        )
                      : null}
                  </td>
                  <td>
                    <StationListItem value={row.stationName} />
                  </td>
                  <td>
                    <SecurityGuardListItem value={row.guardName} />
                  </td>
                  <td>
                    <InventoryHistoryListItem value={row.completeInventoryCheck} />
                  </td>
                  <td style={{ textAlign: 'right' }}>{row.numberOfPatrolsDuringShift}</td>
                  <td>
                    <PatrolLogListItem value={row.patrolsDone} />
                  </td>
                  <td style={{ textAlign: 'right' }}>{row.numberOfIncidentsDurindShift}</td>
                  <td>
                    <IncidentListItem value={row.dailyIncidents} />
                  </td>
                  <td>{row.observations}</td>
                  <td>
                    {row.punchOutTime
                      ? moment(row.punchOutTime).format(
                          'YYYY-MM-DD HH:mm',
                        )
                      : null}
                  </td>
                  <td className="td-actions">
                    <Link
                      className="btn btn-link"
                      to={`/guard-shift/${row.id}`}
                    >
                      {i18n('common.view')}
                    </Link>
                    {hasPermissionToEdit && (
                      <Link
                        className="btn btn-link"
                        to={`/guard-shift/${row.id}/edit`}
                      >
                        {i18n('common.edit')}
                      </Link>
                    )}
                    {hasPermissionToDestroy && (
                      <button
                        className="btn btn-link"
                        type="button"
                        onClick={() =>
                          doOpenDestroyConfirmModal(row.id)
                        }
                      >
                        {i18n('common.destroy')}
                      </button>
                    )}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      <Pagination
        onChange={doChangePagination}
        disabled={loading}
        pagination={pagination}
      />

      {recordIdToDestroy && (
        <ConfirmModal
          title={i18n('common.areYouSure')}
          onConfirm={() => doDestroy(recordIdToDestroy)}
          onClose={() => doCloseDestroyConfirmModal()}
          okText={i18n('common.yes')}
          cancelText={i18n('common.no')}
        />
      )}
    </TableWrapper>
  );
}

export default GuardShiftListTable;
