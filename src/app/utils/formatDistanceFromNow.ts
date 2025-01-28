import { formatDistance, parseISO } from 'date-fns'

export function formatDistanceFromNow(dateStr: string) {
  return formatDistance(parseISO(dateStr), new Date(), {
    addSuffix: true,
  }).replace('about ', '')
}
