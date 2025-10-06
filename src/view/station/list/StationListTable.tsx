import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { i18n } from 'src/i18n';
import stationSelectors from 'src/modules/station/stationSelectors';
import destroyActions from 'src/modules/station/destroy/stationDestroyActions';
import destroySelectors from 'src/modules/station/destroy/stationDestroySelectors';
import actions from 'src/modules/station/list/stationListActions';
import selectors from 'src/modules/station/list/stationListSelectors';
import TableColumnHeader from 'src/view/shared/table/TableColumnHeader';
import ConfirmModal from 'src/view/shared/modals/ConfirmModal';
import Spinner from 'src/view/shared/Spinner';
import TableWrapper from 'src/view/shared/styles/TableWrapper';
import Pagination from 'src/view/shared/table/Pagination';
import UserListItem from 'src/view/user/list/UserListItem';
import ClientAccountListItem from 'src/view/clientAccount/list/ClientAccountListItem';
import TaskListItem from 'src/view/task/list/TaskListItem';
import ReportListItem from 'src/view/report/list/ReportListItem';
import IncidentListItem from 'src/view/incident/list/IncidentListItem';
import PatrolCheckpointListItem from 'src/view/patrolCheckpoint/list/PatrolCheckpointListItem';
import PatrolListItem from 'src/view/patrol/list/PatrolListItem';
import ShiftListItem from 'src/view/shift/list/ShiftListItem';

function StationListTable(props) {
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
    stationSelectors.selectPermissionToEdit,
  );
  const hasPermissionToDestroy = useSelector(
    stationSelectors.selectPermissionToDestroy,
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
                  label={i18n(
                    'entities.station.fields.stationOrigin',
                  )}
                />
                <TableColumnHeader
                  onSort={doChangeSort}
                  hasRows={hasRows}
                  sorter={sorter}
                  name={'stationName'}
                  label={i18n(
                    'entities.station.fields.stationName',
                  )}
                />
                <TableColumnHeader
                  onSort={doChangeSort}
                  hasRows={hasRows}
                  sorter={sorter}
                  name={'latitud'}
                  label={i18n(
                    'entities.station.fields.latitud',
                  )}
                />
                <TableColumnHeader
                  onSort={doChangeSort}
                  hasRows={hasRows}
                  sorter={sorter}
                  name={'longitud'}
                  label={i18n(
                    'entities.station.fields.longitud',
                  )}
                />
                <TableColumnHeader
                  onSort={doChangeSort}
                  hasRows={hasRows}
                  sorter={sorter}
                  name={'numberOfGuardsInStation'}
                  label={i18n(
                    'entities.station.fields.numberOfGuardsInStation',
                  )}
                />
                <TableColumnHeader
                  label={i18n(
                    'entities.station.fields.assignedGuards',
                  )}
                />
                <TableColumnHeader
                  onSort={doChangeSort}
                  hasRows={hasRows}
                  sorter={sorter}
                  name={'stationSchedule'}
                  label={i18n(
                    'entities.station.fields.stationSchedule',
                  )}
                />
                <TableColumnHeader
                  onSort={doChangeSort}
                  hasRows={hasRows}
                  sorter={sorter}
                  name={'startingTimeInDay'}
                  label={i18n(
                    'entities.station.fields.startingTimeInDay',
                  )}
                />
                <TableColumnHeader
                  onSort={doChangeSort}
                  hasRows={hasRows}
                  sorter={sorter}
                  name={'finishTimeInDay'}
                  label={i18n(
                    'entities.station.fields.finishTimeInDay',
                  )}
                />
                <TableColumnHeader
                  label={i18n(
                    'entities.station.fields.tasks',
                  )}
                />
                <TableColumnHeader
                  label={i18n(
                    'entities.station.fields.reports',
                  )}
                />
                <TableColumnHeader
                  label={i18n(
                    'entities.station.fields.incidents',
                  )}
                />
                <TableColumnHeader
                  label={i18n(
                    'entities.station.fields.checkpoints',
                  )}
                />
                <TableColumnHeader
                  label={i18n(
                    'entities.station.fields.patrol',
                  )}
                />
                <TableColumnHeader
                  label={i18n(
                    'entities.station.fields.shift',
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
                    <ClientAccountListItem value={row.stationOrigin} />
                  </td>
                  <td>{row.stationName}</td>
                  <td>{row.latitud}</td>
                  <td>{row.longitud}</td>
                  <td>
                    {row.numberOfGuardsInStation
                      ? i18n(
                          `entities.station.enumerators.numberOfGuardsInStation.${row.numberOfGuardsInStation}`,
                        )
                      : null}
                  </td>
                  <td>
                    <UserListItem value={row.assignedGuards} />
                  </td>
                  <td>
                    {row.stationSchedule
                      ? i18n(
                          `entities.station.enumerators.stationSchedule.${row.stationSchedule}`,
                        )
                      : null}
                  </td>
                  <td>{row.startingTimeInDay}</td>
                  <td>{row.finishTimeInDay}</td>
                  <td>
                    <TaskListItem value={row.tasks} />
                  </td>
                  <td>
                    <ReportListItem value={row.reports} />
                  </td>
                  <td>
                    <IncidentListItem value={row.incidents} />
                  </td>
                  <td>
                    <PatrolCheckpointListItem value={row.checkpoints} />
                  </td>
                  <td>
                    <PatrolListItem value={row.patrol} />
                  </td>
                  <td>
                    <ShiftListItem value={row.shift} />
                  </td>
                  <td className="td-actions">
                    <Link
                      className="btn btn-link"
                      to={`/station/${row.id}`}
                    >
                      {i18n('common.view')}
                    </Link>
                    {hasPermissionToEdit && (
                      <Link
                        className="btn btn-link"
                        to={`/station/${row.id}/edit`}
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

export default StationListTable;
