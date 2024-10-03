import Icon from './Icon'

export default function LocationCard(props) {
  return (
    <div className='w-[470px] h-[168px] flex items-center gap-5'>
      <img
        src={props.imageUrl}
        alt={props.title}
        className='w-[125px] h-full object-cover object-center rounded-md'
      />
      <article>
        <div className='flex items-center'>
          <Icon name='Location' className='text-primary size-4' />
          <span className='text-xs tracking-widest'>{props.location}</span>
          <a
            href={props.googleMapsUrl}
            target='_blamk'
            className='ml-4 text-xs text-gray-400 underline'
          >
            View on Google Maps
          </a>
        </div>
        <h2 className='font-bold text-2xl'>{props.title}</h2>
        <p className='mt-4 font-bold text-xs'>
          {props.startDate} - {props.endDate}
        </p>
        <p className='mt-2 text-xs'>{props.description}</p>
      </article>
    </div>
  )
}
