import { createSelector } from 'reselect';

const selectRaw = (state) => state.representanteEmpresa.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const representanteEmpresaViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default representanteEmpresaViewSelectors;
