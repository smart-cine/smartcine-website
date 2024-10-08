import { cn } from '@/lib/utils';

import { StarIcon } from './icon/StarIcon';

export function StarRating({
  rating,
  className,
  count,
}: {
  readonly rating: number;
  readonly className?: string;
  readonly count?: number;
}) {
  return (
    <div className={cn('flex flex-row items-center gap-x-1', className)}>
      <StarIcon className='h-7 w-7' />
      <p>{(rating * 10).toFixed(1)}</p>
      <div className='flex flex-col text-[10px] font-light leading-[10px] text-gray-400'>
        <p>{count}</p>
        <p>đánh giá</p>
      </div>
    </div>
  );
}
