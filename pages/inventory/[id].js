import Layout from '../../components/layout';
import Link from 'next/link';
import Image from 'next/image';
import { getProductsByID } from '../../api/inventory/[id]';

const Product = ({ product }) => {
  return (
    <Layout>
        <div className='p-5'>
            <div className=''>
                <Link href="/inventory" className='text-[#000] text-sm underline inline-block'>Back</Link>
                <h1 className='text-3xl mb-5'>{product[0].title}</h1>
            </div>
            <div className="block w-full">
                <div className="overflow-hidden aspect-w-16 aspect-h-9">
                    <Image
                        src={product[0].image}
                        alt={product[0].title}
                        height={300}
                        width={402}
                        className="hover:opacity-80 transition"
                    />
                </div>

                <div className="mt-2 text-xl text-gray-700 font-semibold leading-tight">
                    {product[0].title ?? ''}
                </div>
                <p className="mt-2 text-gray-500">
                    {product[0].description}
                </p>
                <p className="mt-2 text-gray-500 font-semibold">
                    {new Intl.NumberFormat('en-US', {
                    style: 'currency',
                    currency: 'USD',
                    }).format(product[0].price ?? 0)}{' '}
                </p>
                <button class="bg-[#0071dc] mt-2 px-4 py-2 font-semibold text-sm text-white rounded-full shadow-sm" type="button" aria-label="Add to cart ">
                    <span>Add to cart</span>
                </button>
            </div>
        </div>
    </Layout>
  );
};

export default Product;

export async function getServerSideProps(ctx) {
  const id = ctx.query.id;
  const product = await getProductsByID(id);
  return { props: { product } };
}