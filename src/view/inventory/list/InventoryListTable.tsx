import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { i18n } from 'src/i18n';
import inventorySelectors from 'src/modules/inventory/inventorySelectors';
import destroyActions from 'src/modules/inventory/destroy/inventoryDestroyActions';
import destroySelectors from 'src/modules/inventory/destroy/inventoryDestroySelectors';
import actions from 'src/modules/inventory/list/inventoryListActions';
import selectors from 'src/modules/inventory/list/inventoryListSelectors';
import TableColumnHeader from 'src/view/shared/table/TableColumnHeader';
import ConfirmModal from 'src/view/shared/modals/ConfirmModal';
import Spinner from 'src/view/shared/Spinner';
import TableWrapper from 'src/view/shared/styles/TableWrapper';
import Pagination from 'src/view/shared/table/Pagination';
import StationListItem from 'src/view/station/list/StationListItem';

function InventoryListTable(props) {
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
    inventorySelectors.selectPermissionToEdit,
  );
  const hasPermissionToDestroy = useSelector(
    inventorySelectors.selectPermissionToDestroy,
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
                    'entities.inventory.fields.belongsTo',
                  )}
                />
                <TableColumnHeader
                  onSort={doChangeSort}
                  hasRows={hasRows}
                  sorter={sorter}
                  name={'belongsToStation'}
                  label={i18n(
                    'entities.inventory.fields.belongsToStation',
                  )}
                />
                <TableColumnHeader
                  onSort={doChangeSort}
                  hasRows={hasRows}
                  sorter={sorter}
                  name={'radio'}
                  label={i18n(
                    'entities.inventory.fields.radio',
                  )}
                />
                <TableColumnHeader
                  onSort={doChangeSort}
                  hasRows={hasRows}
                  sorter={sorter}
                  name={'radioType'}
                  label={i18n(
                    'entities.inventory.fields.radioType',
                  )}
                />
                <TableColumnHeader
                  onSort={doChangeSort}
                  hasRows={hasRows}
                  sorter={sorter}
                  name={'radioSerialNumber'}
                  label={i18n(
                    'entities.inventory.fields.radioSerialNumber',
                  )}
                />
                <TableColumnHeader
                  onSort={doChangeSort}
                  hasRows={hasRows}
                  sorter={sorter}
                  name={'gun'}
                  label={i18n(
                    'entities.inventory.fields.gun',
                  )}
                />
                <TableColumnHeader
                  onSort={doChangeSort}
                  hasRows={hasRows}
                  sorter={sorter}
                  name={'gunType'}
                  label={i18n(
                    'entities.inventory.fields.gunType',
                  )}
                />
                <TableColumnHeader
                  onSort={doChangeSort}
                  hasRows={hasRows}
                  sorter={sorter}
                  name={'gunSerialNumber'}
                  label={i18n(
                    'entities.inventory.fields.gunSerialNumber',
                  )}
                />
                <TableColumnHeader
                  onSort={doChangeSort}
                  hasRows={hasRows}
                  sorter={sorter}
                  name={'armor'}
                  label={i18n(
                    'entities.inventory.fields.armor',
                  )}
                />
                <TableColumnHeader
                  onSort={doChangeSort}
                  hasRows={hasRows}
                  sorter={sorter}
                  name={'armorType'}
                  label={i18n(
                    'entities.inventory.fields.armorType',
                  )}
                />
                <TableColumnHeader
                  onSort={doChangeSort}
                  hasRows={hasRows}
                  sorter={sorter}
                  name={'armorSerialNumber'}
                  label={i18n(
                    'entities.inventory.fields.armorSerialNumber',
                  )}
                />
                <TableColumnHeader
                  onSort={doChangeSort}
                  hasRows={hasRows}
                  sorter={sorter}
                  name={'tolete'}
                  label={i18n(
                    'entities.inventory.fields.tolete',
                  )}
                />
                <TableColumnHeader
                  onSort={doChangeSort}
                  hasRows={hasRows}
                  sorter={sorter}
                  name={'pito'}
                  label={i18n(
                    'entities.inventory.fields.pito',
                  )}
                />
                <TableColumnHeader
                  onSort={doChangeSort}
                  hasRows={hasRows}
                  sorter={sorter}
                  name={'linterna'}
                  label={i18n(
                    'entities.inventory.fields.linterna',
                  )}
                />
                <TableColumnHeader
                  onSort={doChangeSort}
                  hasRows={hasRows}
                  sorter={sorter}
                  name={'vitacora'}
                  label={i18n(
                    'entities.inventory.fields.vitacora',
                  )}
                />
                <TableColumnHeader
                  onSort={doChangeSort}
                  hasRows={hasRows}
                  sorter={sorter}
                  name={'cintoCompleto'}
                  label={i18n(
                    'entities.inventory.fields.cintoCompleto',
                  )}
                />
                <TableColumnHeader
                  onSort={doChangeSort}
                  hasRows={hasRows}
                  sorter={sorter}
                  name={'ponchoDeAguas'}
                  label={i18n(
                    'entities.inventory.fields.ponchoDeAguas',
                  )}
                />
                <TableColumnHeader
                  onSort={doChangeSort}
                  hasRows={hasRows}
                  sorter={sorter}
                  name={'detectorDeMetales'}
                  label={i18n(
                    'entities.inventory.fields.detectorDeMetales',
                  )}
                />
                <TableColumnHeader
                  onSort={doChangeSort}
                  hasRows={hasRows}
                  sorter={sorter}
                  name={'caseta'}
                  label={i18n(
                    'entities.inventory.fields.caseta',
                  )}
                />
                <TableColumnHeader
                  onSort={doChangeSort}
                  hasRows={hasRows}
                  sorter={sorter}
                  name={'observations'}
                  label={i18n(
                    'entities.inventory.fields.observations',
                  )}
                />
                <TableColumnHeader
                  onSort={doChangeSort}
                  hasRows={hasRows}
                  sorter={sorter}
                  name={'transportation'}
                  label={i18n(
                    'entities.inventory.fields.transportation',
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
                    <StationListItem value={row.belongsTo} />
                  </td>
                  <td>{row.belongsToStation}</td>
                  <td>
                    {row.radio
                      ? i18n('common.yes')
                      : i18n('common.no')}
                  </td>
                  <td>{row.radioType}</td>
                  <td>{row.radioSerialNumber}</td>
                  <td>
                    {row.gun
                      ? i18n('common.yes')
                      : i18n('common.no')}
                  </td>
                  <td>
                    {row.gunType
                      ? i18n(
                          `entities.inventory.enumerators.gunType.${row.gunType}`,
                        )
                      : null}
                  </td>
                  <td>{row.gunSerialNumber}</td>
                  <td>
                    {row.armor
                      ? i18n('common.yes')
                      : i18n('common.no')}
                  </td>
                  <td>{row.armorType}</td>
                  <td>{row.armorSerialNumber}</td>
                  <td>
                    {row.tolete
                      ? i18n('common.yes')
                      : i18n('common.no')}
                  </td>
                  <td>
                    {row.pito
                      ? i18n('common.yes')
                      : i18n('common.no')}
                  </td>
                  <td>
                    {row.linterna
                      ? i18n('common.yes')
                      : i18n('common.no')}
                  </td>
                  <td>
                    {row.vitacora
                      ? i18n('common.yes')
                      : i18n('common.no')}
                  </td>
                  <td>
                    {row.cintoCompleto
                      ? i18n('common.yes')
                      : i18n('common.no')}
                  </td>
                  <td>
                    {row.ponchoDeAguas
                      ? i18n('common.yes')
                      : i18n('common.no')}
                  </td>
                  <td>
                    {row.detectorDeMetales
                      ? i18n('common.yes')
                      : i18n('common.no')}
                  </td>
                  <td>
                    {row.caseta
                      ? i18n('common.yes')
                      : i18n('common.no')}
                  </td>
                  <td>{row.observations}</td>
                  <td>
                    {row.transportation
                      ? i18n(
                          `entities.inventory.enumerators.transportation.${row.transportation}`,
                        )
                      : null}
                  </td>
                  <td className="td-actions">
                    <Link
                      className="btn btn-link"
                      to={`/inventory/${row.id}`}
                    >
                      {i18n('common.view')}
                    </Link>
                    {hasPermissionToEdit && (
                      <Link
                        className="btn btn-link"
                        to={`/inventory/${row.id}/edit`}
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

export default InventoryListTable;
