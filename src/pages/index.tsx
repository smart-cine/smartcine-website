import Link from 'next/link';

import { DefaultBookForm } from '@/components/book-form/DefaultBookForm';
import { ConstrainedContainer } from '@/components/container/constrained-container';
import { MainLayout } from '@/components/layout/MainLayout';
import { Sparkles } from '@/components/other/Sparkles';
import { CheckList } from '@/components/pages/index/CheckList';
import { CinemaSystem } from '@/components/pages/index/CinemaSystem';
import { CurrentShows } from '@/components/pages/index/CurrentShows';
import { FAQSection } from '@/components/pages/index/FAQSection';
import { TopComments } from '@/components/pages/index/TopComments';
import { Button } from '@/components/ui/button';
import { useQueryFilm } from '@/core/film/film.query';

export default function Home() {
  const { data: films } = useQueryFilm();
  console.log('films', films);

  return (
    <MainLayout>
      {/* Movie schedule */}
      <ConstrainedContainer className='bg-[#FDF2F8] py-6'>
        <CheckList>
          <CheckList.Item>
            Buy tickets online, <b>enjoy great movies</b>
          </CheckList.Item>
          <CheckList.Item>
            <b>Book tickets securely</b> on SmartCine
          </CheckList.Item>
          <CheckList.Item>
            <b>Choose your seats freely, buy popcorn and drinks </b>
            conveniently.
          </CheckList.Item>
          <CheckList.Item>
            Your <b>booking history</b> is saved immediately
          </CheckList.Item>
        </CheckList>
      </ConstrainedContainer>

      {/* Current shows */}
      <ConstrainedContainer className="bg-black bg-[url('/momo-showingmovies-bg.jpg')] bg-contain bg-center bg-no-repeat py-6">
        <p className='mx-auto mt-5 w-fit text-3xl font-bold text-white'>
          <Sparkles>Current shows</Sparkles>
        </p>
        <CurrentShows films={films ?? []} className='bg-transparent' />
      </ConstrainedContainer>

      {/* Featured shows */}
      <ConstrainedContainer className='py-14'>
        <p className='mx-auto w-fit text-3xl font-bold text-pink-600'>
          Featured movies
        </p>
        <CurrentShows
          films={films ?? []}
          className='bg-transparent'
          variant='white'
          hasIndex={false}
        />
        <div className='w-full'>
          <div className='mx-auto w-fit'>
            <Button variant='momo' className='text-md font-md'>
              Find cinema film
            </Button>
          </div>
        </div>
      </ConstrainedContainer>

      {/* Movie schedule */}
      <ConstrainedContainer className='bg-gray-50 py-12'>
        <div className='flex flex-col gap-y-8'>
          <p className='mx-auto w-fit text-3xl font-bold text-pink-600'>
            Movie schedule
          </p>
          <DefaultBookForm />
        </div>
        <div className='mt-8 w-full'>
          <div className='mx-auto w-fit'>
            <Button variant='momo' className='text-md font-md min-w-[130px]'>
              Find all
            </Button>
          </div>
        </div>
      </ConstrainedContainer>

      {/* Cinema system */}
      <ConstrainedContainer className='py-6'>
        <p className='mx-auto w-fit text-3xl font-bold text-pink-600'>
          Top comments
        </p>
        <TopComments className='mt-10' />
      </ConstrainedContainer>

      {/* Top rated film */}
      {/* <ConstrainedContainer className='py-6'>
        <p className='text-momo mx-auto w-fit text-2xl font-bold'>Blog</p>
        <div className='mx-auto w-fit py-44 text-3xl'>COMING SOON!</div>
      </ConstrainedContainer> */}

      {/* Cinema system */}
      <ConstrainedContainer className='py-8'>
        <div className='flex flex-col gap-y-2'>
          <p className='mx-auto w-fit text-3xl font-bold text-pink-600'>
            Cinema system
          </p>
          <p className='mx-auto w-fit text-gray-600'>
            List of major cinema systems present throughout the country
          </p>
        </div>
        <CinemaSystem />
      </ConstrainedContainer>

      {/* FAQ */}
      <ConstrainedContainer className='py-6'>
        <div className='flex flex-row gap-x-10'>
          <p className='mx-auto mt-5 w-fit whitespace-nowrap text-3xl font-bold text-pink-600'>
            You ask, SmartCine answer
          </p>
          <FAQSection />
        </div>
        <p className='mt-10'>
          Your question not found? Please see more <Link href='#'>here</Link>
        </p>
      </ConstrainedContainer>
      <div className='py-32'> </div>
    </MainLayout>
  );
}
