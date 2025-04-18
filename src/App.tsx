import { Box, Button } from '@mui/material'
import './App.css'
import AppRoutes from './routes/AppRoutes'

function App() {

  return (
    <>

      {/* <Box width="100vw" height="100vh" justifyItems="center" alignContent="center"  >

        <Button variant="contained" color="primary" onClick={() => { alert("world!") }}>
          Hello
        </Button>

      </Box> */}
      {/* <Box  bgcolor="yellowgreen" >

      </Box> */}

        <AppRoutes />
    </>
  )
}

export default App
