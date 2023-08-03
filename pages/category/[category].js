import { useRouter } from 'next/router';
import ProductCard from '../../components/ProductCard';
import { getProductsByCategory } from '../../api/inventory/[category]';

const CategoryPage = ({ products }) => {
  const router = useRouter();
  return (
    <div className=''>
      <h1 className=''>Results for {router.query.make}</h1>
      <div className=''>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;

export async function getServerSideProps(ctx) {
  const make = ctx.query.make;
  const products = await getProductsByCategory(make);
  return { props: { products } };
}