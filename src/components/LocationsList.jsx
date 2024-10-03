import LocationCard from './LocationCard'
import { data } from '../utils/data'

export default function LocationsList() {
  return (
    <div className='py-16 flex flex-col items-center gap-5'>
      {data.map((d) => (
        <LocationCard key={d.title} {...d} />
      ))}
    </div>
  )
}
