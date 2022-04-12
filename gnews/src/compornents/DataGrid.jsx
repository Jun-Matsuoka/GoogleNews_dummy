import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';

const columns = [
  { field: 'LocalName', headerName: '都道府県', minWidth: 140 },
  { field: 'weather', headerName: '天気', minWidth: 140 },
  { field: 'temperature', headerName: '最高/最低(気温)', minWidth: 180 },
  { field: 'rainyPercent', headerName: '降水確率',    minWidth: 180 },
];

const rows = [
  { id: 1, LocalName:"北海道", weather:"雪",temperature: "5/-5", rainyPercent:"40%" },
  { id: 2, LocalName:"東京", weather:"晴れ",temperature: "10/3", rainyPercent:"10%" },
  { id: 3, LocalName:"大阪", weather:"晴れ",temperature: "10/0", rainyPercent:"0%" },
  { id: 4, LocalName:"高知", weather:"雨",temperature: "12/5", rainyPercent:"80%" },
  { id: 5, LocalName:"福岡", weather:"曇り",temperature: "15/4", rainyPercent:"30%" },
];

const DataGridTest = () => {

  return (
    <div style={{minWidth: '100%'}} >
      <DataGrid
      style={{margin: "0 300px",}}
        columns={columns}
        rows={rows}
        autoHeight
        pageSize={24}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
        getRowId={(row) => row.id}
      />
    </div>
    
  );
}
export default DataGridTest;