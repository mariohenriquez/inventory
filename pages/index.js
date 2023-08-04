import Layout from '../components/layout';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
      <Layout>
        <div className="p-5">
          <h1 className="text-3xl">Main Content</h1>
          <div className=" px-4 sm:px-6 lg:px-8">
            <div className="py-16 sm:py-24 lg:py-32">
              <h2 className="text-2xl font-bold text-gray-900">Collections</h2>

              <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
                <div className="group relative">
                  <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                    <Image 
                      src="/images/diapers/diaper-10.webp" 
                      alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug." 
                      className='h-full w-full object-cover object-center'
                      width={300}
                      height={200}>
                    </Image>
                  </div>
                  <h3 className="mt-6 text-sm text-gray-500">
                    <Link href="/inventory">
                      <span className="absolute inset-0"></span>
                      Diapers
                    </Link>
                  </h3>
                  <p className="text-base font-semibold text-gray-900">Inventory</p>
                </div>
                <div className="group relative">
                  <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                    <Image 
                      src="https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg" 
                      alt="Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant." 
                      className='h-full w-full object-cover object-center'
                      width={300}
                      height={200}>
                    </Image>
                  </div>
                  <h3 className="mt-6 text-sm text-gray-500">
                    <a href="#">
                      <span className="absolute inset-0"></span>
                      Self-Improvement
                    </a>
                  </h3>
                  <p className="text-base font-semibold text-gray-900">Journals and note-taking</p>
                </div>
                <div className="group relative">
                  <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                    <Image 
                      src="https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg" 
                      alt="Collection of four insulated travel bottles on wooden shelf." 
                      className='h-full w-full object-cover object-center'
                      width={300}
                      height={200}>
                    </Image>
                  </div>
                  <h3 className="mt-6 text-sm text-gray-500">
                    <a href="#">
                      <span className="absolute inset-0"></span>
                      Travel
                    </a>
                  </h3>
                  <p className="text-base font-semibold text-gray-900">Daily commute essentials</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>

  )
}
