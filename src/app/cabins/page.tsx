import type { ICabin } from '@/types/cabin'
import CabinCard from '@/app/_components/CabinCard'

export default function Page() {
  // CHANGE
  const cabins: ICabin[] = [{
    id: '1',
    name: 'Mountain Retreat',
    maxCapacity: 6,
    regularPrice: 200,
    discount: 20,
    image: 'https://via.placeholder.com/150/92c952',
  }, {
    id: '2',
    name: 'Beachside Bungalow',
    maxCapacity: 4,
    regularPrice: 180,
    discount: 15,
    image: 'https://via.placeholder.com/150/771796',
  }, {
    id: '3',
    name: 'Forest Hideaway',
    maxCapacity: 8,
    regularPrice: 250,
    discount: 10,
    image: 'https://via.placeholder.com/150/24f355',
  }, {
    id: '4',
    name: 'Lakeview Lodge',
    maxCapacity: 10,
    regularPrice: 300,
    discount: 25,
    image: 'https://via.placeholder.com/150/d32776',
  }]

  return (
    <div>
      <h1 className="text-4xl mb-5 text-accent-400 font-medium">
        Our Luxury Cabins
      </h1>
      <p className="text-primary-200 text-lg mb-10">
        Cozy yet luxurious cabins, located right in the heart of the Italian
        Dolomites. Imagine waking up to beautiful mountain views, spending your
        days exploring the dark forests around, or just relaxing in your private
        hot tub under the stars. Enjoy nature's beauty in your own little home
        away from home. The perfect spot for a peaceful, calm vacation. Welcome
        to paradise.
      </p>

      {cabins.length > 0 && (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
          {cabins.map(cabin => (
            <CabinCard cabin={cabin} key={cabin.id} />
          ))}
        </div>
      )}
    </div>
  )
}
