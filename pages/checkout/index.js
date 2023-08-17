import Layout from "../../components/layout"
import Image from "next/image";
import Link from "next/link";
import { useSelector, useDispatch } from 'react-redux';
import { useState } from "react";
// import {}

export default function Checkout() {
    
    const cart = useSelector((state) => state.cart);

    const getSubtotalPrice = () => {
        return cart.reduce(
        (accumulator, item) => accumulator + item.quantity * item.price,
        0
        );
    };

    const getTaxes = () => {

        let taxRate = 7;
        let taxDue = 0;
        let finalPrice = 0;
        taxDue = getSubtotalPrice() * (taxRate / 100);
        finalPrice = getSubtotalPrice() * (1 + (taxRate / 100));
        return finalPrice
    }

    const getTotalPrice = () => {
        return getTaxes() + getSubtotalPrice();
    }

    const [email, setEmail] = useState("");
    const postPay = async () => {
        console.log(email)
        fetch('/api/checkout', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email
            })
        })
    }

    return (
        <Layout>
            <div className="p-5">
                <h1 className="text-3xl">Checkout</h1>
                <div className="flex flex-col lg:flex-row justify-between mt-8 rounded-md border">
                    <div className="flex-initial w-full lg:w-3/5 order-last lg:order-none p-3 lg:p-6 px-4 lg:px-8">
                        <div className="space-y-6">
                            <div className="pb-5">
                                <h2 className="text-base font-semibold leading-7 text-gray-900">Contact Information</h2>
                                <p className="hidden mt-1 text-sm leading-6 text-gray-600">Use a permanent address where you can receive mail.</p>

                                <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                    <div className="col-span-full">
                                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                                        <div className="mt-2">
                                            <input 
                                                id="email" 
                                                name="email" 
                                                type="email" 
                                                autoComplete="email" 
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" 
                                                onChange={(e) => setEmail(e.target.value)}
                                                />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="pb-5">
                                <h2 className="text-base font-semibold leading-7 text-gray-900">Shipping Information</h2>
                                <p className="hidden mt-1 text-sm leading-6 text-gray-600">Use a permanent address where you can receive mail.</p>

                                <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                    <div className="sm:col-span-3">
                                    <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">First name</label>
                                    <div className="mt-2">
                                        <input type="text" name="first-name" id="first-name" autoComplete="given-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                    </div>
                                    </div>

                                    <div className="sm:col-span-3">
                                    <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">Last name</label>
                                    <div className="mt-2">
                                        <input type="text" name="last-name" id="last-name" autoComplete="family-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                    </div>
                                    </div>

                                    <div className="sm:col-span-3">
                                        <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">Street address</label>
                                        <div className="mt-2">
                                            <input type="text" name="street-address" id="street-address" autoComplete="street-address" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                        </div>
                                    </div>

                                    <div className="sm:col-span-3">
                                    <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">Phone number</label>
                                    <div className="mt-2">
                                        <input type="tel" name="phone-number" id="phone-number" autoComplete="phone-number" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                    </div>
                                    </div>

                                    <div className="sm:col-span-3 sm:col-start-1">
                                    <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">Country</label>
                                    <div className="mt-2">
                                        <select id="country" name="country" autoComplete="country-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                                        <option>United States</option>
                                        <option>Canada</option>
                                        <option>Mexico</option>
                                        </select>
                                    </div>
                                    </div>

                                    <div className="sm:col-span-3">
                                    <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">City</label>
                                    <div className="mt-2">
                                        <input type="text" name="city" id="city" autoComplete="address-level2" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                    </div>
                                    </div>

                                    <div className="sm:col-span-3 sm:col-start-1">
                                    <label htmlFor="region" className="block text-sm font-medium leading-6 text-gray-900">State</label>
                                    <div className="mt-2">
                                        <input type="text" name="region" id="region" autoComplete="address-level1" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                    </div>
                                    </div>

                                    <div className="sm:col-span-3">
                                    <label htmlFor="postal-code" className="block text-sm font-medium leading-6 text-gray-900">Postal code</label>
                                    <div className="mt-2">
                                        <input type="text" name="postal-code" id="postal-code" autoComplete="postal-code" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                    </div>
                                    </div>
                                </div>
                            </div>

                            <div className="pb-5">
                                <h2 className="text-base font-semibold leading-7 text-gray-900">Payment details</h2>
                                <p className="hidden mt-1 text-sm leading-6 text-gray-600">Use a permanent address where you can receive mail.</p>

                                <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                    <div className="col-span-full">
                                        <label htmlFor="card-number" className="block text-sm font-medium leading-6 text-gray-900">Card number</label>
                                        <div className="mt-2">
                                            <input id="card-number" name="card-number" type="number" autoComplete="card-number" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                        </div>
                                    </div>
                                    <div className="sm:col-span-4">
                                        <label htmlFor="expiration-date" className="block text-sm font-medium leading-6 text-gray-900">Expiration date (MM/YY)</label>
                                        <div className="mt-2">
                                            <input id="expiration-date" name="expiration-date" type="text" autoComplete="expiration-date" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                        </div>
                                    </div>
                                    <div className="sm:col-span-2">
                                        <label htmlFor="cvc" className="block text-sm font-medium leading-6 text-gray-900">CVC</label>
                                        <div className="mt-2">
                                            <input id="cvc" name="cvc" type="number" autoComplete="cvc" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-6 flex items-center justify-end gap-x-6">
                            <button onClick={postPay} className="cursor-not-allowed opacity-75 pointer-events-none rounded-md bg-[#0071dc] px-3 py-2 text-sm font-semibold text-white shadow-sm transition hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Pay now</button>
                        </div>
                        <div className="block lg:hidden mt-6 border-t border-gray-200 py-6">
                            <div className="text-base text-gray-900">
                                <div className="flex justify-between font-normal ">
                                    <p>Subtotal</p>
                                    <p>$ {getSubtotalPrice().toFixed(2)}</p>
                                </div>
                                <div className="flex justify-between font-normal ">
                                    <p>Taxes</p>
                                    <p>$ {getTaxes().toFixed(2)}</p>
                                </div>
                                <div className="flex justify-between font-normal ">
                                    <p>Shipping</p>
                                    <p>Free</p>
                                </div>
                                <div className="flex justify-between font-semibold mt-2">
                                    <p>Total</p>
                                    <p>$ {getTotalPrice().toFixed(2)}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex-initial w-full lg:w-2/5 order-first lg:order-none bg-[#f9fafb] p-3 lg:p-6 px-4 lg:px-8">
                        <div className="flow-root">
                        <h2 className="text-base font-semibold leading-7 text-gray-900">Order Summary</h2>
                            {cart.length === 0 ? (
                                <p className="text-amber-700  px-4 rounded-md py-2 max-w-max inline-flex items-center space-x-1">
                                    <span>Your cart is empty</span>
                                </p>
                            ) : (
                                <ul role="list" className="divide-y divide-gray-200">
                                    {cart.map((item) => (
                                        <>
                                            <li className="flex py-4">
                                                <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                                    <Image src={item.image} alt={item.title} className="h-full w-full object-cover object-center" width={300} height={200}></Image>
                                                </div>

                                                <div className="ml-3 flex flex-1 flex-col">
                                                    <div>
                                                        <div className="flex justify-between text-sm font-medium text-gray-900">
                                                            <h3>
                                                                <Link href={`/inventory/${item.id}`}>{item.title}</Link>
                                                            </h3>
                                                            <p className="ml-4">${(item.quantity * item.price).toFixed(2)}</p>
                                                        </div>
                                                        <p className="mt-1 text-xs text-gray-500">{item.make}</p>
                                                    </div>

                                                </div>
                                            </li>
                                        </>

                                    ))} 
                                </ul>
                            )}
                            <div className="hidden lg:block border-t border-gray-200 py-6">
                                <div className="text-sm text-gray-900">
                                    <div className="flex justify-between font-normal ">
                                        <p>Subtotal</p>
                                        <p>$ {getSubtotalPrice().toFixed(2)}</p>
                                    </div>
                                    <div className="flex justify-between font-normal ">
                                        <p>Taxes</p>
                                        <p>$ {getTaxes().toFixed(2)}</p>
                                    </div>
                                    <div className="flex justify-between font-normal ">
                                        <p>Shipping</p>
                                        <p>Free</p>
                                    </div>
                                    <div className="flex justify-between font-semibold text-base mt-2">
                                        <p>Total</p>
                                        <p>$ {getTotalPrice().toFixed(2)}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>              
            </div>
        </Layout>
    )
}
