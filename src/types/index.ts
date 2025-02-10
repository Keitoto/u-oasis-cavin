export interface ICabin {
  id: string
  name: string
  maxCapacity: number
  regularPrice: number
  discount: number
  image: string
  description?: string
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

export interface IDataBooking {
  created_at: string
  startDate: string
  endDate: string
  cabinId: number
  guestId: number
  hasBreakfast: boolean
  observations: string
  isPaid: boolean
  numGuests: number
}

export interface ICountry {
  name: string
  id: string
  flag: string
}

export interface IGuest {
  id: string
  fullName: string
  email: string
  nationality: string
  nationalID: string
  countryFlag: string
}
