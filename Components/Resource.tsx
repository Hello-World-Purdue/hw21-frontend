
import React, { FC } from 'react';
import styles from '../styles/Home.module.css'
import { ResourcesData } from '../pages/resources';

interface ResourceProps {
    resourcesData: ResourcesData[]
    headingColumns: string[]
}
  
export const Resource: FC<ResourceProps> = ({resourcesData}: ResourceProps, headingColumns) => {
  const displayDetails = (data) => {
    alert(`${data}`);
  }

  var color = "black";
  var resourcesDivs = [];

  resourcesData.map((data, index) => {
    if(index % 3 == 0) {
      if(color == "black"){
        color = "red";
      }
      else {
        color = "black";
      }
    }
      
    if(color == "red") {
      resourcesDivs[index] = 

        <div className={styles.container_1r}>

        <div className={styles.event_resource_content} >
          <br></br>
          <div className={styles.event_name}> {data.name}</div>
        </div>
          <br></br>
        <button key={index} onClick={() => {displayDetails(data.details)}}
        className={styles.event_button_1r}>
          DETAILS
        </button>

        </div>
      }
      else { //color == black
        resourcesDivs[index] = 
      <div className={styles.container_1b}>
        <div className={styles.event_resource_content} >
        <br></br>
        <div className={styles.event_name}> {data.name}</div>
        </div>
        <br></br>
        <button key={index} onClick={() => {displayDetails(data.details)}}
        className={styles.event_button_1b}>
          DETAILS
        </button>
        </div>
      }
     })
  
     return (
        <div className={styles.event_resource_grid}>
          {resourcesDivs.map((r) => (
          <div>{r}</div> 
          ))}
        </div>
    )
}