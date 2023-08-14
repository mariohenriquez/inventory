import PropTypes from 'prop-types';
import Card from '../components/Card';
import { getProductsByID } from '../api/inventory/[id]';

const Grid = ({ data = [] }) => {
  const isEmpty = data.length === 0;

  return isEmpty ? (
    <p className="text-amber-700 bg-amber-100 px-4 rounded-md py-2 max-w-max inline-flex items-center space-x-1">
      <span>Unfortunately, there is nothing to display yet.</span>
    </p>
  ) : (
   
    <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
      {data.map(data => (
        <Card key={data.id} product={data} />
      ))}
    </div>
  );
};

Grid.propTypes = {
  data: PropTypes.array,
};

export default Grid;

export async function getStaticProps(ctx) {
  const id = ctx.query.id;
  const products = await getProductsByID(id);
  return { props: { products } };
}