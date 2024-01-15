import { useRef, useEffect } from 'react';
import { Icon, Marker } from 'leaflet';
import useMap from '../../../hooks/useMap';
import type { TCity, TPoints, TPoint } from '../../../types/map';
import 'leaflet/dist/leaflet.css';
import URL_MARKER_DEFAULT from './images/pin.svg';
import URL_MARKER_CURRENT from './images/pin-active.svg';

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [30, 30],
  iconAnchor: [20, 40],
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [30, 30],
  iconAnchor: [20, 40],
});

interface IMap {
  city: TCity;
  points: TPoints;
  selectedPoint: TPoint | null;
}

function Map(props: IMap): JSX.Element {
  const { city, points, selectedPoint } = props;

  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      points.forEach((point) => {
        const marker = new Marker({
          lat: point.latitude,
          lng: point.longitude,
        });

        marker
          .setIcon(
            selectedPoint !== null && point.id === selectedPoint.id
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(map);
      });
    }
  }, [map, points, selectedPoint]);

  return <section className="cities__map map" ref={mapRef}></section>;
}

export default Map;
