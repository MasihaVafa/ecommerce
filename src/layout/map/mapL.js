import React, { Component } from "react";
import L from "leaflet";
export default class MapL extends Component {
  componentDidMount() {
    this.map = L.map("map", {
      center: [32, 53],
      zoom: 4,
      zoomControl: false
    });
    L.tileLayer(
      "https://cartodb-basemaps-{s}.global.ssl.fastly.net/rastertiles/voyager_nolabels/{z}/{x}/{y}{r}.png",
      {
        detectRetina: true,
        maxZoom: 20,
        maxNativeZoom: 17
      }
    ).addTo(this.map);
  }
  render() {
    return (
      <div
        style={{ width: "400px", height: "400px", border: "1px solid black" }}
        id="map"
      ></div>
    );
  }
}
