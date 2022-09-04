import React from "react";
import {
  ZoomableGroup,
  ComposableMap,
  Geographies,
  Geography,
  Graticule,
  Annotation,
  Marker,
  Line,
} from "react-simple-maps";
//Worldmap
const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const rounded = (num) => {
  if (num > 1000000000) {
    return Math.round(num / 100000000) / 10 + "Bn";
  } else if (num > 1000000) {
    return Math.round(num / 100000) / 10 + "M";
  } else {
    return Math.round(num / 100) / 10 + "K";
  }
};

export const WorldMap = ({ setTooltipContent }) => {
  return (
    <>
      <ComposableMap
        projectionConfig={{ scale: 200 }}
        className="worldmaps "
      >
        <ZoomableGroup zoom={1}>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onMouseEnter={() => {
                    const { NAME, POP_EST } = geo.properties;
                    setTooltipContent(`${NAME} — ${rounded(POP_EST)}`);
                  }}
                  onMouseLeave={() => {
                    setTooltipContent("");
                  }}
                  style={{
                    default: {
                      fill: "lightgrey",
                      outline: "none",
                    },
                    hover: {
                      fill: "#6259ca",
                      outline: "none",
                    },
                  }}
                />
              ))
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
    </>
  );
};
//End

//LineMap
const geoUrl1 =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

export const Mapline = () => {
  return (
    <ComposableMap
      projection="geoEqualEarth"
      projectionConfig={{
        scale: 620,
        center: [-40, 30],
      }}
    >
      <ZoomableGroup zoom={1}>
        <Graticule stroke="#DDD" />
        <Geographies
          className="h-900"
          geography={geoUrl1}
          fill="#D6D6DA"
          stroke="#FFFFFF"
          strokeWidth={1}
        >
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography key={geo.rsmKey} geography={geo} />
            ))
          }
        </Geographies>
        <Line
          from={[2.3522, 48.8566]}
          to={[-74.006, 40.7128]}
          stroke="#FF5533"
          strokeWidth={4}
          strokeLinecap="round"
        />
      </ZoomableGroup>
    </ComposableMap>
  );
};
//End

//AsiaMap
const geoUrlasiamap =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

export const MapAsiamap = () => {
  return (
    <ComposableMap
      projection="geoEqualEarth"
      projectionConfig={{
        scale: 500,
        center: [55, 30],
      }}
    >
      <ZoomableGroup zoom={1}>
        <Graticule stroke="#DDD" />
        <Geographies
          className="h-700"
          geography={geoUrlasiamap}
          fill="#D6D6DA"
          stroke="#FFFFFF"
          strokeWidth={1}
        >
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography key={geo.rsmKey} geography={geo} />
            ))
          }
        </Geographies>
      </ZoomableGroup>
    </ComposableMap>
  );
};
//End

//Annotation
const geoUrlAnnotation =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

export const MapAnnotation = () => {
  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [-20.0, -52.0, 0],
        scale: 1300,
      }}
    >
      <ZoomableGroup zoom={1}>
        <Geographies
          geography={geoUrlAnnotation}
          fill="#D6D6DA"
          stroke="#FFFFFF"
          strokeWidth={5}
        >
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography key={geo.rsmKey} geography={geo} />
            ))
          }
        </Geographies>
        <Annotation
          subject={[2.3522, 48.8566]}
          dx={90}
          dy={-30}
          connectorProps={{
            stroke: "#FF5533",
            strokeWidth: 7,
            strokeLinecap: "round",
          }}
        >
          <text
            x="95"
            textAnchor="end"
            alignmentBaseline="middle"
            fill="#F53"
            fontSize={40}
          >
            {"Paris"}
          </text>
        </Annotation>
      </ZoomableGroup>
    </ComposableMap>
  );
};
//End

//Basicmarkers
const geoUrlBasicmarkers =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

