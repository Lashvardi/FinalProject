import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as mapboxgl from 'mapbox-gl';
import { Car } from 'src/app/models/car';
import { GetCarService } from 'src/app/services/get-car.service';
import { FeatureCollection } from 'geojson';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent {
  car: Car | undefined;
  map: any;

  constructor(
    private route: ActivatedRoute,
    private carService: GetCarService
  ) {}

  ngOnInit() {
    const carIdString = this.route.snapshot.paramMap.get('id');
    if (carIdString) {
      const carId = +carIdString;
      this.getCarDetails(carId);
    }
    this.getUserLocation();
  }

  getCarDetails(carId: number) {
    setTimeout(() => {
      this.carService.GetCarById(carId).subscribe(
        (car) => {
          this.car = car;
          console.log(this.car);
          if (this.car) {
            this.markers = this.GenerateMarker([this.car]);
          }
        },
        (error) => console.error(error)
      );
    }, 200);
  }

  infoBoxImageSrc: string | null = null;
  infoBoxModel: string | null = null;
  infoBoxMark: string | null = null;
  infoBoxDistance: string | null = null;
  mapLoading: boolean = true;

  markers: Array<{ latitude: number; longitude: number; type?: string }> = [];

  getClusterRadius(zoom: number) {
    return Math.min(Math.max(50 / Math.pow(2, zoom - 9), 5), 50);
  }

  onMapLoad(map: mapboxgl.Map) {
    this.mapLoading = false;
    map.loadImage('../../../assets/Icon.png', (error, image) => {
      if (error) {
        console.error('Error loading custom marker image:', error);
        return;
      }
      if (image) {
        map.addImage('custom-marker', image as HTMLImageElement | ImageBitmap);
      } else {
        console.error('Image is undefined.');
      }
    });
  }

  isValidCoordinate(coord: any): boolean {
    if (!Array.isArray(coord) || coord.length !== 2) {
      return false;
    }

    const [longitude, latitude] = coord;
    return (
      typeof latitude === 'number' &&
      typeof longitude === 'number' &&
      latitude >= -90 &&
      latitude <= 90 &&
      longitude >= -180 &&
      longitude <= 180
    );
  }

  async fetchLocationInfo(
    latitude: number,
    longitude: number
  ): Promise<string> {
    const geocodingAPIURL = `https://api.mapbox.com/geocoding/v5/mapbox.places/${longitude},${latitude}.json?access_token=<Insert YOur Token>`;

    try {
      const response = await fetch(geocodingAPIURL);
      const data = await response.json();
      if (data.features && data.features.length > 0) {
        console.log(data);
        return data.features[0].text;
      } else {
        console.error('No location information found');
        return 'Unknown Location';
      }
    } catch (error) {
      console.error('Error fetching location information:', error);
      return 'Error Fetching Location';
    }
  }

  async getDirections(
    origin: mapboxgl.LngLatLike,
    destination: mapboxgl.LngLatLike
  ) {
    const originCoords =
      origin instanceof mapboxgl.LngLat
        ? [origin.lng, origin.lat]
        : (origin as [number, number]);
    const destinationCoords =
      destination instanceof mapboxgl.LngLat
        ? [destination.lng, destination.lat]
        : (destination as [number, number]);

    if (
      !this.isValidCoordinate(originCoords) ||
      !this.isValidCoordinate(destinationCoords)
    ) {
      console.error('Invalid origin or destination coordinates:', {
        origin: originCoords,
        destination: destinationCoords,
      });
      return;
    }

    const directionsAPIURL = `https://api.mapbox.com/directions/v5/mapbox/driving/${originCoords[0]},${originCoords[1]};${destinationCoords[0]},${destinationCoords[1]}?access_token=pk.eyJ1IjoibGFzaHZhcmRpIiwiYSI6ImNsZmd6MzgzbzFibjYzdG56Y2JvbDVscGcifQ.U3o0WZs8iM9EhWIJ1XoBzQ&geometries=geojson`;

    try {
      const response = await fetch(directionsAPIURL);
      const data = await response.json();

      if (data.routes && data.routes.length > 0) {
        const route = data.routes[0];

        this.routeGeoJSON = {
          type: 'geojson',
          data: {
            type: 'FeatureCollection',
            features: [
              {
                type: 'Feature',
                geometry: route.geometry,
                properties: {},
              },
            ],
          },
        };
      } else {
        console.error('No routes found');
      }
    } catch (error) {
      console.error('Error fetching directions:', error);
    }
  }

  markersGeoJSON: FeatureCollection = {
    type: 'FeatureCollection',
    features: [],
  };

  GenerateMarker(
    cars: Car[]
  ): Array<{ latitude: number; longitude: number; type?: string }> {
    const markers: { latitude: number; longitude: number }[] = [];

    cars.forEach((car) => {
      markers.push({ latitude: car.latitude, longitude: car.longitude });

      this.markersGeoJSON.features.push({
        type: 'Feature',
        properties: { markerType: 'location' },
        geometry: {
          type: 'Point',
          coordinates: [car.longitude, car.latitude],
        },
      });
    });

    return markers;
  }
  routeGeoJSON: mapboxgl.GeoJSONSourceRaw | null = null;
  userLocation: mapboxgl.LngLat | null = null;

  getUserLocation(callback?: () => void) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const userCoords: [number, number] = [
          position.coords.longitude,
          position.coords.latitude,
        ];
        this.userLocation = new mapboxgl.LngLat(userCoords[0], userCoords[1]);

        if (this.car) {
          this.markers = this.GenerateMarker([this.car]);
        }

        if (callback) {
          callback();
        }
      },
      (error) => {
        console.error('Error getting user location:', error);
      }
    );
  }

  //TODO: Calculates the distance between two points in km's
  async onLayerMarkerClick(event: any) {
    const coordinates = event.lngLat;
    const marker = { latitude: coordinates.lat, longitude: coordinates.lng };

    if (this.userLocation) {
      const markerCoords = event.lngLat;

      const distanceInMeters = this.userLocation.distanceTo(markerCoords);
      const distanceInKilometers = distanceInMeters / 1000;
      console.log(`დისტანცია: ${distanceInKilometers.toFixed(2)} კილომეტრი`);

      this.infoBoxImageSrc =
        this.car?.imageUrl1 || `აქ მანქანის სახელი უნდა იყოს`;
      this.infoBoxModel = this.car?.brand || 'აქ მანქანის ბრენდი';
      this.infoBoxImageSrc = this.car?.imageUrl1 || null;
      this.infoBoxModel = this.car?.model || null;
      this.infoBoxMark = this.car?.brand || null;

      this.infoBoxDistance = `დისტანცია: ${distanceInKilometers.toFixed(
        2
      )} კილომეტრი`;

      this.getDirections(this.userLocation, [
        marker.longitude,
        marker.latitude,
      ]);
    } else {
      console.warn('User location not available');
    }
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const userCoords: [number, number] = [
          position.coords.longitude,
          position.coords.latitude,
        ];
        this.userLocation = new mapboxgl.LngLat(userCoords[0], userCoords[1]);
        this.getDirections(userCoords, [marker.longitude, marker.latitude]);
      },
      (error) => {
        console.error('Error getting user location:', error);
      }
    );
  }
}
