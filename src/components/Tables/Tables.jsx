import React, {useState, useEffect} from 'react'
import {DataGrid} from '@material-ui/data-grid'

const columns = [
  {field: 'id', headerName: 'ID'},
  {field: 'title', headerName: 'Title', width: 300},
  {field: 'body', headerName: 'Body', width: 600}
]

const Tables = () => {

  const [tableData, setTableData] = useState([])

 useEffect(() => {
   fetch("https://jsonplaceholder.typicode.com/posts")
    .then((data) => data.json())
    .then((data) => setTableData(data))
 })

  return (
    <div style={{height: 700, width: '100%'}}>
      <DataGrid 
        rows={tableData}
        columns={columns}
        pageSize={12}
        checkboxSelection
      />
    </div>
  )
}

export default Tables