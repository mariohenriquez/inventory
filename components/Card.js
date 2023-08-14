import Link from 'next/link';
import Image from 'next/image';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cart.slice';


const Card = ({ product }) => {
  console.log('Card', product)
  const dispatch = useDispatch();

  return (
    <div>
      <Link href={`/inventory/${product.id}`} className='group'>
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
          <Image
              src={product.image}
              alt={product.title}
              height={200}
              width={302}
              className="h-full w-full object-cover object-center group-hover:opacity-75"
            />
        </div>
        <h3 className="mt-4 text-sm text-gray-700">{product.title ?? ''}</h3>
        <p className="mt-1 text-lg font-medium text-gray-900">
          {new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            }).format(product.price ?? 0)}{' '}
        </p>
      </Link>
      <button onClick={() => dispatch(addToCart(product))} className="mt-2 flex w-full items-center justify-center rounded-md border border-transparent bg-[#0071dc] px-8 py-3 text-base font-medium text-white transition hover:opacity-75 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Add to Cart</button>
    </div>
  
)}

export default Card;
