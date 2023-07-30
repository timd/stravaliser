import { useLoadScript, GoogleMap, Marker, PolylineF, MarkerF } from '@react-google-maps/api';
import type { NextPage } from 'next';
import { useMemo } from 'react';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  const libraries = useMemo(() => ['places'], []);
  const mapCenter = useMemo(
    () => ({lat: 25.774, lng: -80.290}),
    []
  );

  const triangleCoords = [
    {lat: 25.774, lng: -81.290},
    {lat: 20.774, lng: -80.190},
    {lat: 25.774, lng: -79.090},
    {lat: 25.774, lng: -81.290},
  ];

  const mapOptions = useMemo<google.maps.MapOptions>(
    () => ({
      disableDefaultUI: false,
      clickableIcons: true,
      scrollwheel: false,
    }),
    []
  );

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY as string,
    libraries: libraries as any,
  });

  if (!isLoaded) {
    return <p>Loading...</p>;
  }

  return (
    <div className={styles.homeWrapper}>
      
      <GoogleMap
        options={mapOptions}
        zoom={14}
        center={mapCenter}
        mapTypeId={google.maps.MapTypeId.ROADMAP}
        mapContainerStyle={{ width: '100%', height: '1000px' }}
        onLoad={(map) => console.log('Map Loaded')}
      >
      <MarkerF label={""} position={mapCenter} onLoad={() => console.log('Marker Loaded')} />
      <PolylineF path={triangleCoords} onLoad={() => console.log('Polyline Loaded')} />
      </GoogleMap>


    </div>
  );
};

export default Home;