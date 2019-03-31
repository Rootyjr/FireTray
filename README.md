FireTray
=======

New releases have been tested with:  

Working:

Windows 10 x64, Thunderbird win32 52.9.1 and 60.4.0  
Windows 10 x64, Thunderbird win64 52.9.1 and 60.4.0  
openSuSE Leap 15.0, KDE, Thunderbird 52.9.1 and 60.3.0  

Linux Mint 18.3 Sylvia  
Linux Mint 19 Tara and Thunderbird 60.2.1  
Devuan ASCII with Thunderbird version 60.2.1 (64-bits)  
Ubuntu MATE LTS 18.04 AMD64 and Thunderbird 60.2.1  
Fedora 27, Thunderbird 60.2.1 (64-bit)  
Debian 9.5 x64 Thunderbird 60.3.0
Archlinux MATE, Budgie, LXDE, with Thunderbird 60.5.3 (64-bit)

Thank you for testing !!!  

Not working:  

(K)ubuntu 16.04, Thunderbird (very small icon with GTK)  



Not tested:  

SeaMonkey  
ChatZilla  
Zotero  

other desktops...  



Overview
--------

This is a fork of [foudfou/FireTray](https://github.com/foudfou/FireTray)

The original FireTray has been patched to display the number of unread messages in KDE/Windows system tray.

It is a workaround for issues:
* [foudfou/FireTray #143](https://github.com/foudfou/FireTray/issues/143)
* [foudfou/FireTray #210](https://github.com/foudfou/FireTray/issues/210)

To build XPI file just do:
	cd src
	make build

To install icons on Kubuntu:
	cp ./src/chrome/skin/icons/unread/*.svg /usr/share/icons/breeze/actions/16/
	cp ./src/chrome/skin/icons/unread/*.svg /usr/share/icons/breeze/actions/22/
	cp ./src/chrome/skin/icons/unread/*.svg /usr/share/icons/breeze/actions/24/

## Donations
To support this project, you can make a donation to its current maintainer:  

[![paypal](https://github.com/Ximi1970/Donate/blob/master/paypal_btn_donateCC_LG_2.gif)](https://paypal.me/Ximi1970)
[![bitcoin-qrcode-black](https://github.com/Ximi1970/Donate/blob/master/bitcoin-donate-qrcode-black.png)](https://raw.githubusercontent.com/Ximi1970/Donate/master/bitcoin-address.txt)
