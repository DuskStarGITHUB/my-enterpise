/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

// DEPENDENCIES
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from 'recharts'

// DATA
const data = [
  {
    name: 'Jan',
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: 'Feb',
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: 'Mar',
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: 'Apr',
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: 'May',
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: 'Jun',
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: 'Jul',
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: 'Aug',
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: 'Sep',
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: 'Oct',
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: 'Nov',
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: 'Dec',
    total: Math.floor(Math.random() * 5000) + 1000,
  },
]

// VIEW
export function Overview() {
  return (
    <ResponsiveContainer height={350} width='100%'>
      <BarChart data={data}>
        <XAxis
          axisLine={false}
          dataKey='name'
          fontSize={12}
          stroke='#888888'
          tickLine={false}
        />
        <YAxis
          axisLine={false}
          fontSize={12}
          stroke='#888888'
          tickFormatter={(value) => `$${value}`}
          tickLine={false}
        />
        <Bar
          className='fill-primary'
          dataKey='total'
          fill='currentColor'
          radius={[4, 4, 0, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  )
}
