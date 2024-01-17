import { useEffect, useCallback } from 'react';
import styled from 'styled-components';

const MapContainer = styled.div`
  margin-bottom: 8rem;
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MapTitle = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
  color: #06439F;
  margin-top: 1rem;
`;

const Map = ({ latitude, longitude }) => {
  useEffect(()=>{
    var container = document.getElementById('map');
    var options = {
      // eslint-disable-next-line no-undef
      center: new kakao.maps.LatLng(37.365264512305174, 127.10676860117488),
      level: 3
    };
    // eslint-disable-next-line no-undef
    var map = new kakao.maps.Map(container, options);
    }, [])


    return (
      <MapContainer>
      <MapTitle>
        Where you’ll be
      </MapTitle>
      <div>
        330, Cheomdan-ro, Jeju-si, Jeju-do, Republic of Korea
      </div>
        <div>
        	<div id="map" style={{width:"1000px", height:"400px"}}></div> 
        </div>
        </MapContainer>
    )
};


export default Map;
