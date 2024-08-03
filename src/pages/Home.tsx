import CardsContainer from '../components/CardsContainer'
import Hero from '../components/Hero'
import JobListing from '../components/JobListing'

export default function Home() {
  return (
    <>
      <Hero />
      <CardsContainer />

      <h2 className="text-white md:text-4xl text-2xl text-center">Browse Job</h2>
      <JobListing isHome={true} />

    </>
  )
}
