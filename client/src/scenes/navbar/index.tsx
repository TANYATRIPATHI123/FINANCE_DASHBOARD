import { Box, Typography, useTheme } from '@mui/material'
import {useState} from 'react'
import Image from '/Logo.jpeg'
import { Link } from 'react-router-dom'
import FlexBetween from '../../components/FlexBetween'

//eslint-disable-next-line
type Props = {}
//eslint-disable-next-line
const Navbar = (props: Props) => {
  const { palette } = useTheme();
  const [selected, setSelected] = useState("dashboard");
  return (
    <FlexBetween mb ="0.25rem" p="0.5rem 0rem" color={palette.grey[300]}>
      <FlexBetween gap="0.75rem">
        <img id="logo-image" src={Image} />
        <Typography variant="h4" fontSize="16px">
          FiscalView
        </Typography>
      </FlexBetween>

      <FlexBetween gap="2rem">
        <Box sx={{ "&:hover" : {color: palette.primary[100]}}}>
          <Link
            to="/"
            onClick={() => setSelected("dashboard")}
            style={{
              color: selected === "dashboard" ? "inherit" : palette.grey[700],
              textDecoration: "inherit"
            }}
          >
            Dashboard
          </Link>
        </Box>
        <Box>
            <Link
            to="/predictions"
            onClick={() => setSelected("predictions")}
            style={{
              color: selected === "predictions" ? "inherit" : palette.grey[700],
              textDecoration: "inherit"
            }}
          >
            Predictions
          </Link>
        </Box>
      </FlexBetween>
    </FlexBetween>
  )
}

export default Navbar