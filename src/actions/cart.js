export const ADD_ARTICLE_TO_CART = 'ADD_ARTICLE_TO_CART';
export const DELETE_ARTICLE_FROM_CART = 'DELETE_ARTICLE_FROM_CART';
export const CLOSE_DIALOG_BOX = 'CLOSE_DIALOG_BOX';
export const OPEN_DIALOG_BOX = 'OPEN_DIALOG_BOX';
export const INCREASES_ARTICLE_QUANTITY = 'INCREASES_ARTICLE_QUANTITY';
export const DECREASES_ARTICLE_QUANTITY = 'DECREASES_ARTICLE_QUANTITY';

export const addArticleToCart = (payload, pharmacyId) => ({
  type: ADD_ARTICLE_TO_CART,
  payload,
  pharmacyId,
});

export const deleteArticleFromCart = (articleId) => ({
  type: DELETE_ARTICLE_FROM_CART,
  articleId,
});

export const closeDialogBox = () => ({
  type: CLOSE_DIALOG_BOX,
});

export const openDialogBoxAction = () => ({
  type: OPEN_DIALOG_BOX,
});

export const increasesArticleQuantity = (articleId) => ({
  type: INCREASES_ARTICLE_QUANTITY,
  articleId,
});

export const descreasesArticleQuantity = (articleId) => ({
  type: DECREASES_ARTICLE_QUANTITY,
  articleId,
});
