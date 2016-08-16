const electron = require("electron");
const {app, BrowserWindow} = electron;
const fs = require("fs");

app.on("ready", () => {
  // load sketch window
  var win = new BrowserWindow({width: 600, height: 400,transparent: true, frame: false});
  win.loadURL("file://" + __dirname + "/sketch/index.html");

  // auto-reload on filechange in sketch folder
  fs.watch(__dirname + "/sketch", () =>{
    win.reload();
  });

});
