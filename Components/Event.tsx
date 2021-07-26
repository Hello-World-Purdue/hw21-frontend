
import React, { FC } from 'react';
import styles from '../styles/Home.module.css'
import { EventsData } from '../pages/schedule';

interface EventProps {
    eventsData: EventsData[]
    headingColumns: string[]
}
  
export const Event: FC<EventProps> = ({eventsData}: EventProps, headingColumns) => {
  console.log("eventsData[0]:" + eventsData[0].name);

 
    /*const event = (eventsData as Array<EventsData>).map((row, index) => {
      let rowData: { key: string; val: string | number; }[] = [];
      
      // build rowData
      Object.entries(row).forEach((data, i) => {
        rowData.push({
        key: headingColumns[i],
        val: data[1]
        });
      });
      */
      // define displayDetails - Idk what this does in typescript/jsx
     const displayDetails = (data) => {
        alert(`${data}`);
      }
      
      var color = "black";
      var orientation = "left";
      
      var resources = [];

     eventsData.map((data, index) => {
        if(index % 3 == 0) {
          if(color == "black"){
            color = "red";
          }
          else {
            color = "black";
          }
        }
        if(color == "red") {
        resources[index] = 
        <div className={styles.container_1r}>
          <div className={styles.event_resource_content}  >
          <div className={styles.event_name}> {data.name}</div>
          </div>
          <div className={styles.event_resource_content} key={index} >
            <div className={styles.event_text}>
          <p>{data.times}</p>
          <p>{data.locations}</p>
          </div>
          </div>
          <button key={index} onClick={() => {displayDetails(data.details)}}
          className={styles.event_button}>
          Details
          </button>
          </div>
        
        }
        else { //color == black
          resources[index] = 
        <div className={styles.container_1b}>
          <div className={styles.event_resource_content}  >
          <div className={styles.event_name}> {data.name}</div>
          </div>
          <div className={styles.event_resource_content} key={index} >
            <div className={styles.event_text}>
          <p>{data.times}</p>
          <p>{data.locations}</p>
          </div>
          </div>
          <button key={index} onClick={() => {displayDetails(data.details)}}
          className={styles.event_button}>
          Details
          </button>
          </div>
        }

      })
    

return (
 <div className={styles.event_resource_grid}>
     {resources.map((r) => (
 <div>{r}</div> 
 ))}
   </div>
 )


// return <div>
//         {rowData.map((data, index) => {
//           <div key={index}>
//           {(() => {
//             var color = 'red'
//             var orientation = 'left'
//                   console.log(index);
//             if ((index + 1) % 3 == 1) {
//               if (color == 'red') {
              
//                 color = 'black'
//               } else {
//                 color = 'red'
//               }
//               if (orientation == 'left') {
//                 orientation = 'right'
//               } else {
//                 orientation = 'left'
//               }
//             }
  
//             if ((color == 'red') && (orientation == 'right')) {
//               return (<div className={styles.container_1r} key={index}>
//                 {rowData.slice(0,1).map((data, index) => 
//                   <div className={styles.event_resource_content} key={index} data-heading={data.key} style={{
//                       color:'white',
//                       fontWeight:'bold'
//                     }}>
//                     {data.val}
//                   </div>)})
//                 {rowData.slice(1,3).map((data, index) => 
//                   <div className={styles.event_resource_content} key={index} data-heading={data.key} style={{
//                       color:'white'
//                     }}>
//                     {data.val}
//                   </div>)}
//                 {rowData.slice(3,4).map((data, index) =>
//                   <button key={index} onClick={() => {
//                     displayDetails(data.val);
//                   }} style={{
//                       backgroundColor:'yellow', 
//                       fontSize:'15px',
//                       color: '#ed4924',
//                       borderColor: '#ed4924',
//                       paddingLeft: '20px',
//                       paddingRight: '20px'
//                   }}>
//                     Details
//                   </button>)}
//               </div>)
//             } else if ((color == 'red') && (orientation == 'left')) {
//               return(<div className={styles.container_2r} key={index}>
//                 {rowData.slice(0,1).map((data, index) => 
//                   <div className={styles.event_resource_content} key={index} data-heading={data.key} style={{
//                       color:'white',
//                       fontWeight:'bold'
//                     }}>
//                     {data.val}
//                   </div>)}
//                 {rowData.slice(1,3).map((data, index) => 
//                   <div className={styles.event_resource_content} key={index} data-heading={data.key} style={{
//                       color:'white'
//                     }}>
//                     {data.val}
//                   </div>)}
//                 {rowData.slice(3,4).map((data, index) =>
//                   <button key={index} onClick={() => {
//                     displayDetails(data.val);
//                   }} style={{
//                       backgroundColor:'yellow', 
//                       fontSize:'15px',
//                       color: '#ed4924',
//                       borderColor: '#ed4924',
//                       paddingLeft: '20px',
//                       paddingRight: '20px'
//                   }}>
//                     Details
//                   </button>)}
//               </div>)
//             } else if ((color == 'black') && (orientation == 'left')) {
//               return (<div className={styles.container_1b} key={index}>
//                 {rowData.slice(0,1).map((data, index) => 
//                   <div className={styles.event_resource_content} key={index} data-heading={data.key} style={{
//                       color:'white',
//                       fontWeight:'bold'
//                     }}>
//                     {data.val}
//                   </div>)}
//                 {rowData.slice(1,3).map((data, index) => 
//                   <div className={styles.event_resource_content} key={index} data-heading={data.key} style={{
//                       color:'white'
//                     }}>
//                     {data.val}
//                   </div>)}
//                 {rowData.slice(3,4).map((data, index) =>
//                   <button key={index} onClick={() => {
//                     displayDetails(data.val);
//                   }} style={{
//                       backgroundColor:'yellow', 
//                       fontSize:'15px',
//                       color: '#ed4924',
//                       borderColor: '#ed4924',
//                       paddingLeft: '20px',
//                       paddingRight: '20px'
//                   }}>
//                     Details
//                   </button>)}
//               </div>)
//             } else if ((color == 'black') && (orientation == 'right')) {
//               return(<div className={styles.container_2b} key={index}>
//               {rowData.slice(0,1).map((data, index) => 
//                 <div className={styles.event_resource_content} key={index} data-heading={data.key} style={{
//                     color:'white',
//                     fontWeight:'bold'
//                   }}>
//                   {data.val}
//                 </div>)}
//               {rowData.slice(1,3).map((data, index) => 
//                 <div className={styles.event_resource_content} key={index} data-heading={data.key} style={{
//                     color:'white'
//                   }}>
//                   {data.val}
//                 </div>)}
//               {rowData.slice(3,4).map((data, index) =>
//                 <button key={index} onClick={() => {
//                   displayDetails(data.val);
//                 }} style={{
//                     backgroundColor:'yellow', 
//                     fontSize:'15px',
//                     color: '#ed4924',
//                     borderColor: '#ed4924',
//                     paddingLeft: '20px',
//                     paddingRight: '20px'
//                 }}>
//                   Details
//                 </button>)}
//               </div>)
//             }
//             })()}
//           </div>
//         })}
//       </div>
//     });

    // return (
    //     <div className={styles.event_resource_grid}>
    //         {event}
    //     </div>
    // );
    
}

