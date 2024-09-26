// MUI Imports
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

// Third-party Imports
import classnames from 'classnames'

// Component Imports
// import CustomAvatar from '@core/components/mui/Avatar'

const TestCardItems = props => {
  // Props
  const { title, stats, avatarIcon, avatarColor, trend: trend, trendNumber: trendNumber, subtitle: subtitle } = props

  return (
    <Card
      sx={{
        boxShadow: `0px 3px 0px 0px ${avatarColor}, rgba(100, 100, 111, 0.2) 0px 7px 29px 0px, rgba(100, 100, 111, 0.2) 0px 7px 29px 0px, rgba(100, 100, 111, 0.2) 0px 7px 29px 0px`

        //  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      }}
    >
      <CardContent className='flex justify-between gap-1'>
        <div className='flex flex-col gap-1 flex-grow'>
          <div className='flex items-center gap-2 flex-wrap'>
            <Typography variant='h4'>{stats}</Typography>
          </div>
          <Typography variant='body2'>{subtitle}</Typography>
        </div>
      </CardContent>
    </Card>
  )
}

export default TestCardItems
