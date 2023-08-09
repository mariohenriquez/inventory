import Layout from "../../components/layout"
import Image from "next/image";
import Link from "next/link";
import { useSelector, useDispatch } from 'react-redux';
import { incrementQuantity, decrementQuantity, removeFromCart} from '../../redux/cart.slice';

const CartWrapper = ({ data = [] }) => {
    const isEmpty = data.length === 0;
    // const cart = useSelector((state) => state.cart);
    return isEmpty ? (
            <p className="text-amber-700  px-4 rounded-md py-2 max-w-max inline-flex items-center space-x-1">
                <span>Your cart is empty</span>
            </p>
        ) : (
            <ul role="list" className="divide-y divide-gray-200">
                <li className="flex py-6">
                    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                    <Image src="/images/diapers/diaper-03.webp" alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt." className="h-full w-full object-cover object-center" width={300} height={200}></Image>
                    </div>

                    <div className="ml-4 flex flex-1 flex-col">
                    <div>
                        <div className="flex justify-between text-base font-medium text-gray-900">
                        <h3>
                            <Link href="#">Throwback Hip Bag</Link>
                        </h3>
                        <p className="ml-4">$90.00</p>
                        </div>
                        <p className="mt-1 text-sm text-gray-500">Salmon</p>
                    </div>
                    <div className="flex flex-1 items-end justify-between text-sm">
                        <p className="text-gray-500">Qty 1</p>

                        <div className="flex">
                        <button type="button" className="font-medium text-[#0071dc] transition hover:opacity-70">Remove</button>
                        </div>
                    </div>
                    </div>
                </li>
                <li className="flex py-6">
                    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                    <Image src="/images/diapers/diaper-10.webp" alt="Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch." className="h-full w-full object-cover object-center" width={300} height={200}></Image>
                    </div>

                    <div className="ml-4 flex flex-1 flex-col">
                    <div>
                        <div className="flex justify-between text-base font-medium text-gray-900">
                        <h3>
                            <Link href="#">Medium Stuff Satchel</Link>
                        </h3>
                        <p className="ml-4">$32.00</p>
                        </div>
                        <p className="mt-1 text-sm text-gray-500">Blue</p>
                    </div>
                    <div className="flex flex-1 items-end justify-between text-sm">
                        <p className="text-gray-500">Qty 1</p>

                        <div className="flex">
                        <button type="button" className="font-medium text-[#0071dc] transition hover:opacity-70">Remove</button>
                        </div>
                    </div>
                    </div>
                </li>
            </ul>
    )
}

export default function Cart() {
    // Extracting cart state from redux store 
//   const cart = useSelector();

  // Reference to the dispatch function from redux store
  const dispatch = useDispatch();

  const getTotalPrice = () => {
    // return cart.reduce(
    //   (accumulator, item) => accumulator + item.quantity * item.price,
    //   0
    // );
  };

    return (
        <Layout>
            <h1 className="text-3xl">Cart</h1>
            <div className="mt-8">
                <div className="flow-root">
                  <CartWrapper></CartWrapper>
                  <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                    <div className="flex justify-between text-base font-medium text-gray-900">

                            {/* {cart.map((item) => (
                                <>
                                    <Image src={item.image} height={90} width={65} alt="Img"></Image>
                                    <p>{item.product}</p>
                                    <p>$ {item.price}</p>
                                    <p>{item.quantity}</p>
                                    <p>$ {item.quantity * item.price}</p>
                                    <button onClick={() => dispatch(incrementQuantity(item.id))}>
                                        +
                                    </button>
                                    <button onClick={() => dispatch(decrementQuantity(item.id))}>
                                        -
                                    </button>
                                    <button onClick={() => dispatch(removeFromCart(item.id))}>
                                        x
                                    </button>
                                </>
                            ))}
                             */}
                            <p>Total</p>
                            <p>$ {getTotalPrice()}</p>

                    </div>
                    <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                    <div className="mt-6">
                        <a href="#" className="flex items-center justify-center rounded-md border border-transparent bg-[#0071dc] px-6 py-3 text-base font-medium text-white shadow-sm transition hover:opacity-80">Checkout</a>
                    </div>
                    <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                        <p>
                        or <Link href="/inventory" className="font-medium text-[#0071dc] transition hover:opacity-70">
                            Continue Shopping
                            <span aria-hidden="true"> &rarr;</span>
                        </Link>
                        </p>
                    </div>
                    </div>
                </div>
              </div>
        </Layout>
    )
}
