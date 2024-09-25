import DashboardBox from '../../components/DashboardBox'
import { useGetKpisQuery } from '../../state/api'
//eslint-disable-next-line
type Props = {}
//eslint-disable-next-line
const Row1 = (props: Props) => {
  const { data } = useGetKpisQuery();

  return (
    <>
    <DashboardBox bgcolor="#fff" gridArea="a"> </DashboardBox>
    <DashboardBox bgcolor="#fff" gridArea="b"></DashboardBox>
    <DashboardBox bgcolor="#fff" gridArea="c"></DashboardBox>
    </>
  )
}

export default Row1;