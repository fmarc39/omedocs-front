export const ADD_ARTICLE_TO_CART = 'ADD_ARTICLE_TO_CART';
export const DELETE_ARTICLE_FROM_CART = 'DELETE_ARTICLE_FROM_CART';

export const addArticleToCart = (payload) => ({
  type: ADD_ARTICLE_TO_CART,
  payload,
});

export const deleteArticleFromCart = (articleId) => ({
  type: DELETE_ARTICLE_FROM_CART,
  articleId,
});
