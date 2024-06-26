import Image from 'next/image';
import Link from 'next/link';
import { MoveRight } from 'lucide-react';

import { cn } from '@/lib/utils';

import { CommentIcon } from '../icon/CommentIcon';
import { PlayIcon } from '../icon/PlayIcon';
import { StarIcon } from '../icon/StarIcon';
import { PlayButton } from '../PlayButton';
import { UserComment } from '../UserComment';
import { MinimalFilmCard } from './MinimalFilmCard';

export function TopCommentCard({ className }: { readonly className?: string }) {
  return (
    <div
      className={cn(
        'flex flex-col overflow-hidden rounded-md border border-gray-200 shadow-md',
        className
      )}
    >
      <div className='relative'>
        <MinimalFilmCard
          pictureUrl='/film_picture/1.jpg'
          className='h-[200px]'
        />
        <div className='absolute bottom-0 flex flex-col p-2.5 text-sm font-bold text-gray-100'>
          <div className=''>Kẻ trộm mặt trăng 4</div>
          <div className='flex flex-row gap-x-5'>
            <div className='flex flex-row items-center gap-x-1'>
              <StarIcon className='h-7 w-7' />
              <p>9.1</p>
            </div>
            <div className='flex flex-row items-center gap-x-1'>
              <CommentIcon className='h-7 w-7' />
              <p>9.1</p>
            </div>
          </div>
        </div>
      </div>
      <div className='flex h-[280px] flex-col gap-y-3 p-4'>
        {[
          'Bao giờ có thế',
          'Phim dỡ lắm nha',
          'phim rat sigma',
          'sigma vl',
        ].map((cmt) => (
          <UserComment key={cmt} body={cmt} />
        ))}
        <Link
          href='#'
          className='flex flex-row items-center justify-end gap-x-1 text-xs font-bold'
        >
          Xem Thêm <MoveRight />
        </Link>
      </div>
    </div>
  );
}
