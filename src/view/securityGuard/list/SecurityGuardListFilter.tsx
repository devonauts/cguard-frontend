import { i18n } from 'src/i18n';
import actions from 'src/modules/securityGuard/list/securityGuardListActions';
import selectors from 'src/modules/securityGuard/list/securityGuardListSelectors';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useForm, FormProvider } from 'react-hook-form';
import yupFilterSchemas from 'src/modules/shared/yup/yupFilterSchemas';
import ButtonIcon from 'src/view/shared/ButtonIcon';
import FilterWrapper from 'src/view/shared/styles/FilterWrapper';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import FilterPreview from 'src/view/shared/filter/FilterPreview';
import filterRenders from 'src/modules/shared/filter/filterRenders';
import InputFormItem from 'src/view/shared/form/items/InputFormItem';
import UserAutocompleteFormItem from 'src/view/user/autocomplete/UserAutocompleteFormItem';
import SelectFormItem from 'src/view/shared/form/items/SelectFormItem';
import securityGuardEnumerators from 'src/modules/securityGuard/securityGuardEnumerators';
import DatePickerRangeFormItem from 'src/view/shared/form/items/DatePickerRangeFormItem';

const schema = yup.object().shape({
  governmentId: yupFilterSchemas.string(
    i18n('entities.securityGuard.fields.governmentId'),
  ),
  fullName: yupFilterSchemas.string(
    i18n('entities.securityGuard.fields.fullName'),
  ),
  guard: yupFilterSchemas.relationToOne(
    i18n('entities.securityGuard.fields.guard'),
  ),
  hiringContractDateRange: yupFilterSchemas.dateRange(
    i18n('entities.securityGuard.fields.hiringContractDateRange'),
  ),
  gender: yupFilterSchemas.enumerator(
    i18n('entities.securityGuard.fields.gender'),
  ),
  isOnDuty: yupFilterSchemas.boolean(
    i18n('entities.securityGuard.fields.isOnDuty'),
  ),
  bloodType: yupFilterSchemas.enumerator(
    i18n('entities.securityGuard.fields.bloodType'),
  ),
  guardCredentials: yupFilterSchemas.string(
    i18n('entities.securityGuard.fields.guardCredentials'),
  ),
  birthDateRange: yupFilterSchemas.dateRange(
    i18n('entities.securityGuard.fields.birthDateRange'),
  ),
  birthPlace: yupFilterSchemas.string(
    i18n('entities.securityGuard.fields.birthPlace'),
  ),
  maritalStatus: yupFilterSchemas.enumerator(
    i18n('entities.securityGuard.fields.maritalStatus'),
  ),
  academicInstruction: yupFilterSchemas.enumerator(
    i18n('entities.securityGuard.fields.academicInstruction'),
  ),
  address: yupFilterSchemas.string(
    i18n('entities.securityGuard.fields.address'),
  ),
});

const emptyValues = {
  governmentId: '',
  fullName: '',
  // guard omitted - relation field will be undefined by default
  hiringContractDateRange: [],
  gender: '',  // enumerator - empty string gets transformed to null
  // isOnDuty omitted - boolean field will be undefined by default
  bloodType: '', // enumerator - empty string gets transformed to null
  guardCredentials: '',
  birthDateRange: [],
  birthPlace: '',
  maritalStatus: '', // enumerator - empty string gets transformed to null
  academicInstruction: '', // enumerator - empty string gets transformed to null
  address: '',
}

const previewRenders = {
  governmentId: {
    label: i18n('entities.securityGuard.fields.governmentId'),
    render: filterRenders.generic(),
  },
  fullName: {
    label: i18n('entities.securityGuard.fields.fullName'),
    render: filterRenders.generic(),
  },
  guard: {
    label: i18n('entities.securityGuard.fields.guard'),
    render: filterRenders.relationToOne(),
  },
  hiringContractDateRange: {
    label: i18n('entities.securityGuard.fields.hiringContractDateRange'),
    render: filterRenders.dateRange(),
  },
  gender: {
    label: i18n('entities.securityGuard.fields.gender'),
    render: filterRenders.enumerator('entities.securityGuard.enumerators.gender',),
  },
  isOnDuty: {
    label: i18n('entities.securityGuard.fields.isOnDuty'),
    render: filterRenders.boolean(),
  },
  bloodType: {
    label: i18n('entities.securityGuard.fields.bloodType'),
    render: filterRenders.enumerator('entities.securityGuard.enumerators.bloodType',),
  },
  guardCredentials: {
    label: i18n('entities.securityGuard.fields.guardCredentials'),
    render: filterRenders.generic(),
  },
  birthDateRange: {
    label: i18n('entities.securityGuard.fields.birthDateRange'),
    render: filterRenders.dateRange(),
  },
  birthPlace: {
    label: i18n('entities.securityGuard.fields.birthPlace'),
    render: filterRenders.generic(),
  },
  maritalStatus: {
    label: i18n('entities.securityGuard.fields.maritalStatus'),
    render: filterRenders.enumerator('entities.securityGuard.enumerators.maritalStatus',),
  },
  academicInstruction: {
    label: i18n('entities.securityGuard.fields.academicInstruction'),
    render: filterRenders.enumerator('entities.securityGuard.enumerators.academicInstruction',),
  },
  address: {
    label: i18n('entities.securityGuard.fields.address'),
    render: filterRenders.generic(),
  },
}

