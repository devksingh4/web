import { usePageContext } from "vike-react/usePageContext";
import { BasicNavbar } from "../../components/BasicNavbar";

export default function Page() {
  const { is404 } = usePageContext();
  return (
    <>
      <BasicNavbar />
      <main className="w-full flex-grow flex flex-col items-center justify-center bg-slate-900">
        <div className="container mx-auto px-4 py-16 flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            {is404 ? "Page Not Found" : "An Error Occurred"}
          </h1>
          <p className="text-gray-300 mb-6 max-w-2xl text-lg">
            Perhaps you would like to{" "}
            <a href="/" className="text-blue-500 hover:text-blue-800">
              go home
            </a>
            ?
          </p>
        </div>
      </main>
    </>
  );
}