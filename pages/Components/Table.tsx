//https://www.youtube.com/watch?v=p1CFRiif7I0

import React, { FC } from 'react';
import { HackerData } from '../admin_dashboard';

interface TableProps {
    title: string;
    tableData: HackerData[];
    headingColumns: string[];
    breakOn?: string;
  }
  
  const Table: FC<TableProps> = ({ title, tableData, headingColumns, breakOn = 'medium' }) => {
    let tableClass = 'table-container__table';
  
    if (breakOn === 'small') {
      tableClass += ' table-container__table--break-sm';
    } else if (breakOn === 'medium') {
      tableClass += ' table-container__table--break-md';
    } else if (breakOn === 'large') {
      tableClass += ' table-container__table--break-lg';
    }
  
    const data = (tableData as Array<HackerData>).map((row, index) => {
      let rowData: { key: string; val: string | number; }[] = [];
  
      Object.entries(row).forEach((data, i) => {
        rowData.push({
          key: headingColumns[i],
          val: data[1]
        });
      });
  
      return <tr key={index}>
        {rowData.map((data, index) => <td key={index} data-heading={data.key} style={{
            border: 'solid 1px black',
        }}>{data.val}</td>)}
      </tr>
    });
  
    return (
      <div className="table-container" 
      style={{borderBottom: 'solid 3px blue', 
      background: 'blue',
      color: 'white',
      borderRadius: 10,
      overflow:'auto',
      height:500,
      border: 'solid 2px black'
      }}>
        
        <div className="table-container__title"
        style={{borderBottom: 'solid 3px blue', 
        background: 'red',
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        borderRadius: 10
        
        }}>
          <h2>{title}</h2>
        </div>
        <table className={tableClass} >
          <thead>
            <tr>
              {headingColumns.map((col, index) => (
                <th key={index}>{col}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data}
          </tbody>
        </table>
      </div>
      
    );
  }
  
  export default Table;