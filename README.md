[![Build Status](https://travis-ci.org/bradyhouse/15.svg?branch=master)](https://travis-ci.org/bradyhouse/15) 
[![Stories in Progress](https://badge.waffle.io/bradyhouse/15.svg?label=in%20progress&title=Stories%20In%20Progress)](http://waffle.io/bradyhouse/15)
[![dependencies Status](https://david-dm.org/bradyhouse/15/status.svg)](https://david-dm.org/bradyhouse/15)
[![devDependencies Status](https://david-dm.org/bradyhouse/15/dev-status.svg)](https://david-dm.org/bradyhouse/15?type=dev)
[![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT)


Puzzle 15
======

![Icon](http://i.imgur.com/7pcPPC2.png)

Puzzle 15 is a game inspired by the classic [Fifteen Puzzle](http://mathworld.wolfram.com/15Puzzle.html). In this variation, there are 3 levels corresponding to 9 (3x3), 16 (4x4), or 25 (5x5) block grid. In order to complete (or win) a level, users must put the squares in sequential order. The compiled version of this application is now available for free in the App Store and on Google Play:

[![See 15 in Action on Android](http://i.imgur.com/egn1IaR.png)](https://play.google.com/store/apps/details?id=org.nativescript.puzzle&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1) [![See 15 in Action on iOS](http://i.imgur.com/QRsMRfp.png)](https://itunes.apple.com/us/app/15-puzzle/id1180443503?mt=8)


## Use Case

This app is built with the NativeScript CLI. Once you have the [CLI](https://docs.nativescript.org/start/quick-setup) installed, start by cloning the repo:

    $ git clone https://github.com/bradyhouse/15 puzzle
    $ cd puzzle/scripts

To configure the app to run on iOS, run the following command from the scripts directory:

    $ ./install-ios.sh

To configure the app to run on Android, run the following command from the scripts directory:

    $ ./install-android.sh
    
To startup the app using an android emulator, run the following command from the scripts directory:
  
    $ ./start-android.sh
    
To startup the app using an ios emulator, run the following command from the scripts directory:

    $ ./start-ios.sh

