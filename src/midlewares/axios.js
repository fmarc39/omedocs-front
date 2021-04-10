/* importer actions ici */

export default (store) => (next) => (action) => {
  switch (action.type) {
    default:
      return next(action);
  }
};

// Ne pas oublier de return next(action) à chaque case
