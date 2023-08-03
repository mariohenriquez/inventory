export default function Layout({ children }) {
    return (
        <section className='pt-20'>
            <div className='max-w-screen-xl mx-auto'>{children}</div>
        </section>
    );
}