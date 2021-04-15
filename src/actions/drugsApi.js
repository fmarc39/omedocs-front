// actions list

export const CLOSE_POP_LIST_API = 'CLOSE_POP_LIST_API';
export const OPEN_POP_LIST_API = 'OPEN_POP_LIST_API';
export const APPLY_INFO_DRUGS_API = 'APPLY_INFO_DRUGS_API';

// action creators

export const closePopListApi = () => ({
  type: CLOSE_POP_LIST_API,
});

export const openPopListApi = () => ({
  type: OPEN_POP_LIST_API,
});

export const applyInfoDrugsApi = (name, cis, pathology) => ({
  type: APPLY_INFO_DRUGS_API,
  name,
  cis,
  pathology,
});
