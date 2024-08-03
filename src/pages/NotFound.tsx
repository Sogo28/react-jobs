import { useNavigate } from "react-router-dom"

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <section className="flex flex-col gap-4 h-screen justify-center items-center text-white">
      <h1 className="text-4xl sm:text-6xl font-bold">404 NOT FOUND</h1>
      <p className="text-xl sm:text-2xl font-medium italic">
        This page does not exist
      </p>
      <button
        onClick={
          () => {
            navigate("/jobs");
          }
        }
        className="transition ease-in-out duration-150 rounded-xl px-4 py-2 w-fit bg-[#62cff4] font-medium text-center hover:bg-[#54b4d4] text-black"
      >Go back</button>
    </section>
  )
}
