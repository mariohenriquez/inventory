const Footer = () => {
    return (
        <footer className='p-5 sticky top-[100vh]'>
            <div className='max-w-screen-xl mx-auto'>
            Copyright <span className='text-[#1e99e3]'>Shopping</span>{' '}
            {new Date().getFullYear()}
            </div>
        </footer>        
    );
};

export default Footer;