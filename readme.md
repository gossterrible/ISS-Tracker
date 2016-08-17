# ISS-Tracker
> Electron + Three.js

A simple electron app which track the real time position of the ISS,
using three.js to render the globe and position the ISS at the given Coordinates.
## Demo

![demo gif](https://raw.githubusercontent.com/gossterrible/ISS-Tracker/master/img/2016-08-16_23-14-25.gif)

## Getting Started

Clone the repo, then:
```
npm install
npm start
```
Your Globe is rendered using a frameless window and transparent background.



## libraries Used:

* Electron
* Three js
* Realtime-webgl globe by [askmike](https://github.com/askmike/realtime-webgl-globe) 

## Todo
1. Notify you when the ISS is overheaad or at a specific location.
2. Create a tray icon or use electron position to place the globe at a specific region.
3. Create a globe stand which can i can include some setup functions.
