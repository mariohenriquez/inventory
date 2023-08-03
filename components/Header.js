import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
    return (
        <header className='p-5 bg-[#0071dc] fixed top-0 left-0 right-0 m-auto h-20'>
            <div className='max-w-screen-xl mx-auto'>
                <div className='flex'>
                    <div className='mr-4'>
                        <Link href='/'>
                            <Image
                                src="/images/shopping-white-logo.png" // Route of the image file
                                height={40} // Desired size with correct aspect ratio
                                width={175} // Desired size with correct aspect ratio
                                alt="Shopping logo"
                                priority={true}
                            />
                        </Link>
                    </div>
                    <nav className='flex items-center ml-5'>
                        <ul className='flex space-x-4'>
                            <li className='mr-2 '>
                                <Link href="/inventory" className="text-white text-lg">
                                    Inventory
                                </Link>
                            </li>
                            <li className='mr-2 '>
                                <Link href="/invoice" className="text-white text-lg">
                                    Invoice
                                </Link>
                            </li>
                        </ul>
                    </nav>

                    <div className='flex-none ml-auto'>
                        <Link href='/cart'>
                            <Image
                                src="/images/shopping-cart.png" // Route of the image file
                                height={40} // Desired size with correct aspect ratio
                                width={40} // Desired size with correct aspect ratio
                                alt="Shopping cart"
                                priority={true}
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </header>        
    );
};

export default Navbar;