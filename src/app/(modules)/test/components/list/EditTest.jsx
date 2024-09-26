// ** React Imports
import React, { useEffect, useState, useCallback } from 'react'

// ** MUI Imports
import { useRouter } from 'next/router'

import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'

// ** Component Imports

// ** View Imports
import CreateQuestionForm from 'src/pages/qb/_views/CreateQuestion'

// ** Actions Imports
import { ViewQuestion, GetCategories, EditQuestion } from 'src/pages/qb/_models/QuestionModel'

import { CircularProgress } from '@mui/material'

const EditTest = () => {
  const router = useRouter()
  const { guid } = router.query

  // ** State
  const [isLoading, setLoading] = useState(false)
  const [categories, setCategories] = useState([])

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <PageHeader
          title={<Typography variant='h5'>Edit Question</Typography>}
          subtitle={<Typography variant='body2'></Typography>}
        />
      </Grid>
      <Grid item xs={12} md={12}>
        <Card>
          <CardContent>
            <CreateQuestionForm guid={guid} />
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default EditTest
