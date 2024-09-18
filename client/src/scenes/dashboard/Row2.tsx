import DashboardBox from '../../components/DashboardBox'
//eslint-disable-next-line
type Props = {}
//eslint-disable-next-line
const Row2 = (props: Props) => {
  return (
    <>
    <DashboardBox bgcolor="#fff" gridArea="d"></DashboardBox>
      <DashboardBox bgcolor="#fff" gridArea="e"></DashboardBox>
      <DashboardBox bgcolor="#fff" gridArea="f"></DashboardBox>
    </>
  )
}

export default Row2;