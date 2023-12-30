"use strict";
const electron = require("electron");
const path = require("path");
let win;
const createWindow = () => {
  win = new electron.BrowserWindow({
    // 是否隐藏菜单，默认 false
    autoHideMenuBar: true,
    // fullscreen:true,//全屏展示
    resizable: true,
    // 窗口大小是否可改变
    maximizable: true,
    // 窗口是否可以最大化
    width: 1500,
    height: 1e3,
    //允许html页面上的javascipt代码访问nodejs 环境api代码的能力（与node集成的意思）
    webPreferences: {
      devTools: false,
      contextIsolation: false,
      nodeIntegration: true
    }
  });
  win.loadFile(path.join(__dirname, "../dist/index.html"));
  win.loadURL(`${process.env["VITE_DEV_SERVER_URL"]}`);
  win.webContents.openDevTools();
};
electron.app.whenReady().then(createWindow);
