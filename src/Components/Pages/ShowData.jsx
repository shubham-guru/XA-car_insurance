import React from "react";
import "../css/ShowData.css";
import 'animate.css';
const ShowData = (props) => {
    return(
        <>

            {/* Header Contain VIN no. */}
            <div className="heading">   
                <div className="animate__flash">
                    <span>VIN No.</span>
                    <h3>{props.details[0]}</h3>

                </div>
            </div><br/><br/>
            {/* END */}

            {/* Title */}
            <div className="title">
            <h2>Don't worry we got you covered ! 😄</h2>
            </div><br/><br/>
            {/* END */}


            {/* Headers for Vehicle DATA */}
            <div className="Vehicle_data">
                <div className="upperBar">General Info : </div>

                    <table className="table">
                        <tr>
                            <th>MODEL YEAR :</th>
                            <td>{props.details[1]}</td>
                            <th>MAKE :</th>
                            <td>{props.details[2]}</td>
                        </tr>
                        <tr>
                            <th>MODEL :</th>
                            <td>{props.details[3]}</td>
                            <th>TRIM :</th>
                            <td>{props.details[4]}</td>
                        </tr>
                        <tr>
                            <th>BODY TYPE :</th>
                            <td>{props.details[5]}</td>
                            <th>ENGINE SIZE :</th>
                            <td>{props.details[6]}</td>
                        </tr>
                        <tr>
                            <th>DOORS :</th>
                            <td>{props.details[7]}</td>
                            <th>SEATS :</th>
                            <td>{props.details[8]}</td>
                        </tr>
                        <tr>
                            <th>CYCLINDERS :</th>
                            <td>{props.details[9]}</td>
                            <th>COLOR :</th>
                            <td>White</td>
                        </tr>
                        
                    </table>
            </div>

        </>
    );
}      
export default ShowData;