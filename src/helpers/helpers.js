import constants from '../constants/constants';

const dateConverter = (date) => {
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'Asia/Jakarta',
  };

  const dateFormat = new Intl.DateTimeFormat('en-US', options);
  const converted = dateFormat.format(new Date(date));

  return converted;
};

const findCategoryExtrasById = (categoryId) => {
  if (categoryId === null) { return null; }
  const { categoriesExtras } = constants;
  const extras = categoriesExtras.find((extra) => extra.id === categoryId);

  return extras;
};

export default {
  dateConverter,
  findCategoryExtrasById,
};
