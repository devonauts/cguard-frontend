import { i18n } from 'src/i18n';
import actions from 'src/modules/completionOfTutorial/list/completionOfTutorialListActions';
import selectors from 'src/modules/completionOfTutorial/list/completionOfTutorialListSelectors';
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
import SelectFormItem from 'src/view/shared/form/items/SelectFormItem';
import DatePickerRangeFormItem from 'src/view/shared/form/items/DatePickerRangeFormItem';
import SecurityGuardAutocompleteFormItem from 'src/view/securityGuard/autocomplete/SecurityGuardAutocompleteFormItem';
import TutorialAutocompleteFormItem from 'src/view/tutorial/autocomplete/TutorialAutocompleteFormItem';

const schema = yup.object().shape({
  guardName: yupFilterSchemas.relationToOne(
    i18n('entities.completionOfTutorial.fields.guardName'),
  ),
  dateTutorialStartedRange: yupFilterSchemas.datetimeRange(
    i18n('entities.completionOfTutorial.fields.dateTutorialStartedRange'),
  ),
  tutorialStarted: yupFilterSchemas.boolean(
    i18n('entities.completionOfTutorial.fields.tutorialStarted'),
  ),
  checkedTutorial: yupFilterSchemas.relationToOne(
    i18n('entities.completionOfTutorial.fields.checkedTutorial'),
  ),
  wasCompleted: yupFilterSchemas.boolean(
    i18n('entities.completionOfTutorial.fields.wasCompleted'),
  ),
  dateEndedTutorialRange: yupFilterSchemas.datetimeRange(
    i18n('entities.completionOfTutorial.fields.dateEndedTutorialRange'),
  ),
});

const emptyValues = {
  guardName: null,
  dateTutorialStartedRange: [],
  tutorialStarted: null,
  checkedTutorial: null,
  wasCompleted: null,
  dateEndedTutorialRange: [],
}

const previewRenders = {
  guardName: {
      label: i18n('entities.completionOfTutorial.fields.guardName'),
      render: filterRenders.relationToOne(),
    },
  dateTutorialStartedRange: {
    label: i18n('entities.completionOfTutorial.fields.dateTutorialStartedRange'),
    render: filterRenders.datetimeRange(),
  },
  tutorialStarted: {
    label: i18n('entities.completionOfTutorial.fields.tutorialStarted'),
    render: filterRenders.boolean(),
  },
  checkedTutorial: {
      label: i18n('entities.completionOfTutorial.fields.checkedTutorial'),
      render: filterRenders.relationToOne(),
    },
  wasCompleted: {
    label: i18n('entities.completionOfTutorial.fields.wasCompleted'),
    render: filterRenders.boolean(),
  },
  dateEndedTutorialRange: {
    label: i18n('entities.completionOfTutorial.fields.dateEndedTutorialRange'),
    render: filterRenders.datetimeRange(),
  },
}

function CompletionOfTutorialListFilter(props) {
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
                      <SecurityGuardAutocompleteFormItem  
                        name="guardName"
                        label={i18n('entities.completionOfTutorial.fields.guardName')}        
                      />
                    </div>
                    <div className="col-lg-6 col-12">
                      <DatePickerRangeFormItem
                        name="dateTutorialStartedRange"
                        label={i18n('entities.completionOfTutorial.fields.dateTutorialStartedRange')}    
                        showTimeInput
                      />
                    </div>
                    <div className="col-lg-6 col-12">
                      <SelectFormItem
                        name="tutorialStarted"
                        label={i18n('entities.completionOfTutorial.fields.tutorialStarted')}
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
                      <TutorialAutocompleteFormItem  
                        name="checkedTutorial"
                        label={i18n('entities.completionOfTutorial.fields.checkedTutorial')}        
                      />
                    </div>
                    <div className="col-lg-6 col-12">
                      <SelectFormItem
                        name="wasCompleted"
                        label={i18n('entities.completionOfTutorial.fields.wasCompleted')}
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
                        name="dateEndedTutorialRange"
                        label={i18n('entities.completionOfTutorial.fields.dateEndedTutorialRange')}    
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

export default CompletionOfTutorialListFilter;