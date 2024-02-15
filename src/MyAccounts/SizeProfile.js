import React, { useState, useEffect } from 'react'
import './myAccounts.css'

const SizeProfile = () => {

  const [measurementsData, setMeasurementsData] = useState({});

  useEffect(()=>{

    fetch('https://api.eshakti.com/user/sizeprofile',{
     headers:{
      'Authorization' : 'Bearer E46C12C9DE99CEBC42A4E21413F36C8998D08223936EE876BA6207BDCE3AE6BBB47E1C77F2F977A99ACF3598AED263731DEAE76D1F7A1A960B347E4FD182C9D3A388E7852F4112B9BEE698482BE95C5E319A0D9CAB0D9CF27B179BF53E93A29C3BAEFE642A74DCDA7876C3068D7245F5'
     } 
    })
    .then(response => {
      if(!response.ok){
        throw new Error('Authorization error :' + response.status);
      }
       return response.json();
  })
    .then(data => {
      console.log(data);
     setMeasurementsData(data.measurements);
    })
    .catch(error => console.log("unable to fetch the data", error));
  }, []);

  const hardcodedMeasurementNames = [
    "Shoulder", "Waist", "Upperarm", "Hip At Crotch",
    "Chest", "Wearing Waist", "Inseam", "Calf",
    "Bust", "Hip", "Outseam", "Underbust",
    "Thigh", "Total Rise", "Bust Point", "Front Hip",
    "Back Rise", "Knee", "Back Hip", "Knee",
    "Waist", "Wearing Waist to Knee Position", "Front Rise"
  ];

 return (
    <div className="myaccount-right" id="sizeprofilecontainer">
      <div className="sizeprofileheader"><b>Size profile</b></div>
      <div className="borderbox-sizeprofile">
        <div className="measurements">
          {hardcodedMeasurementNames.map((name, index) => {
            const measurement = measurementsData.find(measurement => measurement.name === name);
            return (
              <div key={index} className="measurementscol">
                {measurement && (
                  <React.Fragment>
                    <p>{name} - {measurement.value}</p>
                  </React.Fragment>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );

}

export default SizeProfile;