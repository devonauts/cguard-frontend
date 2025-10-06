import { i18n } from 'src/i18n';
import actions from 'src/modules/representanteEmpresa/list/representanteEmpresaListActions';
import selectors from 'src/modules/representanteEmpresa/list/representanteEmpresaListSelectors';
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
import ClientAccountAutocompleteFormItem from 'src/view/clientAccount/autocomplete/ClientAccountAutocompleteFormItem';

const schema = yup.object().shape({
  personInCharge: yupFilterSchemas.relationToOne(
    i18n('entities.representanteEmpresa.fields.personInCharge'),
  ),
  governmentId: yupFilterSchemas.string(
    i18n('entities.representanteEmpresa.fields.governmentId'),
  ),
  jobTitle: yupFilterSchemas.string(
    i18n('entities.representanteEmpresa.fields.jobTitle'),
  ),
  assignedCompany: yupFilterSchemas.relationToOne(
    i18n('entities.representanteEmpresa.fields.assignedCompany'),
  ),
});

const emptyValues = {
  personInCharge: null,
  governmentId: null,
  jobTitle: null,
  assignedCompany: null,
}

const previewRenders = {
  personInCharge: {
    label: i18n('entities.representanteEmpresa.fields.personInCharge'),
    render: filterRenders.relationToOne(),
  },
  governmentId: {
    label: i18n('entities.representanteEmpresa.fields.governmentId'),
    render: filterRenders.generic(),
  },
  jobTitle: {
    label: i18n('entities.representanteEmpresa.fields.jobTitle'),
    render: filterRenders.generic(),
  },
  assignedCompany: {
      label: i18n('entities.representanteEmpresa.fields.assignedCompany'),
      render: filterRenders.relationToOne(),
    },
}

function RepresentanteEmpresaListFilter(props) {
  const rawFilter = useSelector(selectors.selectRawFilter);
  const dispatch = useDispatch();
  const [expanded, setExpanded] = useState(false);

  const [initialValues] = useState(() => {
    return {
      ...emptyValues,
      ...rawFilter,
    };
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
                      <UserAutocompleteFormItem  
                        name="personInCharge"
                        label={i18n('entities.representanteEmpresa.fields.personInCharge')}        
                      />
                    </div>
                    <div className="col-lg-6 col-12">
                      <InputFormItem
                        name="governmentId"
                        label={i18n('entities.representanteEmpresa.fields.governmentId')}      
                      />
                    </div>
                    <div className="col-lg-6 col-12">
                      <InputFormItem
                        name="jobTitle"
                        label={i18n('entities.representanteEmpresa.fields.jobTitle')}      
                      />
                    </div>
                    <div className="col-lg-6 col-12">
                      <ClientAccountAutocompleteFormItem  
                        name="assignedCompany"
                        label={i18n('entities.representanteEmpresa.fields.assignedCompany')}        
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

export default RepresentanteEmpresaListFilter;