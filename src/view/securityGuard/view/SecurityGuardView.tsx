import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import ViewWrapper from 'src/view/shared/styles/ViewWrapper';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import UserViewItem from 'src/view/user/view/UserViewItem';
import ImagesViewItem from 'src/view/shared/view/ImagesViewItem';
import MemosViewItem from 'src/view/memos/view/MemosViewItem';
import RequestViewItem from 'src/view/request/view/RequestViewItem';
import CompletionOfTutorialViewItem from 'src/view/completionOfTutorial/view/CompletionOfTutorialViewItem';

function SecurityGuardView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <ViewWrapper>
      <TextViewItem
        label={i18n('entities.securityGuard.fields.governmentId')}
        value={record.governmentId}
      />

      <TextViewItem
        label={i18n('entities.securityGuard.fields.fullName')}
        value={record.fullName}
      />

      <UserViewItem
        label={i18n('entities.securityGuard.fields.guard')}
        value={record.guard}
      />

      <TextViewItem
        label={i18n('entities.securityGuard.fields.hiringContractDate')}
        value={record.hiringContractDate}
      />

      <TextViewItem
        label={i18n('entities.securityGuard.fields.gender')}
        value={
          record.gender &&
          i18n(
            `entities.securityGuard.enumerators.gender.${record.gender}`,
          )
        }
      />

      <TextViewItem
        label={i18n('entities.securityGuard.fields.isOnDuty')}
        value={
          record.isOnDuty
            ? i18n('common.yes')
            : i18n('common.no')
        }
      />

      <TextViewItem
        label={i18n('entities.securityGuard.fields.bloodType')}
        value={
          record.bloodType &&
          i18n(
            `entities.securityGuard.enumerators.bloodType.${record.bloodType}`,
          )
        }
      />

      <TextViewItem
        label={i18n('entities.securityGuard.fields.guardCredentials')}
        value={record.guardCredentials}
      />

      <TextViewItem
        label={i18n('entities.securityGuard.fields.birthDate')}
        value={record.birthDate}
      />

      <TextViewItem
        label={i18n('entities.securityGuard.fields.birthPlace')}
        value={record.birthPlace}
      />

      <ImagesViewItem
        label={i18n('entities.securityGuard.fields.profileImage')}
        value={record.profileImage}
      />

      <TextViewItem
        label={i18n('entities.securityGuard.fields.maritalStatus')}
        value={
          record.maritalStatus &&
          i18n(
            `entities.securityGuard.enumerators.maritalStatus.${record.maritalStatus}`,
          )
        }
      />

      <ImagesViewItem
        label={i18n('entities.securityGuard.fields.credentialImage')}
        value={record.credentialImage}
      />

      <TextViewItem
        label={i18n('entities.securityGuard.fields.academicInstruction')}
        value={
          record.academicInstruction &&
          i18n(
            `entities.securityGuard.enumerators.academicInstruction.${record.academicInstruction}`,
          )
        }
      />

      <ImagesViewItem
        label={i18n('entities.securityGuard.fields.recordPolicial')}
        value={record.recordPolicial}
      />

      <TextViewItem
        label={i18n('entities.securityGuard.fields.address')}
        value={record.address}
      />

      <MemosViewItem
        label={i18n('entities.securityGuard.fields.memos')}
        value={record.memos}
      />

      <RequestViewItem
        label={i18n('entities.securityGuard.fields.requests')}
        value={record.requests}
      />

      <CompletionOfTutorialViewItem
        label={i18n('entities.securityGuard.fields.tutoriales')}
        value={record.tutoriales}
      />
    </ViewWrapper>
  );
}

export default SecurityGuardView;
