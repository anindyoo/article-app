import axios from 'axios';
import helpers from '../helpers/helpers';

const getArticleCategory = async (articleId) => {
  try {
    const url = `https://fe-tech-test-api-dev-416879028044.asia-southeast2.run.app/api/v1/articles/${articleId}`;
    const res = await axios.get(url);

    return res.data.data.categories ? res.data.data.categories[0] : null;
  } catch (error) {
    return error;
  }
};

const getArticles = async () => {
  const page = 1;
  const limit = 12;

  try {
    const url = `https://fe-tech-test-api-dev-416879028044.asia-southeast2.run.app/api/v1/articles?page=${page}&limit=${limit}`;
    const res = await axios.get(url);
    const resultData = res.data.data.data;

    const articlesWithCategories = await Promise.all(
      resultData.map(async (item) => ({
        ...item,
        category: await getArticleCategory(item.id),
      })),
    );

    return articlesWithCategories;
  } catch (error) {
    return error;
  }
};

const getArtilceDetail = async (articleId) => {
  try {
    const url = `https://fe-tech-test-api-dev-416879028044.asia-southeast2.run.app/api/v1/articles/${articleId}`;
    const res = await axios.get(url);
    const resultData = res.data.data;
    const extras = helpers.findCategoryExtrasById(resultData.categories[0].id);
    const finalResult = {
      ...resultData, extras,
    };

    return finalResult;
  } catch (error) {
    return error;
  }
};

export default {
  getArticles,
  getArticleCategory,
  getArtilceDetail,
};
