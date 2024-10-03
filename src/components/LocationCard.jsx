import Icon from './Icon'

export default function LocationCard(props) {
  return (
    <div className='w-1/2 sm:w-[470px] sm:h-[168px] flex flex-col sm:flex-row items-center gap-5 border-b sm:border-none border-slate-300 pb-2 sm:pb-0'>
      <img
        src={props.imageUrl}
        alt={props.title}
        className='sm:w-[125px] h-full object-cover object-center rounded-md'
      />
      <article>
        <div className='flex flex-col sm:flex-row items-center'>
          <div className='flex'>
            <Icon name='Location' className='text-primary size-4' />
            <span className='text-xs tracking-widest'>{props.location}</span>
          </div>
          <a
            href={props.googleMapsUrl}
            target='_blamk'
            className='ml-4 text-xs text-gray-400 underline'
          >
            View on Google Maps
          </a>
        </div>
        <h2 className='font-bold text-xl sm:text-2xl text-center sm:text-left'>
          {props.title}
        </h2>
        <p className='mt-4 font-bold text-xs'>
          {props.startDate} - {props.endDate}
        </p>
        <p className='mt-2 text-xs'>{props.description}</p>
      </article>
    </div>
  )
}
