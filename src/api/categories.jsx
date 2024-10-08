import axios from 'axios';

const getCategories = async () => {
  try {
    const url = 'https://fe-tech-test-api-dev-416879028044.asia-southeast2.run.app/api/v1/categories';
    const res = await axios.get(url);
    return res.data.data;
  } catch (error) {
    return error;
  }
};

export default { getCategories };
