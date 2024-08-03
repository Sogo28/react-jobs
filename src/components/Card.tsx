import { NavLink } from "react-router-dom"

type CardProps = {
  title: string;
  desc: string;
  buttonDesc: string;
  pathLink: string;
}

export default function Card({ title, desc, buttonDesc, pathLink }: CardProps) {
  return (
    <div className='flex flex-col gap-8 px-4 py-4 bg-slate-100 w-[350px] mx-4 md:w-[500px] rounded-xl'>
      <div className='flex flex-col'>
        <h2 className='font-bold text-2xl'>{title}</h2>
        <p className='text-lg'>{desc}</p>
      </div>
      <NavLink to={pathLink} className='transition ease-in-out duration-150 rounded-xl px-4 py-2 w-fit bg-[#62cff4] font-medium text-center hover:bg-[#54b4d4]'>{buttonDesc}</NavLink>
    </div>
  )
}
