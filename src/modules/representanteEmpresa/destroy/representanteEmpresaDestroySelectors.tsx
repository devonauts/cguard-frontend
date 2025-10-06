import { createSelector } from 'reselect';

const selectRaw = (state) => state.representanteEmpresa.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const representanteEmpresaDestroySelectors = {
  selectLoading,
};

export default representanteEmpresaDestroySelectors;
