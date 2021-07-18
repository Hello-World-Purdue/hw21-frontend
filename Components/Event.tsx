
import React, { FC } from 'react';
import styles from '../styles/Home.module.css'
import { EventsData } from '../pages/schedule';

interface EventProps {
    eventsData: EventsData[]
    headingColumns: string[]
}
  
const Event: FC<EventProps> = ({eventsData}: EventProps, headingColumns) => {
    const event = (eventsData as Array<EventsData>).map((row, index) => {
      let rowData: { key: string; val: string | number; }[] = [];
      
      // build rowData
      Object.entries(row).forEach((data, i) => {
        rowData.push({
        key: headingColumns[i],
        val: data[1]
        });
      });
      // define displayDetails
      const displayDetails = (data) => {
        alert(`${data}`);
      }
      
      return <div>
        {rowData.map((data, index) => {
          <div>
          {(() => {
            var color = 'red'
            var orientation = 'left'
                  
            if ((index + 1) % 3 == 1) {
              if (color == 'red') {
                color = 'black'
              } else {
                color = 'red'
              }
              if (orientation == 'left') {
                orientation = 'right'
              } else {
                orientation = 'left'
              }
            }
  
            if ((color == 'red') && (orientation == 'right')) {
              return (<div className={styles.container_1r} key={index}>
                {rowData.slice(0,1).map((data, index) => 
                  <div className={styles.event_resource_content} key={index} data-heading={data.key} style={{
                      color:'white',
                      fontWeight:'bold'
                    }}>
                    {data.val}
                  </div>)})
                {rowData.slice(1,3).map((data, index) => 
                  <div className={styles.event_resource_content} key={index} data-heading={data.key} style={{
                      color:'white'
                    }}>
                    {data.val}
                  </div>)}
                {rowData.slice(3,4).map((data, index) =>
                  <button onClick={() => {
                    displayDetails(data.val);
                  }} style={{
                      backgroundColor:'yellow', 
                      fontSize:'15px',
                      color: '#ed4924',
                      borderColor: '#ed4924',
                      paddingLeft: '20px',
                      paddingRight: '20px'
                  }}>
                    Details
                  </button>)}
              </div>)
            } else if ((color == 'red') && (orientation == 'left')) {
              return(<div className={styles.container_2r} key={index}>
                {rowData.slice(0,1).map((data, index) => 
                  <div className={styles.event_resource_content} key={index} data-heading={data.key} style={{
                      color:'white',
                      fontWeight:'bold'
                    }}>
                    {data.val}
                  </div>)}
                {rowData.slice(1,3).map((data, index) => 
                  <div className={styles.event_resource_content} key={index} data-heading={data.key} style={{
                      color:'white'
                    }}>
                    {data.val}
                  </div>)}
                {rowData.slice(3,4).map((data, index) =>
                  <button onClick={() => {
                    displayDetails(data.val);
                  }} style={{
                      backgroundColor:'yellow', 
                      fontSize:'15px',
                      color: '#ed4924',
                      borderColor: '#ed4924',
                      paddingLeft: '20px',
                      paddingRight: '20px'
                  }}>
                    Details
                  </button>)}
              </div>)
            } else if ((color == 'black') && (orientation == 'left')) {
              return (<div className={styles.container_1b} key={index}>
                {rowData.slice(0,1).map((data, index) => 
                  <div className={styles.event_resource_content} key={index} data-heading={data.key} style={{
                      color:'white',
                      fontWeight:'bold'
                    }}>
                    {data.val}
                  </div>)}
                {rowData.slice(1,3).map((data, index) => 
                  <div className={styles.event_resource_content} key={index} data-heading={data.key} style={{
                      color:'white'
                    }}>
                    {data.val}
                  </div>)}
                {rowData.slice(3,4).map((data, index) =>
                  <button onClick={() => {
                    displayDetails(data.val);
                  }} style={{
                      backgroundColor:'yellow', 
                      fontSize:'15px',
                      color: '#ed4924',
                      borderColor: '#ed4924',
                      paddingLeft: '20px',
                      paddingRight: '20px'
                  }}>
                    Details
                  </button>)}
              </div>)
            } else if ((color == 'black') && (orientation == 'right')) {
              return(<div className={styles.container_2b} key={index}>
              {rowData.slice(0,1).map((data, index) => 
                <div className={styles.event_resource_content} key={index} data-heading={data.key} style={{
                    color:'white',
                    fontWeight:'bold'
                  }}>
                  {data.val}
                </div>)}
              {rowData.slice(1,3).map((data, index) => 
                <div className={styles.event_resource_content} key={index} data-heading={data.key} style={{
                    color:'white'
                  }}>
                  {data.val}
                </div>)}
              {rowData.slice(3,4).map((data, index) =>
                <button onClick={() => {
                  displayDetails(data.val);
                }} style={{
                    backgroundColor:'yellow', 
                    fontSize:'15px',
                    color: '#ed4924',
                    borderColor: '#ed4924',
                    paddingLeft: '20px',
                    paddingRight: '20px'
                }}>
                  Details
                </button>)}
              </div>)
            }
            })()}
          </div>
        })}
      </div>
    });

    return (
        <div className={styles.event_resource_grid}>
            {event}
        </div>
    );
};

export default Event 