function SecurityGuardListFilter(props) {
  const rawFilter = useSelector(selectors.selectRawFilter);
  const dispatch = useDispatch();
  const [expanded, setExpanded] = useState(false);

  const [initialValues] = useState(() => {
    const baseValues = {
      ...emptyValues,
      ...rawFilter,
    };
    
    // Clean up any boolean fields that have empty string values
    // which would cause Yup casting errors
    if (baseValues.isOnDuty === '') {
      delete baseValues.isOnDuty;
    }
    
    return baseValues;
  });

  const form = useForm({
    resolver: yupResolver(schema),
    defaultValues: initialValues,
    mode: 'all',
  });

  useEffect(() => {
    dispatch(actions.doFetch(schema.cast(initialValues), rawFilter));
    // eslint-disable-next-line
  }, [dispatch]);

  const onSubmit = (values) => {
    const rawValues = form.getValues();
    dispatch(actions.doFetch(values, rawValues));
    setExpanded(false);
  };

  const onRemove = (key) => {
    form.setValue(key, emptyValues[key]);
    return form.handleSubmit(onSubmit)();
  };

  const onReset = () => {
    Object.keys(emptyValues).forEach((key) => {
      form.setValue(key, emptyValues[key]);
    });
    dispatch(actions.doReset());
    setExpanded(false);
  };

  return (
    <FilterWrapper>
      <FilterPreview
        onClick={() => {
          setExpanded(!expanded);
        }}
        renders={previewRenders}
        values={rawFilter}
        expanded={expanded}
        onRemove={onRemove}
      />
      <div className="container">
        <div
          className={`collapse ${expanded ? 'show' : ''}`}
        >
          <FormProvider {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div className="row">
                    <div className="col-lg-6 col-12">
                      <InputFormItem
                        name="governmentId"
                        label={i18n('entities.securityGuard.fields.governmentId')}      
                      />
                    </div>
                    <div className="col-lg-6 col-12">
                      <InputFormItem
                        name="fullName"
                        label={i18n('entities.securityGuard.fields.fullName')}      
                      />
                    </div>
                    <div className="col-lg-6 col-12">
                      <UserAutocompleteFormItem  
                        name="guard"
                        label={i18n('entities.securityGuard.fields.guard')}        
                      />
                    </div>
                    <div className="col-lg-6 col-12">
                      <DatePickerRangeFormItem
                        name="hiringContractDateRange"
                        label={i18n('entities.securityGuard.fields.hiringContractDateRange')}    
                      />
                    </div>
                    <div className="col-lg-6 col-12">
                      <SelectFormItem
                        name="gender"
                        label={i18n('entities.securityGuard.fields.gender')}
                        options={securityGuardEnumerators.gender.map(
                          (value) => ({
                            value,
                            label: i18n(
                              `entities.securityGuard.enumerators.gender.${value}`,
                            ),
                          }),
                        )}
                      />
                    </div>
                    <div className="col-lg-6 col-12">
                      <SelectFormItem
                        name="isOnDuty"
                        label={i18n('entities.securityGuard.fields.isOnDuty')}
                        options={[
                          {
                            value: true,
                            label: i18n('common.yes'),
                          },
                          {
                            value: false,
                            label: i18n('common.no'),
                          },
                        ]}
                      />
                    </div>
                    <div className="col-lg-6 col-12">
                      <SelectFormItem
                        name="bloodType"
                        label={i18n('entities.securityGuard.fields.bloodType')}
                        options={securityGuardEnumerators.bloodType.map(
                          (value) => ({
                            value,
                            label: i18n(
                              `entities.securityGuard.enumerators.bloodType.${value}`,
                            ),
                          }),
                        )}
                      />
                    </div>
                    <div className="col-lg-6 col-12">
                      <InputFormItem
                        name="guardCredentials"
                        label={i18n('entities.securityGuard.fields.guardCredentials')}      
                      />
                    </div>
                    <div className="col-lg-6 col-12">
                      <DatePickerRangeFormItem
                        name="birthDateRange"
                        label={i18n('entities.securityGuard.fields.birthDateRange')}    
                      />
                    </div>
                    <div className="col-lg-6 col-12">
                      <InputFormItem
                        name="birthPlace"
                        label={i18n('entities.securityGuard.fields.birthPlace')}      
                      />
                    </div>
                    <div className="col-lg-6 col-12">
                      <SelectFormItem
                        name="maritalStatus"
                        label={i18n('entities.securityGuard.fields.maritalStatus')}
                        options={securityGuardEnumerators.maritalStatus.map(
                          (value) => ({
                            value,
                            label: i18n(
                              `entities.securityGuard.enumerators.maritalStatus.${value}`,
                            ),
                          }),
                        )}
                      />
                    </div>
                    <div className="col-lg-6 col-12">
                      <SelectFormItem
                        name="academicInstruction"
                        label={i18n('entities.securityGuard.fields.academicInstruction')}
                        options={securityGuardEnumerators.academicInstruction.map(
                          (value) => ({
                            value,
                            label: i18n(
                              `entities.securityGuard.enumerators.academicInstruction.${value}`,
                            ),
                          }),
                        )}
                      />
                    </div>
                    <div className="col-lg-6 col-12">
                      <InputFormItem
                        name="address"
                        label={i18n('entities.securityGuard.fields.address')}      
                      />
                    </div>
              </div>

              <div className="row">
                <div className="col-12 filter-buttons">
                  <button
                    className="btn btn-primary"
                    type="submit"
                    disabled={props.loading}
                  >
                    <ButtonIcon
                      loading={props.loading}
                      iconClass="fas fa-search"
                    />{' '}
                    {i18n('common.search')}
                  </button>
                  <button
                    className="btn btn-light"
                    type="button"
                    onClick={onReset}
                    disabled={props.loading}
                  >
                    <ButtonIcon
                      loading={props.loading}
                      iconClass="fas fa-undo"
                    />{' '}
                    {i18n('common.reset')}
                  </button>
                </div>
              </div>
            </form>
          </FormProvider>
        </div>
      </div>
    </FilterWrapper>
  );
}

export default SecurityGuardListFilter;