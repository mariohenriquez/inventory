import Layout from '../../components/layout';
import Grid from '../../components/Grid';
import products from 'data.json';

export default function Inventory() {
    return (
        <Layout>
            <div className='p-5'>
                <h1 className='text-3xl mb-5'>Inventory</h1>
                <div className='py-4'>
                    <Grid data={products} />
                </div>
            </div>
        </Layout>
    );
}
