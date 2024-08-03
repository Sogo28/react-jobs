import Card from "./Card"
export default function CardsContainer() {
  return (
    <section className="flex flex-col justify-between items-center md:px-40 mb-40">
      <h2 className="text-white md:text-4xl text-2xl text-center mb-20">Choose Your path</h2>
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <Card
          buttonDesc={"Browse Jobs"}
          desc={"Browse our react jobs and start your Career today"}
          title={"For Developpers"}
          pathLink={"/jobs"}
        />
        <Card
          buttonDesc={"Post a Job"}
          desc={"List your job to find the perfect developer for the role"}
          title={"For employers"}
          pathLink={"/add-job"}
        />
      </div>
    </section>
  )
}
