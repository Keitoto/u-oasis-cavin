import type { IBooking } from '@/types'
import { TrashIcon } from 'lucide-react'

interface Props {
  bookingId: IBooking['id']
}

export function DeleteReservation({ bookingId }: Props) {
  return (
    <button className="group flex items-center gap-2 uppercase text-xs font-bold text-primary-300 flex-grow px-3 hover:bg-accent-600 transition-colors hover:text-primary-900" type="button">
      <TrashIcon className="h-5 w-5 text-primary-600 group-hover:text-primary-800 transition-colors" />
      <span className="mt-1">
        Delete
        {bookingId}
      </span>
    </button>
  )
}
