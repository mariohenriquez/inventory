import Layout from "../../components/layout"
import Image from "next/image";
import Link from "next/link";
import { useSelector, useDispatch } from 'react-redux';
import { incrementQuantity, decrementQuantity, removeFromCart} from '../../redux/cart.slice';

export default function Cart() {
    
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const getTotalPrice = () => {
        return cart.reduce(
        (accumulator, item) => accumulator + item.quantity * item.price,
        0
        );
    };

    return (
        <Layout>
            <div className="p-5">
                <h1 className="text-3xl">Cart</h1>
                <div className="mt-8">
                    <div className="flow-root">
                        {cart.length === 0 ? (
                            <p className="text-amber-700  px-4 rounded-md py-2 max-w-max inline-flex items-center space-x-1">
                                <span>Your cart is empty</span>
                            </p>
                        ) : (
                            <ul role="list" className="divide-y divide-gray-200">
                                {cart.map((item) => (
                                    <>
                                        <li className="flex py-6">
                                            <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                                <Image src={item.image} alt={item.title} className="h-full w-full object-cover object-center" width={300} height={200}></Image>
                                            </div>

                                            <div className="ml-4 flex flex-1 flex-col">
                                                <div>
                                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                                        <h3>
                                                            <Link href={`/inventory/${item.id}`}>{item.title}</Link>
                                                        </h3>
                                                        <p className="ml-4">${(item.quantity * item.price).toFixed(2)}</p>
                                                    </div>
                                                    <p className="mt-1 mb-3 text-sm text-gray-500">{item.make}</p>
                                                </div>
                                                <div className="flex justify-between">
                                                    <div className="flex text-md justify-between p-1 rounded-full bg-white text-black w-[100px] border border-[#ccc]">
                                                        <button className="text-gray-500 w-6 h-6 pb-0.5 justify-center items-center flex rounded-2xl pointer transition hover:bg-[#0071dc] hover:text-white" onClick={() => dispatch(decrementQuantity(item.id))}>-</button>
                                                        <p className="flex items-center mx-auto text-gray-500">{item.quantity}</p>
                                                        <button className="text-gray-500 w-6 h-6 pb-0.5 justify-center items-center flex rounded-2xl pointer transition hover:bg-[#0071dc] hover:text-white" onClick={() => dispatch(incrementQuantity(item.id))}>+</button>
                                                    </div>
                                                    <div className="flex">
                                                        <button onClick={() => dispatch(removeFromCart(item.id))} type="button" className="font-medium text-[#0071dc] transition hover:opacity-70">Remove</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </>

                                ))} 
                            </ul>
                        )}
                        <div className="border-t border-gray-200 py-6">
                            <div className="flex justify-between text-base font-medium text-gray-900">
                                <p>Total</p>
                                <p>$ {getTotalPrice().toFixed(2)}</p>
                            </div>
                            <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                            <div className="mt-6">
                                <Link href="/checkout" className={`${cart.length === 0 ? 'cursor-not-allowed opacity-75 pointer-events-none' : ''} flex items-center justify-center rounded-md border border-transparent bg-[#0071dc] px-6 py-3 text-base font-medium text-white shadow-sm transition hover:opacity-80`}>Checkout</Link>
                            </div>
                            <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                                <p>or <Link href="/inventory" className="font-medium text-[#0071dc] transition hover:opacity-70">Continue Shopping <span aria-hidden="true"> &rarr;</span></Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
