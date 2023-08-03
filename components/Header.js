import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
    return (
        <header className='p-5 bg-[#0071dc] fixed top-0 left-0 right-0 m-auto h-[72px]'>
            <div className='max-w-screen-xl mx-auto'>
                <div className='flex'>
                    <div className='mr-4'>
                        <Link href='/'>
                            <Image
                                src="/images/shopping-white-logo.png" // Route of the image file
                                height={32} // Desired size with correct aspect ratio
                                width={130} // Desired size with correct aspect ratio
                                alt="Shopping logo"
                                priority={true}
                            />
                        </Link>
                    </div>
                    <nav>
                        <ul className='flex'>
                            <li className='mr-2'>
                                <Link href="/inventory" className="text-white text-lg">
                                    Inventory
                                </Link>
                            </li>
                            <li className='mr-2'>
                                <Link href="/invoice" className="text-white text-lg">
                                    Invoice
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>        
    );
};

export default Navbar;