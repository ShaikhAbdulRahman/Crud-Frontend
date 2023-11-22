import { Card, CardContent } from '@mui/material'
import Landing from './components/Landing'

const App = () => {
  return (
   <Card sx={{bgcolor:"lavender"}}>
    <CardContent>
      <Landing/>
    </CardContent>
   </Card>
  )
}

export default App