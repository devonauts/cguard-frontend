import { i18n } from 'src/i18n';
import actions from 'src/modules/notification/list/notificationListActions';
import selectors from 'src/modules/notification/list/notificationListSelectors';
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
import notificationEnumerators from 'src/modules/notification/notificationEnumerators';

const schema = yup.object().shape({
  title: yupFilterSchemas.string(
    i18n('entities.notification.fields.title'),
  ),
  body: yupFilterSchemas.string(
    i18n('entities.notification.fields.body'),
  ),
  targetId: yupFilterSchemas.string(
    i18n('entities.notification.fields.targetId'),
  ),
  whoCreatedTheNotification: yupFilterSchemas.relationToOne(
    i18n('entities.notification.fields.whoCreatedTheNotification'),
  ),
  deliveryStatus: yupFilterSchemas.enumerator(
    i18n('entities.notification.fields.deliveryStatus'),
  ),
  readStatus: yupFilterSchemas.boolean(
    i18n('entities.notification.fields.readStatus'),
  ),
});

const emptyValues = {
  title: null,
  body: null,
  targetId: null,
  whoCreatedTheNotification: null,
  deliveryStatus: null,
  readStatus: null,
}

const previewRenders = {
  title: {
    label: i18n('entities.notification.fields.title'),
    render: filterRenders.generic(),
  },
  body: {
    label: i18n('entities.notification.fields.body'),
    render: filterRenders.generic(),
  },
  targetId: {
    label: i18n('entities.notification.fields.targetId'),
    render: filterRenders.generic(),
  },
  whoCreatedTheNotification: {
    label: i18n('entities.notification.fields.whoCreatedTheNotification'),
    render: filterRenders.relationToOne(),
  },
  deliveryStatus: {
    label: i18n('entities.notification.fields.deliveryStatus'),
    render: filterRenders.enumerator('entities.notification.enumerators.deliveryStatus',),
  },
  readStatus: {
    label: i18n('entities.notification.fields.readStatus'),
    render: filterRenders.boolean(),
  },
}

function NotificationListFilter(props) {
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
                      <InputFormItem
                        name="title"
                        label={i18n('entities.notification.fields.title')}      
                      />
                    </div>
                    <div className="col-lg-6 col-12">
                      <InputFormItem
                        name="body"
                        label={i18n('entities.notification.fields.body')}      
                      />
                    </div>
                    <div className="col-lg-6 col-12">
                      <InputFormItem
                        name="targetId"
                        label={i18n('entities.notification.fields.targetId')}      
                      />
                    </div>
                    <div className="col-lg-6 col-12">
                      <UserAutocompleteFormItem  
                        name="whoCreatedTheNotification"
                        label={i18n('entities.notification.fields.whoCreatedTheNotification')}        
                      />
                    </div>
                    <div className="col-lg-6 col-12">
                      <SelectFormItem
                        name="deliveryStatus"
                        label={i18n('entities.notification.fields.deliveryStatus')}
                        options={notificationEnumerators.deliveryStatus.map(
                          (value) => ({
                            value,
                            label: i18n(
                              `entities.notification.enumerators.deliveryStatus.${value}`,
                            ),
                          }),
                        )}
                      />
                    </div>
                    <div className="col-lg-6 col-12">
                      <SelectFormItem
                        name="readStatus"
                        label={i18n('entities.notification.fields.readStatus')}
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

export default NotificationListFilter;