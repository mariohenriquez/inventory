import Layout from '../../components/layout';
import Grid from '../../components/Grid';
import homes from 'data.json';

export default function Inventory() {
    return (
        <Layout>
            <div className='py-5'>
                <h1 className='text-3xl mb-5'>Inventory</h1>
                <div className=''>
                    <Grid homes={homes} />
                </div>
            </div>
        </Layout>
    );
}