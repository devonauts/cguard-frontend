import PropTypes from 'prop-types';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import selectors from 'src/modules/deviceIdInformation/deviceIdInformationSelectors';

function DeviceIdInformationViewItem(props) {
  const hasPermissionToRead = useSelector(
    selectors.selectPermissionToRead,
  );

  const valueAsArray = () => {
    const { value } = props;

    if (!value) {
      return [];
    }

    if (Array.isArray(value)) {
      return value;
    }

    return [value];
  };

  const displayableRecord = (record) => {
    if (hasPermissionToRead) {
      return (
        <div key={record.id}>
          <Link
            className="btn btn-link"
            to={`/device-id-information/${record.id}`}
          >
            {record.deviceId}
          </Link>
        </div>
      );
    }

    return <div key={record.id}>{record.deviceId}</div>;
  };

  if (!valueAsArray().length) {
    return null;
  }

  return (
    <div style={{ marginBottom: '16px' }}>
      <label className="col-form-label">
        {props.label}
      </label>
      {valueAsArray().map((value) =>
        displayableRecord(value),
      )}
    </div>
  );
}

DeviceIdInformationViewItem.propTypes = {
  label: PropTypes.string,
  value: PropTypes.any,
};

export default DeviceIdInformationViewItem;
