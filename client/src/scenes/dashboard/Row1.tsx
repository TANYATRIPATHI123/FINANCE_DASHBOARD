import { useMemo } from 'react'
import DashboardBox from '../../components/DashboardBox'
import { useGetKpisQuery } from '../../state/api'
import { ResponsiveContainer, AreaChart, CartesianGrid, XAxis, YAxis, Tooltip, Area } from 'recharts'
import { useTheme } from '@mui/material'
import BoxHeader from '../../components/BoxHeader'

//eslint-disable-next-line
type Props = {}
// eslint-disable-next-line
const Row1 = (props: Props) => {
  const { data } = useGetKpisQuery();
  const { palette } = useTheme();
  console.log(data);
  
  const revenueExpenses = useMemo(() => {
    return (
      data && data[0].monthlyData.map(({month, revenue, expenses}) => {
        return {
          name: month.substring(0, 3),
          revenue: revenue,
          expenses: expenses
        }
      })
    )
  }, [data]);

  return (
    <>
    <DashboardBox bgcolor="#fff" gridArea="a">
      <BoxHeader
        title="Revenue and Expenses"
        sideText="+4%"
        subtitle=""
      />
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={500}
          height={400}
          data={revenueExpenses}
          margin={{
            top: 15,
            right: 25,
            left: -10,
            bottom: 60,
          }}
        >
          <defs>
            <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={palette.primary[400]} stopOpacity={0.5} />
              <stop offset="95%" stopColor={palette.primary[400]} stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorExpenses" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={palette.primary[400]} stopOpacity={0.5} />
              <stop offset="95%" stopColor={palette.primary[400]} stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="1 5" />
          <XAxis dataKey="name" style={{fontSize: '10px'}} />
          <YAxis axisLine={{ strokeWidth: "0" }} style={{ fontSize: "10px" }} domain={[8000, 23000]} />
          <Tooltip />
          <Area type="monotone" dataKey="revenue" dot={true} stroke={palette.primary.main} fillOpacity={1} fill="url(#colorRevenue)" />
          <Area type="monotone" dataKey="expenses" dot={true} stroke={palette.primary.main} fillOpacity={1} fill="url(#colorExpenses)" />
        </AreaChart>
      </ResponsiveContainer>
    </DashboardBox>
    <DashboardBox bgcolor="#fff" gridArea="b"></DashboardBox>
    <DashboardBox bgcolor="#fff" gridArea="c"></DashboardBox>
    </>
  )
}

export default Row1;