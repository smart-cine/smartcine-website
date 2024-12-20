import moment from 'moment';

import { genericMemo } from '@/lib/utils';

import { useBookForm } from '../hooks/useBookForm';
import { SearchInput } from './input/SearchInput';
import { ListCinema } from './list-cinema/ListCinema';

function CinemaSearch() {
  const searchCinema = useBookForm((state) => state.searchCinema);
  const selectedArea = useBookForm((state) => state.selectedArea);
  const selectedCinemaProviderId = useBookForm(
    (state) => state.selectedCinemaProviderId
  );

  return (
    <>
      <div className='px-3 py-2'>
        <SearchInput
          placeholder='Tìm theo tên rạp ...'
          className='h-9 w-full'
        />
      </div>
      <ListCinema
        searchCinema={searchCinema}
        searchArea={selectedArea}
        searchProvider={selectedCinemaProviderId}
      />
    </>
  );
}

export const MemoCinemaSearch = genericMemo(CinemaSearch);
