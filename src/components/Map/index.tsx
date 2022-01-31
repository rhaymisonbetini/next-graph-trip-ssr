import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

type Places = {
    id: string,
    name: string,
    slug: string,
    location: {
        latitude: number,
        longitude: number
    }
}

export type MapProps = {
    places: Places[]
}


const Map = ({ places }: MapProps) => {
    return (
        < MapContainer
            center={[0, 0]}
            zoom={3}
            style={{ height: '100vh', width: '100%', position: 'absolute' }} >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {
                places?.map(({ id, slug, name, location }) => {
                    const { latitude, longitude } = location;
                    return (
                        <Marker position={[latitude, longitude]} title={name} key={`places-${id}`}>
                            <Popup>
                                A pretty CSS3 popup. <br /> Easily customizable.
                            </Popup>
                        </Marker>
                    )
                })
            }
        </MapContainer >
    )
}

export default Map