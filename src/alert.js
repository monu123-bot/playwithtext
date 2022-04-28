import React from 'react'

export const Alert = (props) => {
  
  const style = {
    height:'4rem',
    alignItems:'center',
    textAlign:'center'
    
  }
    return (
     <div style={style}>
       {
    props.alert1 &&  <div  style={style} className={`alert alert-${props.alert1.type}`} role="alert">
  <strong>{props.alert1.type} : </strong>{props.alert1.msg}
  </div>}
</div>

    )
}
