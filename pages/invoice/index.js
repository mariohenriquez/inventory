import Layout from '../../components/layout';
import Header from '../../components/header';

export default function Invoice() {
    return (
        <Layout>
            <Header />
            <div className='py-5'>
                <h1 className='text-3xl'>Invoice</h1>
                <div>
                    List of invoice
                </div>
            </div>
        </Layout>
    );
}