
import React, { FC } from 'react';
import styles from '../styles/Home.module.css'
import { ResourcesData } from '../pages/resources';

interface ResourceProps {
    resourcesData: ResourcesData[]
    headingColumns: string[]
}
  
const Event: FC<ResourceProps> = ({resourcesData}: ResourceProps, headingColumns) => {
    const event = (resourcesData as Array<ResourcesData>).map((row, index) => {
      let rowData: { key: string; val: string | number; }[] = [];

      Object.entries(row).forEach((data, i) => {
        rowData.push({
        key: headingColumns[i],
        val: data[1]
        });
      });

      const displayDetails = (data) => {
        window.location.href = data;
      }

      return <div className={styles.container_1r} key={index}>
          {rowData.slice(0,1).map((data, index) => 
          <div className={styles.event_resource_content} key={index} data-heading={data.key} style={{
              color:'white',
              fontWeight:'bold'
          }}>
            {data.val}
          </div>)}
          {rowData.slice(1,2).map((data, index) => 
          <div className={styles.event_resource_content} key={index} data-heading={data.key} style={{
              color:'white',
          }}>
            {data.val}
          </div>)}
          {rowData.slice(2,3).map((data, index) =>
          <button onClick={() => {
            displayDetails(data.val);
          }} style={{
              backgroundColor:'yellow', 
              fontSize:'15px',
              color: '#ed4924',
              borderColor: '#ed4924',
              paddingLeft: '20px',
              paddingRight: '20px'
          }}>Details</button>)}
      </div>
    });

    return (
        
        <div className={styles.event_resource_grid}>
            {event}
        </div>
        
    );
};

export default Event