import React,{useState} from 'react';


export const About = (props) => {
  const style = {
    height:'87vh'
  }
    
    return (
        <div  className='container' style={style}>
            <h1>About Us </h1>
            <div className="accordion" id="accordionExample">
  <div style={props.dark} className="accordion-item">
    <h2 style={props.dark} className="accordion-header" id="headingOne">
      <button style={props.dark} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Change to uppercase
      </button>
    </h2>
    <div  id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        .....
        </div>
    </div>
  </div>
  <div style={props.dark}  className="accordion-item">
    <h2 style={props.dark} className="accordion-header" id="headingTwo">
      <button  style={props.dark} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Change to lowercase
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      .....  </div>
    </div>
  </div>
  <div  style={props.dark} className="accordion-item">
    <h2  className="accordion-header" id="headingThree">
      <button style={props.dark} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Remove extra spaces
      </button>
    </h2>
    <div  style={props.dark} id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      .....   </div>
    </div>
  </div>
</div>
            </div>
    )
}
