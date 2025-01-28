export interface ICabin {
  id: string
  name: string
  maxCapacity: number
  regularPrice: number
  discount: number
  image: string
}

export interface IBooking {
  id: string
  guestId: string
  startDate: string
  endDate: string
  numNights: number
  totalPrice: number
  numGuests: number
  status: string
  created_at: string
  cabins: Pick<ICabin, 'name' | 'image'>
}

export interface ICountry {
  name: string
  id: string
  flag: string
}
