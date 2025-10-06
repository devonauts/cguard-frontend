import { i18n } from 'src/i18n';
import actions from 'src/modules/patrolCheckpoint/list/patrolCheckpointListActions';
import selectors from 'src/modules/patrolCheckpoint/list/patrolCheckpointListSelectors';
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
import StationAutocompleteFormItem from 'src/view/station/autocomplete/StationAutocompleteFormItem';

const schema = yup.object().shape({
  station: yupFilterSchemas.relationToOne(
    i18n('entities.patrolCheckpoint.fields.station'),
  ),
  name: yupFilterSchemas.string(
    i18n('entities.patrolCheckpoint.fields.name'),
  ),
  latitud: yupFilterSchemas.string(
    i18n('entities.patrolCheckpoint.fields.latitud'),
  ),
  longitud: yupFilterSchemas.string(
    i18n('entities.patrolCheckpoint.fields.longitud'),
  ),
});

const emptyValues = {
  station: null,
  name: null,
  latitud: null,
  longitud: null,
}

const previewRenders = {
  station: {
      label: i18n('entities.patrolCheckpoint.fields.station'),
      render: filterRenders.relationToOne(),
    },
  name: {
    label: i18n('entities.patrolCheckpoint.fields.name'),
    render: filterRenders.generic(),
  },
  latitud: {
    label: i18n('entities.patrolCheckpoint.fields.latitud'),
    render: filterRenders.generic(),
  },
  longitud: {
    label: i18n('entities.patrolCheckpoint.fields.longitud'),
    render: filterRenders.generic(),
  },
}

function PatrolCheckpointListFilter(props) {
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
                      <StationAutocompleteFormItem  
                        name="station"
                        label={i18n('entities.patrolCheckpoint.fields.station')}        
                      />
                    </div>
                    <div className="col-lg-6 col-12">
                      <InputFormItem
                        name="name"
                        label={i18n('entities.patrolCheckpoint.fields.name')}      
                      />
                    </div>
                    <div className="col-lg-6 col-12">
                      <InputFormItem
                        name="latitud"
                        label={i18n('entities.patrolCheckpoint.fields.latitud')}      
                      />
                    </div>
                    <div className="col-lg-6 col-12">
                      <InputFormItem
                        name="longitud"
                        label={i18n('entities.patrolCheckpoint.fields.longitud')}      
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

export default PatrolCheckpointListFilter;