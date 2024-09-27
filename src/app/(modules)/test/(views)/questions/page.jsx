'use client'
import { useSearchParams } from 'next/navigation'

// import useQuestionApi from '../../Api/useQuestionApi'
// import AddQuestion from '../../components/questions/AddQuestion'

const QuestionsList = () => {
  // const { createQuestion, editQuestion, QId } = useQuestionApi()
  const searchParams = useSearchParams()
  const guid = searchParams.get('guid')

  return null

  // return <AddQuestion createQuestion={createQuestion} editQuestion={editQuestion} guid={guid} QId={QId} />
}

export default QuestionsList
