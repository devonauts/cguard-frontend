import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import ViewWrapper from 'src/view/shared/styles/ViewWrapper';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import FilesViewItem from 'src/view/shared/view/FilesViewItem';
import ClientAccountViewItem from 'src/view/clientAccount/view/ClientAccountViewItem';

function BillingView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <ViewWrapper>
      <TextViewItem
        label={i18n('entities.billing.fields.invoiceNumber')}
        value={record.invoiceNumber}
      />

      <TextViewItem
        label={i18n('entities.billing.fields.status')}
        value={
          record.status &&
          i18n(
            `entities.billing.enumerators.status.${record.status}`,
          )
        }
      />

      <ClientAccountViewItem
        label={i18n('entities.billing.fields.clientsInvoiced')}
        value={record.clientsInvoiced}
      />

      <TextViewItem
        label={i18n('entities.billing.fields.montoPorPagar')}
        value={record.montoPorPagar}
      />

      <TextViewItem
        label={i18n('entities.billing.fields.lastPaymentDate')}
        value={record.lastPaymentDate}
      />

      <TextViewItem
        label={i18n('entities.billing.fields.nextPaymentDate')}
        value={record.nextPaymentDate}
      />

      <FilesViewItem
        label={i18n(
          'entities.billing.fields.bill',
        )}
        value={record.bill}
      />

      <TextViewItem
        label={i18n('entities.billing.fields.description')}
        value={record.description}
      />
    </ViewWrapper>
  );
}

export default BillingView;
