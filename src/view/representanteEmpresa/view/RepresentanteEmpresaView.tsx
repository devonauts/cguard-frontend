import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import ViewWrapper from 'src/view/shared/styles/ViewWrapper';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import UserViewItem from 'src/view/user/view/UserViewItem';
import ClientAccountViewItem from 'src/view/clientAccount/view/ClientAccountViewItem';

function RepresentanteEmpresaView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <ViewWrapper>
      <UserViewItem
        label={i18n('entities.representanteEmpresa.fields.personInCharge')}
        value={record.personInCharge}
      />

      <TextViewItem
        label={i18n('entities.representanteEmpresa.fields.governmentId')}
        value={record.governmentId}
      />

      <TextViewItem
        label={i18n('entities.representanteEmpresa.fields.jobTitle')}
        value={record.jobTitle}
      />

      <ClientAccountViewItem
        label={i18n('entities.representanteEmpresa.fields.assignedCompany')}
        value={record.assignedCompany}
      />
    </ViewWrapper>
  );
}

export default RepresentanteEmpresaView;
