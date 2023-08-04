import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
    return (  
        <nav class="px-5 bg-[#0071dc] fixed top-0 left-0 right-0 m-auto z-10">
            <div class="max-w-screen-xl mx-auto">
                <div class="relative flex h-16 items-center justify-between">
                    <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">

                    <button type="button" class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                        <span class="absolute -inset-0.5"></span>
                        <span class="sr-only">Open main menu</span>

                        <svg class="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    
                        <svg class="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                    </div>
                    <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div class="flex flex-shrink-0 items-center">
                            <Link href='/'>
                                <Image
                                    src="/images/shopping-white-logo.png" // Route of the image file
                                    height={33} // Desired size with correct aspect ratio
                                    width={145} // Desired size with correct aspect ratio
                                    alt="Shopping logo"
                                    priority={true}
                                />
                            </Link>
                        </div>
                        <div class="hidden sm:ml-6 sm:block">
                            <div class="flex space-x-4">
                                <Link href="/inventory" className="text-white rounded-md px-3 py-2 text-sm font-medium">
                                    Inventory
                                </Link>
                                <Link href="/invoice" className="text-gray-300 transition hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                                    Invoice
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className='flex-none ml-auto items-center justify-center sm:items-stretch sm:justify-start'>
                        <Link href='/cart' className='relative'>
                            <Image
                                src="/images/shopping-cart.png" // Route of the image file
                                height={30} // Desired size with correct aspect ratio
                                width={30} // Desired size with correct aspect ratio
                                alt="Shopping cart"
                                priority={true}
                            />
                            <span class="absolute top-[-8px] right-[-13px] h-auto w-auto py-0.5 inline-block rounded-full bg-white text-sm leading-4 min-w-[1.3rem] text-center">
                                <span class="">1</span>
                            </span>
                        </Link>
                    </div>
                </div>
                </div>
            
                <div class="sm:hidden" id="mobile-menu">
                <div class="space-y-1 px-2 pb-3 pt-2">
                    <Link href="/inventory" className="bg-[#214d7c] text-white block rounded-md px-3 py-2 text-base font-medium">
                        Inventory
                    </Link>
                    <Link href="/invoice" className="text-gray-300 transition hover:bg-[#214d7c] hover:text-white block rounded-md px-3 py-2 text-base font-medium">
                        Invoice
                    </Link>                    
                </div>
            </div>
        </nav>
          
    );
};

export default Navbar;