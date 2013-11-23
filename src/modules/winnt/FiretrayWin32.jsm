/* -*- Mode: js2; tab-width: 2; indent-tabs-mode: nil; c-basic-offset: 2 -*- */

var EXPORTED_SYMBOLS = [ "firetray" ];

const Cc = Components.classes;
const Ci = Components.interfaces;
const Cu = Components.utils;

Cu.import("resource://gre/modules/ctypes.jsm");
Cu.import("resource://firetray/ctypes/winnt/win32.jsm");
Cu.import("resource://firetray/ctypes/winnt/kernel32.jsm");
Cu.import("resource://firetray/ctypes/winnt/user32.jsm");
Cu.import("resource://firetray/commons.js");
firetray.Handler.subscribeLibsForClosing([kernel32, user32]);

let log = firetray.Logging.getLogger("firetray.Win32");

if ("undefined" == typeof(firetray.Handler))
  log.error("This module MUST be imported from/after FiretrayHandler !");

const kMessageTray     = "_FIRETRAY_TrayMessage";
const kMessageCallback = "_FIRETRAY_TrayCallback";

function Win32Env() {
  this.WM_TASKBARCREATED = user32.RegisterWindowMessageW("TaskbarCreated");
  // We register this as well, as we cannot know which WM_USER values are
  // already taken
  this.WM_TRAYMESSAGE  = user32.RegisterWindowMessageW(kMessageTray);
  this.WM_TRAYCALLBACK = user32.RegisterWindowMessageW(kMessageCallback);
  log.debug("WM_*="+this.WM_TASKBARCREATED+" "+this.WM_TRAYMESSAGE+" "+this.WM_TRAYCALLBACK);

  this.hInstance = kernel32.GetModuleHandleW("xul"); // ordinary windows are created from xul.dll
  log.debug("hInstance="+this.hInstance);

  /* if Administrator, accept messages from applications running in a lower
   privilege level */
  this.acceptAllMessages = function(hwnd) {
    let rv = null;
    log.info(win32.WINVER+" >= "+win32.WIN_VERSIONS["7"]);
    if (win32.WINVER >= win32.WIN_VERSIONS["7"]) {
      rv = user32.ChangeWindowMessageFilterEx(hwnd, firetray.Win32.WM_TASKBARCREATED, user32.MSGFLT_ALLOW, null);
      log.debug("ChangeWindowMessageFilterEx res="+rv+" winLastError="+ctypes.winLastError);
    } else if (win32.WINVER >= win32.WINVER["Vista"]) {
      rv = user32.ChangeWindowMessageFilter(firetray.Win32.WM_TASKBARCREATED, user32.MSGFLT_ADD);
      log.debug("ChangeWindowMessageFilter res="+rv+" winLastError="+ctypes.winLastError);
    } else {
        // no UIPI
    }
    return rv;
  };

}

firetray.Win32 = new Win32Env();
