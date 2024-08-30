import { cn } from '@/lib/utils';
import OutlineSvgText from '../outlineSvgText';
import Link from 'next/link';

const ServiceCard = ({id, service_name, service_desc, text_muted, link}) => {
    return (
        <div className='px-3 sm:px-0'>
            <OutlineSvgText text={id}/>
            <div href={link} className={cn(`text-primary-foreground font-bold leading-135 md:text-2xl text-xl hover-underline ${text_muted}`)}><span>{service_name}</span></div>
            <p className={cn(`font-normal text-primary-foreground ${text_muted}`)}>{service_desc}</p>
        </div>
    )
}

export default ServiceCard