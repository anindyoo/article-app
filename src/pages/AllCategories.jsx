import { useEffect } from 'react';
import useCategoryStore from '../store/categoryStore';
import helpers from '../helpers/helpers';
import CategoryCard from '../components/GridCard/CategoryCard';
import constants from '../constants/constants';

const AllCategories = () => {
  const { categoriesList, categoriesLoading } = useCategoryStore();
  const { uncategorizedExtra } = constants;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="
    ALL-CATEGORIES-PAGE
    SECTION-CENTER
    flex flex-col gap-12
    min-h-screen"
    >
      <section className="TITLE-SECTION">
        <h1 className="text-5xl font-bold">All Categories</h1>
      </section>
      {!categoriesLoading ? (
        <div className="grid grid-cols-3 gap-x-10 gap-y-12">
          {categoriesList.map((category) => {
            const extras = helpers.findCategoryExtrasById(category?.id);

            return (
              <CategoryCard
                key={category.id}
                id={category.id}
                name={category.name}
                icon={extras.icon}
                color={extras.color}
              />
            );
          })}
          <CategoryCard
            id="uncategorized"
            name="Uncategorized"
            icon={uncategorizedExtra.icon}
            color={uncategorizedExtra.color}
          />
        </div>
      ) : 'Loading...'}
    </div>
  );
};

export default AllCategories;
