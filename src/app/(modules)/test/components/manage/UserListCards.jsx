'use client'

// MUI Imports
import Grid from '@mui/material/Grid'

import { useTheme } from '@mui/material/styles'

import TestCardItems from './TestCardItems'

const UserListCards = () => {
  const theme = useTheme()

  console.info(theme.palette.primary.main)

  const data = [
    {
      title: 'Session',
      stats: '21,459',
      avatarIcon: 'ri-group-line',
      avatarColor: theme.palette.primary.main,
      trend: 'positive',
      trendNumber: '29%',
      subtitle: 'Total User'
    },
    {
      title: 'Paid Users',
      stats: '4,567',
      avatarIcon: 'ri-user-add-line',
      avatarColor: theme.palette.customColors.testCardColors1,
      trend: 'positive',
      trendNumber: '18%',
      subtitle: 'Last week analytics'
    },
    {
      title: 'Active Users',
      stats: '19,860',
      avatarIcon: 'ri-user-follow-line',
      avatarColor: theme.palette.customColors.testCardColors2,
      trend: 'negative',
      trendNumber: '14%',
      subtitle: 'Last week analytics'
    },
    {
      title: 'Pending Users',
      stats: '237',
      avatarIcon: 'ri-user-search-line',
      avatarColor: theme.palette.customColors.testCardColors3,
      trend: 'positive',
      trendNumber: '42%',
      subtitle: 'Last week analytics'
    }
  ]

  return (
    <Grid container spacing={6}>
      {data.map((item, i) => (
        <Grid key={i} item xs={12} sm={6} md={3}>
          <TestCardItems {...item} />
        </Grid>
      ))}
    </Grid>
  )
}

export default UserListCards
