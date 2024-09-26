// MUI Imports
import Grid from '@mui/material/Grid'

// Component Imports
import TestListTable from './TestListTable'
import UserListCards from '../manage/UserListCards'

const UserList = ({ userData, addUsersData, deleteUserData }) => {
  return (
    <Grid container spacing={6}>
      {/* <Grid item xs={12}>
        <UserListCards />
      </Grid> */}
      <Grid item xs={12}>
        <TestListTable tableData={userData} addUserData={addUsersData} deleteUserData={deleteUserData} />
      </Grid>
    </Grid>
  )
}

export default UserList
