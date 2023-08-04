import Layout from '../../components/layout';
import Link from 'next/link';
import Image from 'next/image';
import { getProductsByID } from '../../api/inventory/[id]';

const Product = ({ product }) => {
  return (
    <Layout>
                


<div className="bg-white">
  <div className="p-5">
    <nav aria-label="Breadcrumb">
      <ol role="list" className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <li>
          <div className="flex items-center">
            <Link href="/inventory" className='mr-2 text-sm font-medium text-gray-900'>Inventory</Link>
            <svg width="16" height="20" viewBox="0 0 16 20" fill="currentColor" aria-hidden="true" className="h-5 w-4 text-gray-300">
              <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
            </svg>
          </div>
        </li>
        <li className="text-sm">
          <a href="#" aria-current="page" className="font-medium text-gray-500 hover:text-gray-600">{product[0].title}</a>
        </li>
      </ol>
    </nav>
    
    <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
      <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
        <Image
                        src={product[0].image}
                        alt={product[0].title}
                        height={300}
                        width={402}
                        className="hover:opacity-80 transition"
                    />
      </div>
      <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
        <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
          <Image
                        src={product[0].image}
                        alt={product[0].title}
                        height={300}
                        width={402}
                        className="hover:opacity-80 transition"
                    />
        </div>
        <div className="hidden aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
          <Image
                        src={product[0].image}
                        alt={product[0].title}
                        height={300}
                        width={402}
                        className="hover:opacity-80 transition"
                    />
        </div>
      </div>
      <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
        <Image
                        src={product[0].image}
                        alt={product[0].title}
                        height={300}
                        width={402}
                        className="hover:opacity-80 transition"
                    />
      </div>
    </div>

    
    <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
      <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
        <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{product[0].title}</h1>
      </div>

      <div className="mt-4 lg:row-span-3 lg:mt-0">
        <h2 className="sr-only">Product information</h2>
        <p className="text-3xl tracking-tight text-gray-900">
        {new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
          }).format(product[0].price ?? 0)}{' '}
        </p>

        
        <div className="mt-6">
          <h3 className="sr-only">Reviews</h3>
          <div className="flex items-center">
            <div className="flex items-center">
              
              <svg className="text-gray-900 h-5 w-5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
              </svg>
              <svg className="text-gray-900 h-5 w-5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
              </svg>
              <svg className="text-gray-900 h-5 w-5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
              </svg>
              <svg className="text-gray-900 h-5 w-5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
              </svg>
              <svg className="text-gray-200 h-5 w-5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
              </svg>
            </div>
            <p className="sr-only">4 out of 5 stars</p>
            <a href="#" className="ml-3 text-sm font-medium text-[#0071dc] transition hover:opacity-70">117 reviews</a>
          </div>
        </div>

        <form className="mt-10">
          
          <div className='hidden'>
            <h3 className="text-sm font-medium text-gray-900">Color</h3>

            <fieldset className="mt-4">
              <legend className="sr-only">Choose a color</legend>
              <div className="flex items-center space-x-3">
                
              
                <label className="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none ring-gray-400">
                  
                  <span id="color-choice-0-label" className="sr-only">White</span>
                  <span aria-hidden="true" className="h-8 w-8 bg-white rounded-full border border-black border-opacity-10"></span>
                </label>
                
               
                <label className="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none ring-gray-400">
                  
                  <span id="color-choice-1-label" className="sr-only">Gray</span>
                  <span aria-hidden="true" className="h-8 w-8 bg-gray-200 rounded-full border border-black border-opacity-10"></span>
                </label>
                
               
                <label className="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none ring-gray-900">
                  
                  <span id="color-choice-2-label" className="sr-only">Black</span>
                  <span aria-hidden="true" className="h-8 w-8 bg-gray-900 rounded-full border border-black border-opacity-10"></span>
                </label>
              </div>
            </fieldset>
          </div>

          
          <div className="mt-10">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium text-gray-900">Diaper Size</h3>
              <a href="#" className="text-sm font-medium text-[#0071dc] transition hover:opacity-70">Size guide</a>
            </div>

            <fieldset className="mt-4">
              <legend className="sr-only">Choose a size</legend>
              <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
                
                <label className="group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 cursor-not-allowed bg-gray-50 text-gray-200">
                  
                  <span id="size-choice-0-label">1</span>
                  <span aria-hidden="true" className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200">
                    <svg className="absolute inset-0 h-full w-full stroke-2 text-gray-200" viewBox="0 0 100 100" preserveAspectRatio="none" stroke="currentColor">
                      <line x1="0" y1="100" x2="100" y2="0" vector-effect="non-scaling-stroke" />
                    </svg>
                  </span>
                </label>
                
                <label className="group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 cursor-pointer bg-white text-gray-900 shadow-sm">
                  
                  <span id="size-choice-1-label">2</span>
                  
               
                  <span className="pointer-events-none absolute -inset-px rounded-md" aria-hidden="true"></span>
                </label>
                
                <label className="group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 cursor-pointer bg-white text-gray-900 shadow-sm">
                  
                  <span id="size-choice-2-label">3</span>
                 
                  <span className="pointer-events-none absolute -inset-px rounded-md" aria-hidden="true"></span>
                </label>

                <label className="group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 cursor-pointer bg-white text-gray-900 shadow-sm">
                  
                  <span id="size-choice-3-label">4</span>
               
                  <span className="pointer-events-none absolute -inset-px rounded-md" aria-hidden="true"></span>
                </label>

                <label className="group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 cursor-pointer bg-white text-gray-900 shadow-sm">
                  
                  <span id="size-choice-4-label">5</span>
                 
                  <span className="pointer-events-none absolute -inset-px rounded-md" aria-hidden="true"></span>
                </label>

                <label className="group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 cursor-pointer bg-white text-gray-900 shadow-sm">
                  
                  <span id="size-choice-5-label">6</span>
                 
                  <span className="pointer-events-none absolute -inset-px rounded-md" aria-hidden="true"></span>
                </label>
              </div>
            </fieldset>
          </div>

          <button type="submit" className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-[#0071dc] px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Add to bag</button>
        </form>
      </div>

      <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">

        <div>
          <h3 className="sr-only">Description</h3>

          <div className="space-y-6">
            <h3 className="text-sm text-gray-600">Product details</h3>
            <p className="text-base text-gray-900">{product[0].description}</p>
          </div>
        </div>

        <div className="hidden mt-10">
          <h3 className="text-sm font-medium text-gray-900">Highlights</h3>

          <div className="mt-4">
            <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
              <li className="text-gray-400"><span className="text-gray-600">Hand cut and sewn locally</span></li>
              <li className="text-gray-400"><span className="text-gray-600">Dyed with our proprietary colors</span></li>
              <li className="text-gray-400"><span className="text-gray-600">Pre-washed &amp; pre-shrunk</span></li>
              <li className="text-gray-400"><span className="text-gray-600">Ultra-soft 100% cotton</span></li>
            </ul>
          </div>
        </div>

        <div className="hidden mt-10">
          <h2 className="text-sm font-medium text-gray-900">Details</h2>

          <div className="mt-4 space-y-6">
            <p className="text-sm text-gray-600">The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming &quot;Charcoal Gray&quot; limited release.</p>
          </div>
        </div>
      </div>
    </div>
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