import React, { useEffect, useState } from "react";
import Map from "react-map-gl";

import { AddressMapProps } from "./index.d";

import {
  StyledAddressMapPending,
  StyledAddressMapWrapper
} from "./style";


const MAPBOX_TOKEN = 'pk.eyJ1IjoidGhldG91cmVyIiwiYSI6ImNqaWNxOGdudTAzbHUzd3JvM25xc3R1cWUifQ.9WThxGQjgxI-mdW1XpFydQ';

const buildGeocodeUrl = (address: string) => {
  const addressEncoded = encodeURIComponent(address);
  return `https://api.mapbox.com/geocoding/v5/mapbox.places/${addressEncoded}.json?access_token=${MAPBOX_TOKEN}`;
};


const AddressMap = (props: AddressMapProps) => {
  const { address } = props;

  const [coordinates, setCoordinates] = useState<{
    latitude: number;
    longitude: number;
  }>();

  const handleSetCoordinates = (coordArray?: number[]) => {
    if (coordArray) {
      setCoordinates({
        latitude: coordArray[1],
        longitude: coordArray[0]
      });
    }
  };

  useEffect(() => {
    if (!address) {
      setCoordinates(undefined);
    }

    const resolveAddress = async () => {
      if (!address) {
        return;
      }
      const url = buildGeocodeUrl(address);

      await fetch(url)
        .then((resp) => {
          return resp.json();
        })
        .then((data) => {
          const feature = data.features?.[0];
          if (feature) {
            handleSetCoordinates(feature.geometry.coordinates);
          }
        });
    };

    resolveAddress();
  },[address]);

  return (
    <StyledAddressMapWrapper>
      {
        coordinates ? (
          <Map
            style={{ width: 518, height: 336 }}
            mapStyle="mapbox://styles/mapbox/streets-v9"
            mapboxAccessToken={MAPBOX_TOKEN}

            longitude={coordinates?.longitude || 0}
            latitude={coordinates?.latitude || 0}
            zoom={14}

            boxZoom={false}
            doubleClickZoom={false}
            dragRotate={false}
            dragPan={false}
            keyboard={false}
            scrollZoom={false}
            touchPitch={false}
            touchZoomRotate={false}
          />
        ) : (
          <StyledAddressMapPending>
            Enter a valid address to view map
          </StyledAddressMapPending>
        )
      }
    </StyledAddressMapWrapper>
  );
};


export default AddressMap;