export const Basicmarkersdata = [
  {
    markerOffset: -15,
    name: "Buenos Aires",
    coordinates: [-58.3816, -34.6037],
  },
  { markerOffset: -15, name: "La Paz", coordinates: [-68.1193, -16.4897] },
  { markerOffset: 25, name: "Brasilia", coordinates: [-47.8825, -15.7942] },
  { markerOffset: 25, name: "Santiago", coordinates: [-70.6693, -33.4489] },
  { markerOffset: 25, name: "Bogota", coordinates: [-74.0721, 4.711] },
  { markerOffset: 25, name: "Quito", coordinates: [-78.4678, -0.1807] },
  { markerOffset: -15, name: "Georgetown", coordinates: [-58.1551, 6.8013] },
  { markerOffset: -15, name: "Asuncion", coordinates: [-57.5759, -25.2637] },
  { markerOffset: 25, name: "Paramaribo", coordinates: [-55.2038, 5.852] },
  { markerOffset: 25, name: "Montevideo", coordinates: [-56.1645, -34.9011] },
  { markerOffset: -15, name: "Caracas", coordinates: [-66.9036, 10.4806] },
  { markerOffset: -15, name: "Lima", coordinates: [-77.0428, -12.0464] },
];

export const Basicmarkers = () => {
  return (
    <ComposableMap
      id="vmap3"
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [58, 20, 0],
        scale: 525,
      }}
    >
      <Geographies geography={geoUrlBasicmarkers}>
        {({ geographies }) =>
          geographies
            .filter((d) => d.properties.REGION_UN === "Americas")
            .map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="#EAEAEC"
                stroke="#D6D6DA"
              />
            ))
        }
      </Geographies>
      {Basicmarkersdata.map(({ name, coordinates, markerOffset }) => (
        <Marker key={name} coordinates={coordinates}>
          <circle r={10} fill="#6f42c1" stroke="#fff" strokeWidth={2} />
          <text
            textAnchor="large"
            y={markerOffset}
            style={{ fontFamily: "system-ui", fill: "black", fontSize: "20" }}
          >
            {name}
          </text>
        </Marker>
      ))}
    </ComposableMap>
  );
};
//End

//Custommarkers
const geoUrlCustommarkers =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const Custommarkersdata = [
  {
    markerOffset: -30,
    name: "Buenos Aires",
    coordinates: [-58.3816, -34.6037],
  },
  { markerOffset: 15, name: "La Paz", coordinates: [-68.1193, -16.4897] },
  { markerOffset: 15, name: "Brasilia", coordinates: [-47.8825, -15.7942] },
  { markerOffset: 15, name: "Santiago", coordinates: [-70.6693, -33.4489] },
  { markerOffset: 15, name: "Bogota", coordinates: [-74.0721, 4.711] },
  { markerOffset: 15, name: "Quito", coordinates: [-78.4678, -0.1807] },
  { markerOffset: -30, name: "Georgetown", coordinates: [-58.1551, 6.8013] },
  { markerOffset: -30, name: "Asuncion", coordinates: [-57.5759, -25.2637] },
  { markerOffset: 15, name: "Paramaribo", coordinates: [-55.2038, 5.852] },
  { markerOffset: 15, name: "Montevideo", coordinates: [-56.1645, -34.9011] },
  { markerOffset: 15, name: "Caracas", coordinates: [-66.9036, 10.4806] },
  { markerOffset: 15, name: "Lima", coordinates: [-77.0428, -12.0464] },
];

export const Custommarkers = () => {
  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [58, 20, 0],
        scale: 530,
      }}
    >
      <Geographies geography={geoUrlCustommarkers}>
        {({ geographies }) =>
          geographies
            .filter((d) => d.properties.REGION_UN === "Americas")
            .map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="#EAEAEC"
                stroke="#D6D6DA"
              />
            ))
        }
      </Geographies>
      {Custommarkersdata.map(({ name, coordinates, markerOffset }) => (
        <Marker key={name} coordinates={coordinates}>
          <g
            fill="none"
            stroke="#FF5533"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            transform="translate(-12, -24)"
          >
            <circle cx="12" cy="10" r="3" />
            <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" />
          </g>
          <text
            textAnchor="middle"
            y={markerOffset}
            style={{ fontFamily: "system-ui", fill: "#5D5A6D" }}
          >
            {name}
          </text>
        </Marker>
      ))}
    </ComposableMap>
  );
};
//End

//Shapeworldmap
const geoUrlShapeworldmap =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

export const Shapeworldmap = () => {
  return (
    <ComposableMap projectionConfig={{ scale: 147 }}>
      <Graticule stroke="lightgrey" />
      <Geographies geography={geoUrlShapeworldmap} stroke="lightgrey">
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography
              key={geo.rsmKey}
              geography={geo}
              style={{
                default: {
                  fill: "#6259ca",
                  outline: "none",
                },
                hover: {
                  fill: "#e8e8f7",
                  outline: "none",
                },
              }}
            />
          ))
        }
      </Geographies>
    </ComposableMap>
  );
};
//End
