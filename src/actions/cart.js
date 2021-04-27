export const ADD_ARTICLE_TO_CART = 'ADD_ARTICLE_TO_CART';
export const DELETE_ARTICLE_FROM_CART = 'DELETE_ARTICLE_FROM_CART';
export const CLOSE_DIALOG_BOX = 'CLOSE_DIALOG_BOX';
export const OPEN_DIALOG_BOX = 'OPEN_DIALOG_BOX';

export const addArticleToCart = (payload) => ({
  type: ADD_ARTICLE_TO_CART,
  payload,
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

