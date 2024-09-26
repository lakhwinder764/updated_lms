import { Grid, Button } from '@mui/material'

const SaveQuestion = ({
  handleSubmit,
  resetForm,
  setSaveQuestion,
  setEditQuestion,
  setNQuestion,
  setFeedback,
  setAnswerFeedback
}) => {
  return (
    <Grid container item xs={12} spacing={4}>
      <Grid item xs={4} md={2}>
        <Button
          variant='contained'
          color='primary'
          type='submit'
          fullWidth
          onClick={() => {
            setEditQuestion(true)
            setSaveQuestion(false)
          }}
        >
          Submit
        </Button>
      </Grid>
      <Grid item xs={4} md={2}>
        <Button
          variant='outlined'
          color='primary'
          type='submit'
          fullWidth
          onClick={() => {
            setSaveQuestion(true)
            setEditQuestion(false)
          }}
        >
          Save As New
        </Button>
      </Grid>
      <Grid item xs={4} md={2}>
        <Button
          variant='outlined'
          color='error'
          onClick={() => {
            setNQuestion(null)
            setFeedback(null)
            setAnswerFeedback(null)
            resetForm({
              question_type: 'mcmc',
              template: 'template_1',
              marks: '1',
              neg_marks: '0',
              timeValue: 'second',
              time: '',
              difficulty: '',
              importance: ''
            })
          }}
          fullWidth
        >
          Reset
        </Button>
      </Grid>
    </Grid>
  )
}

export default SaveQuestion
