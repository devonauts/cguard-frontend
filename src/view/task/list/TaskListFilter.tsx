import { i18n } from 'src/i18n';
import actions from 'src/modules/task/list/taskListActions';
import selectors from 'src/modules/task/list/taskListSelectors';
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
import SelectFormItem from 'src/view/shared/form/items/SelectFormItem';
import DatePickerRangeFormItem from 'src/view/shared/form/items/DatePickerRangeFormItem';
import StationAutocompleteFormItem from 'src/view/station/autocomplete/StationAutocompleteFormItem';

const schema = yup.object().shape({
  taskBelongsToStation: yupFilterSchemas.relationToOne(
    i18n('entities.task.fields.taskBelongsToStation'),
  ),
  taskToDo: yupFilterSchemas.string(
    i18n('entities.task.fields.taskToDo'),
  ),
  wasItDone: yupFilterSchemas.boolean(
    i18n('entities.task.fields.wasItDone'),
  ),
  dateToDoTheTaskRange: yupFilterSchemas.datetimeRange(
    i18n('entities.task.fields.dateToDoTheTaskRange'),
  ),
  dateCompletedTaskRange: yupFilterSchemas.datetimeRange(
    i18n('entities.task.fields.dateCompletedTaskRange'),
  ),
});

const emptyValues = {
  taskToDo: '',
  dateToDoTheTaskRange: [],
  dateCompletedTaskRange: [],
}

const previewRenders = {
  taskBelongsToStation: {
      label: i18n('entities.task.fields.taskBelongsToStation'),
      render: filterRenders.relationToOne(),
    },
  taskToDo: {
    label: i18n('entities.task.fields.taskToDo'),
    render: filterRenders.generic(),
  },
  wasItDone: {
    label: i18n('entities.task.fields.wasItDone'),
    render: filterRenders.boolean(),
  },
  dateToDoTheTaskRange: {
    label: i18n('entities.task.fields.dateToDoTheTaskRange'),
    render: filterRenders.datetimeRange(),
  },
  dateCompletedTaskRange: {
    label: i18n('entities.task.fields.dateCompletedTaskRange'),
    render: filterRenders.datetimeRange(),
  },
}

function TaskListFilter(props) {
  const rawFilter = useSelector(selectors.selectRawFilter);
  const dispatch = useDispatch();
  const [expanded, setExpanded] = useState(false);

  const [initialValues] = useState(() => {
    const cleanedFilter = { ...rawFilter };
    
    // Clean up relation and boolean fields that might have null values
    if (cleanedFilter.taskBelongsToStation === null || cleanedFilter.taskBelongsToStation === '') {
      delete cleanedFilter.taskBelongsToStation;
    }
    if (cleanedFilter.wasItDone === null || cleanedFilter.wasItDone === '') {
      delete cleanedFilter.wasItDone;
    }
    
    return {
      ...emptyValues,
      ...cleanedFilter,
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
                        name="taskBelongsToStation"
                        label={i18n('entities.task.fields.taskBelongsToStation')}        
                      />
                    </div>
                    <div className="col-lg-6 col-12">
                      <InputFormItem
                        name="taskToDo"
                        label={i18n('entities.task.fields.taskToDo')}      
                      />
                    </div>
                    <div className="col-lg-6 col-12">
                      <SelectFormItem
                        name="wasItDone"
                        label={i18n('entities.task.fields.wasItDone')}
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
                      <DatePickerRangeFormItem
                        name="dateToDoTheTaskRange"
                        label={i18n('entities.task.fields.dateToDoTheTaskRange')}    
                        showTimeInput
                      />
                    </div>
                    <div className="col-lg-6 col-12">
                      <DatePickerRangeFormItem
                        name="dateCompletedTaskRange"
                        label={i18n('entities.task.fields.dateCompletedTaskRange')}    
                        showTimeInput
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

export default TaskListFilter;