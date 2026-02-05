import React, { useRef } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { useLoaderData } from 'react-router';
import 'leaflet/dist/leaflet.css'
const Coverage = () => {
    const position = [23.6850, 90.3563]
    const ServiceCenter=useLoaderData()
    const mapRef=useRef()

    const handleSearch=(e)=>{
        e.preventDefault()
        const location=e.target.location.value;
        const district=ServiceCenter.find(c=>c.district.toLowerCase().includes(location.toLowerCase()));
        if(district){
            const coord=[district.latitude,district.longitude];
            mapRef.current.flyTo(coord,12)

        }
    }

        
    return (
        <div>
            <h1 className='text-4xl font-bold mb-10'>We are available in 64 districts</h1>
            <div>
                <form onSubmit={handleSearch}>
                    <label className="input">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <circle cx="11" cy="11" r="8"></circle>
      <path d="m21 21-4.3-4.3"></path>
    </g>
  </svg>
  <input type="search" name='location' required placeholder="Search" />
  <button className='btn btn-primary text-secondary mr-[-15px]'>join</button>
</label>
                </form>

            </div>
            {/*  */}
            <div className=' w-full  h-[800px]  mb-30'>
                <h1 className='text-3xl font-bold mt-10 mb-10'>We deliver almost all over Bangladesh</h1>
                <MapContainer
                 center={position}
                  zoom={10}
      scrollWheelZoom={false}
      className='h-[800px] border '
      ref={mapRef}

      >
                     <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    {
        ServiceCenter.map((center,index)=><Marker key={index} position={[center.latitude,center.longitude
        ]}>
        <Popup>
             <strong>{center.district}</strong> <br /> {center.covered_area.join(', ')}
        </Popup>
    </Marker>) 
    }
    
                </MapContainer>
            </div>
        </div>
    );
};

export default Coverage;