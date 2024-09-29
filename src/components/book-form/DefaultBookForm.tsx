// TODO: replace het not found images thanh constants

import { useEffect } from 'react';

import { cn } from '@/lib/utils';

import { CinemaDescription } from './components/CinemaDescription';
import { CinemaSearch } from './components/CinemaSearch';
import { ListCinemaProvider } from './components/list-cinema-provider/ListCinemaProvider';
import { ListDate } from './components/list-date/ListDate';
import { ListFilmPerform } from './components/list-film-perform/ListFilmPerform';
import { Location } from './components/Location';
import { NearestLocation } from './components/NearestLocation';
import { useBookForm } from './hooks/useBookForm';

export function DefaultBookForm({
  className,
  cinema_provider_id,
}: {
  readonly className?: string;
  readonly cinema_provider_id?: string;
}) {
  const selectedCinemaId = useBookForm((state) => state.selectedCinemaId);
  const selectedDate = useBookForm((state) => state.selectedDate);
  const setCinemaProvider = useBookForm((state) => state.setCinemaProvider);

  useEffect(() => {
    setCinemaProvider(cinema_provider_id ?? '');
  }, []);

  return (
    <div
      className={cn(
        'flex max-h-[700px] min-h-[700px] flex-col rounded-md border border-gray-200 shadow-md',
        className
      )}
    >
      <div className='topview flex flex-col gap-y-3 border-b'>
        <div className='flex grow flex-row flex-wrap items-center justify-start gap-x-3 px-5 pt-4 md:flex-nowrap'>
          <p className='hidden md:block'>Vị trí</p>
          <Location className='max-md:grow' />
          <NearestLocation className='max-md:grow' />
        </div>
        <ListCinemaProvider className='px-5 pb-2' />
      </div>
      <div className='mainview flex min-h-full w-full flex-row'>
        <div className='thanhsearch flex min-w-[33%] max-w-[33%] flex-col border-r'>
          <CinemaSearch />
        </div>
        <div className='realmainview flex max-h-full w-full basis-2/3 flex-col overflow-auto'>
          <div className='sticky top-0 z-10 bg-white'>
            <CinemaDescription className='p-3' cinema_id={selectedCinemaId} />
            <ListDate />

            <div className='uudai border-t bg-gray-100 px-5 py-2 text-sm text-momo'>
              Đồng giá 79K/vé 2D khi thanh toán bằng Ví Trả Sau, áp dụng 1 vé/1
              khách hàng/1 tháng
            </div>
          </div>
          <ListFilmPerform cinema_id={selectedCinemaId} date={selectedDate} />
        </div>
      </div>
    </div>
  );
}
