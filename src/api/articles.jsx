import axios from 'axios';
import helpers from '../helpers/helpers';

const getArticleCategory = async (articleId) => {
  try {
    const url = `https://fe-tech-test-api-dev-416879028044.asia-southeast2.run.app/api/v1/articles/${articleId}`;
    const res = await axios.get(url);

    return res.data.data.categories
      ? res.data.data.categories
      : [{ id: 'uncategorized', name: 'Uncategorized' }];
  } catch (error) {
    return error;
  }
};

const getArticleDetail = async (articleId) => {
  try {
    const url = `https://fe-tech-test-api-dev-416879028044.asia-southeast2.run.app/api/v1/articles/${articleId}`;
    const res = await axios.get(url);
    const resultData = res.data.data;
    const extras = resultData.categories
      ? helpers.findCategoryExtrasById(resultData.categories[0].id)
      : null;
    const finalResult = {
      extras,
      ...resultData,
      categories: resultData.categories || [{ id: 'uncategorized', name: 'Uncategorized' }],
    };

    return finalResult;
  } catch (error) {
    return error;
  }
};

const getAllArticles = async (sort = 'desc') => {
  try {
    const articlesTemp = [];
    let page = 1;

    while (page <= 13) {
      articlesTemp.push(axios.get(`https://fe-tech-test-api-dev-416879028044.asia-southeast2.run.app/api/v1/articles?sort${sort}`, {
        params: {
          page,
          limit: 12,
        },
      }));
      page += 1;
    }

    const responses = await Promise.all(articlesTemp);
    const data = responses.map((response) => response.data.data.data).flat();

    const dataWithCategories = Promise.all(
      data.map(async (item) => ({
        ...item,
        categories: await getArticleCategory(item.id),
      })),
    );

    return dataWithCategories;
  } catch (error) {
    return error;
  }
};

export default {
  getArticleCategory,
  getArticleDetail,
  getAllArticles,
};
