import Header from "../components/header";

export default function Home() {
  return (
    <>
      <Header></Header>
      <div className="max-w-screen-xl mx-auto pt-[72px]">
        <div className="py-5">
          <h1 className="text-3xl">Main Content</h1>
        </div>
      </div>
    </>
  )
}
