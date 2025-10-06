import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { i18n } from 'src/i18n';
import securityGuardSelectors from 'src/modules/securityGuard/securityGuardSelectors';
import destroyActions from 'src/modules/securityGuard/destroy/securityGuardDestroyActions';
import destroySelectors from 'src/modules/securityGuard/destroy/securityGuardDestroySelectors';
import actions from 'src/modules/securityGuard/list/securityGuardListActions';
import selectors from 'src/modules/securityGuard/list/securityGuardListSelectors';
import TableColumnHeader from 'src/view/shared/table/TableColumnHeader';
import ConfirmModal from 'src/view/shared/modals/ConfirmModal';
import Spinner from 'src/view/shared/Spinner';
import TableWrapper from 'src/view/shared/styles/TableWrapper';
import Pagination from 'src/view/shared/table/Pagination';
import UserListItem from 'src/view/user/list/UserListItem';
import ImagesListView from 'src/view/shared/table/ImagesListView';
import MemosListItem from 'src/view/memos/list/MemosListItem';
import RequestListItem from 'src/view/request/list/RequestListItem';
import CompletionOfTutorialListItem from 'src/view/completionOfTutorial/list/CompletionOfTutorialListItem';

function SecurityGuardListTable(props) {
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
    securityGuardSelectors.selectPermissionToEdit,
  );
  const hasPermissionToDestroy = useSelector(
    securityGuardSelectors.selectPermissionToDestroy,
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
                  name={'governmentId'}
                  label={i18n(
                    'entities.securityGuard.fields.governmentId',
                  )}
                />
                <TableColumnHeader
                  onSort={doChangeSort}
                  hasRows={hasRows}
                  sorter={sorter}
                  name={'fullName'}
                  label={i18n(
                    'entities.securityGuard.fields.fullName',
                  )}
                />
                <TableColumnHeader
                  label={i18n(
                    'entities.securityGuard.fields.guard',
                  )}
                />
                <TableColumnHeader
                  onSort={doChangeSort}
                  hasRows={hasRows}
                  sorter={sorter}
                  name={'hiringContractDate'}
                  label={i18n(
                    'entities.securityGuard.fields.hiringContractDate',
                  )}
                />
                <TableColumnHeader
                  onSort={doChangeSort}
                  hasRows={hasRows}
                  sorter={sorter}
                  name={'gender'}
                  label={i18n(
                    'entities.securityGuard.fields.gender',
                  )}
                />
                <TableColumnHeader
                  onSort={doChangeSort}
                  hasRows={hasRows}
                  sorter={sorter}
                  name={'isOnDuty'}
                  label={i18n(
                    'entities.securityGuard.fields.isOnDuty',
                  )}
                />
                <TableColumnHeader
                  onSort={doChangeSort}
                  hasRows={hasRows}
                  sorter={sorter}
                  name={'bloodType'}
                  label={i18n(
                    'entities.securityGuard.fields.bloodType',
                  )}
                />
                <TableColumnHeader
                  onSort={doChangeSort}
                  hasRows={hasRows}
                  sorter={sorter}
                  name={'guardCredentials'}
                  label={i18n(
                    'entities.securityGuard.fields.guardCredentials',
                  )}
                />
                <TableColumnHeader
                  onSort={doChangeSort}
                  hasRows={hasRows}
                  sorter={sorter}
                  name={'birthDate'}
                  label={i18n(
                    'entities.securityGuard.fields.birthDate',
                  )}
                />
                <TableColumnHeader
                  onSort={doChangeSort}
                  hasRows={hasRows}
                  sorter={sorter}
                  name={'birthPlace'}
                  label={i18n(
                    'entities.securityGuard.fields.birthPlace',
                  )}
                />
                <TableColumnHeader
                  label={i18n(
                    'entities.securityGuard.fields.profileImage',
                  )}
                />
                <TableColumnHeader
                  onSort={doChangeSort}
                  hasRows={hasRows}
                  sorter={sorter}
                  name={'maritalStatus'}
                  label={i18n(
                    'entities.securityGuard.fields.maritalStatus',
                  )}
                />
                <TableColumnHeader
                  label={i18n(
                    'entities.securityGuard.fields.credentialImage',
                  )}
                />
                <TableColumnHeader
                  onSort={doChangeSort}
                  hasRows={hasRows}
                  sorter={sorter}
                  name={'academicInstruction'}
                  label={i18n(
                    'entities.securityGuard.fields.academicInstruction',
                  )}
                />
                <TableColumnHeader
                  label={i18n(
                    'entities.securityGuard.fields.recordPolicial',
                  )}
                />
                <TableColumnHeader
                  onSort={doChangeSort}
                  hasRows={hasRows}
                  sorter={sorter}
                  name={'address'}
                  label={i18n(
                    'entities.securityGuard.fields.address',
                  )}
                />
                <TableColumnHeader
                  label={i18n(
                    'entities.securityGuard.fields.memos',
                  )}
                />
                <TableColumnHeader
                  label={i18n(
                    'entities.securityGuard.fields.requests',
                  )}
                />
                <TableColumnHeader
                  label={i18n(
                    'entities.securityGuard.fields.tutoriales',
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
                  <td>{row.governmentId}</td>
                  <td>{row.fullName}</td>
                  <td>
                    <UserListItem value={row.guard} />
                  </td>
                  <td>{row.hiringContractDate}</td>
                  <td>
                    {row.gender
                      ? i18n(
                          `entities.securityGuard.enumerators.gender.${row.gender}`,
                        )
                      : null}
                  </td>
                  <td>
                    {row.isOnDuty
                      ? i18n('common.yes')
                      : i18n('common.no')}
                  </td>
                  <td>
                    {row.bloodType
                      ? i18n(
                          `entities.securityGuard.enumerators.bloodType.${row.bloodType}`,
                        )
                      : null}
                  </td>
                  <td>{row.guardCredentials}</td>
                  <td>{row.birthDate}</td>
                  <td>{row.birthPlace}</td>
                  <td>
                    <ImagesListView value={row.profileImage} />
                  </td>
                  <td>
                    {row.maritalStatus
                      ? i18n(
                          `entities.securityGuard.enumerators.maritalStatus.${row.maritalStatus}`,
                        )
                      : null}
                  </td>
                  <td>
                    <ImagesListView value={row.credentialImage} />
                  </td>
                  <td>
                    {row.academicInstruction
                      ? i18n(
                          `entities.securityGuard.enumerators.academicInstruction.${row.academicInstruction}`,
                        )
                      : null}
                  </td>
                  <td>
                    <ImagesListView value={row.recordPolicial} />
                  </td>
                  <td>{row.address}</td>
                  <td>
                    <MemosListItem value={row.memos} />
                  </td>
                  <td>
                    <RequestListItem value={row.requests} />
                  </td>
                  <td>
                    <CompletionOfTutorialListItem value={row.tutoriales} />
                  </td>
                  <td className="td-actions">
                    <Link
                      className="btn btn-link"
                      to={`/security-guard/${row.id}`}
                    >
                      {i18n('common.view')}
                    </Link>
                    {hasPermissionToEdit && (
                      <Link
                        className="btn btn-link"
                        to={`/security-guard/${row.id}/edit`}
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

export default SecurityGuardListTable;
