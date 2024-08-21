import { useNavigate } from "react-router-dom"

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <section className="flex flex-col gap-4 h-screen justify-center items-center text-white">
      <h1 className="text-4xl sm:text-6xl font-bold">404 NOT FOUND</h1>
      <p className="text-xl sm:text-2xl font-medium italic">
        This page does not exist
      </p>
    </section>
  )
}
