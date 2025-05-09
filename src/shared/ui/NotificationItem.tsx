import type { Notification } from '@/widgets/notification/types';
import CardItem from './CardItem';
import { cn, getDate } from '../utils';

export default function NotificationItem({
  title,
  description,
  date,
  checking,
  icon,
  className,
}: Notification & { icon: string; className?: string }) {
  return (
    <CardItem
      className={cn(
        className,
        checking ? 'text-light' : 'text-dark',
        'border-border active:bg-fill h-26 border-[0.5px] transition duration-70',
      )}
      shadow={!checking}
    >
      <div className='flex size-full items-center justify-between'>
        <div className='flex size-full items-center gap-4'>
          <div className='flex h-full flex-shrink-0 items-center'>
            <img className='rounded-small size-18 object-cover' src={icon} />
          </div>
          <div className='flex flex-1 flex-col gap-1'>
            <div className='flex w-full items-center justify-between'>
              <span className='font-semibold'>{title}</span>
              <span className='text-sm'>{getDate(date, 'YYYY.MM.DD')}</span>
            </div>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </CardItem>
  );
}
