import React from "react"
import { createRoot } from "react-dom/client"

//reactDOM ini meurpakan instance dari librari itu
//jadi dia akan memiliki semua fungsi dari react-dom client
//karena hanya perlu create root jadi pake destructure
//import ReactDOM jadi import {nama yg dibutuhin}

// 1. react
// 2. react dom
// 3. bundler / pembungkus >> Vite js

//TODO

const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h2", {}, props.breed),
  ])
}

//pet masih belum dinamis, value berulang :v
//mau supaya ngepassing attribut
//createelement menerima 3 parameter: element/tag, attribut, children

//liat script sudah panjang, bisa di pisahkan, masukin ke file baru

const App = () => {
  return React.createElement(
    "div",
    {},
    [
      React.createElement("h1", {}, "Pet Rescue App"),
      React.createElement(Pet, {
        name: "Bob",
        animal: "Dog",
        breed: "Border Collie",
      }),
      React.createElement(Pet, {
        name: "Carla",
        animal: "Kucing",
        breed: "jalanan",
      }),
    ]

    //react.create(pet) bisa karena itu
    //react.create("element html / react yang mau ditampilkan", attribute: name/ id sebagainya, children)
    //"pet" = elemen html naative
    //pet = elemen yang kita buat sendiri / elemen react

    //parameter ketiga =  childrennya
  )
}

{
  /* <div>
    <h1> Pet Rescue App</h1>
    <Pet name="bob" animal="dog", breed="border collie"/>
    <Pet name="" animal="", breed=""/>
</div> */
}
// ^hasil

const container = document.getElementById("root")
// const root = ReactDOM.createRoot(container)
const root = createRoot(container)

//membuat dom html baru, bikin dom milik react
//react mencatat root itu titik masuk aplikasi kita
//dimana dia di render

root.render(React.createElement(App))
//minta tolong ke react dom untuk merender aplikasi kita

//===== catatan ======

//perlu ngerender dia.
//kita bari bikin element react..?
//kita mau ngebuat sebuah div, yang tidak memiliki attribut apa - apa dan didalam div nya ada elemen h1 yang punya children text "pet rescue app
// dia jadi menerjemahkan:
// <div>
// <h1>
// pet rescue app
// <h1>
// <div>

// kita mau replace? yang div root react belium ke render itu
// replace text content div root jadi yang dibuat tadi

//bisa test dengan inspect > kasih bikin internet slow ada delay

//ini react murni
//ini cara bikin 2 script itu jadi library kita

//cdn = content delivery network
//untuk deliver lib reactnya

//ini buat app react tanpa node js dan dll bisa pkai script itu

//manffaat package manager untuk install libarary" yg disediakan npm
// npm initi -y
