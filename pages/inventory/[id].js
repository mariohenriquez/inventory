import Layout from '../../components/layout';
import Link from 'next/link';
import homes from 'data.json';

export default function Inventory() {
    return (
        <Layout>
            <div className='p-5'>
                <div className='flex'>
                    <Link href="/inventory">Back</Link> / 
                    <h1 className='text-3xl mb-5'>Inventory</h1>
                </div>
                <div className=''>

                </div>
            </div>
        </Layout>
    );
}

// export async function getStaticProps({ params }) {
//     // Fetch necessary data for the blog post using params.id
// }