import Header from "../components/header";

export default function Layout({ children }) {
    return (
        <>
            <Header></Header>
            <div className='max-w-screen-xl mx-auto pt-[72px]'>{children}</div>
        </>
    );
}