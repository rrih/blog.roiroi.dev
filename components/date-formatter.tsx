import { parseISO, format } from 'date-fns'

type Props = {
  dateString: string
}

/**
 * 日時の加工
 *
 * @param dateString Props
 * @return JSX.Element
 */
const DateFormatter = ({ dateString }: Props) => {
  const date = parseISO(dateString)
  return <div><time dateTime={dateString}>{format(date, 'yyyy年L月d日')}</time></div>
}

export default DateFormatter
