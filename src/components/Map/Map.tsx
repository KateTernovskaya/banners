import React, { useState } from 'react';
import { YMaps, Map, Placemark, ZoomControl } from '@pbe/react-yandex-maps';
import styles from './Map.module.scss';
import { SectionTitle } from '../../shared';
import iconLocation from '../../shared/assets/icons/location.svg';
import { API_KEY, locations } from './data';
import Balloon from '../Balloon';
import { TLocations } from './types';

const MapN = () => {
  const [location, setLocation] = useState<TLocations | null>(null);

  return (
    <div id="map">
      <SectionTitle title="Локации" />
      <div className={styles.mapContainer}>
        <YMaps query={{ apikey: API_KEY, lang: 'ru_RU' }}>
          <Map
            defaultState={{
              center: [60.93, 76.59],
              zoom: 12,
            }}
            width="100%"
            height="100%"
            options={{ suppressMapOpenBlock: true }}
            modules={['control.ZoomControl', 'control.FullscreenControl']}
          >
            <ZoomControl options={{ position: { right: 10, top: 10 } }} />

            {locations.map((loc) => {
              return (
                <Placemark
                  key={loc.id}
                  geometry={loc.coords}
                  properties={{
                    hintContent: loc.address,
                  }}
                  options={{
                    iconLayout: 'default#image',
                    iconImageHref: iconLocation,
                    iconImageSize: [40, 40],
                    iconImageOffset: [-20, -40],
                  }}
                  onClick={() => setLocation(loc)}
                  modules={['geoObject.addon.hint']}
                />
              );
            })}
          </Map>
        </YMaps>
        {location && (
          <div className={styles.baloon}>
            <Balloon
              address={location.address}
              format={location.format}
              photos={location.photos}
              onClose={() => setLocation(null)}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default MapN;
