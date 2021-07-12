
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

      Object.entries(row).forEach((data, i) => {
        rowData.push({
        key: headingColumns[i],
        val: data[1]
        });
      });

      const displayDetails = (data) => {
        alert(`${data}`);
      }

      return <div className={styles.event_container_1r} key={index}>
          {rowData.slice(0,3).map((data, index) => 
          <div className={styles.event_content} key={index} data-heading={data.key} style={{
              color:'white'
          }}>
            {data.val}
          </div>)}
          {rowData.slice(3,4).map((data, index) =>
          <button onClick={() => {
            displayDetails(data.val);
          }} style={{
              backgroundColor:'yellow', 
              paddingLeft:'15px', 
              paddingRight:'15px',
              fontSize:'15px',
              borderRadius:'5px'
          }}>Details</button>)}
      </div>
    });
    // const data = (eventsData as Array<EventsData>).map((row, index) => {
    //     return <div key={index} className={styles.event_container_1r}>
    //         {eventsData.map((data, index) => <div className={styles.event_content} key={index}>
    //             {data}
    //             </div>
    //         )}
    //     </div>
    // });

    return (
        
        <div className={styles.eventsgrid}>
            {event}
        </div>
        
    );
};

export default Event