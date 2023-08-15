export default function Layout({ children }) {
    return (
        <section className='pt-16'>
            <div className='max-w-screen-xl mx-auto'>{children}</div>
        </section>
    );
}