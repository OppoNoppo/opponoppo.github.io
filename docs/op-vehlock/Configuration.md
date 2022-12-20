---
title: Configuration
sidebar_position: 1
description: Configure the script
---

* `fullFunctionality` - Either use script as handler or fully functioning.
* `consolePrinting` - Either print server console with information on whats happening.
* `updateTimer` - The time between each server sync.
* `cleanupTimer` - The time between database cleanups.
* `lockpickEnabled` - Determines whether lockpicks are functional for carlocks.
* `lockpickLevels` - Changes the difficulty of lockpicking, refers to [ox_lib@client@skillcheck](https://overextended.github.io/docs/ox_lib/Interface/Client/skillcheck/)
* `usingTarget` - Determines whether a target system is in place and needs to be used.
* `targetFramework` - Has 2 options: [ox](https://github.com/overextended/ox_target/releases) and [qtarget](https://github.com/thelindat/qtarget).
#### Lock Settings
* `dbTableLocks` -  Change the name if you changes the database table name for the locks.
* `lockRadius` - Within the unit specified it checks if there is any vehicle the player has access to and changes lock of it.
#### Keys Settings
* `dbTableKeys` - Change the name if you changes the database table name for the locks.
* `enableKeys` - Determines wheter keys are functional.
* `wipeKeysOnStartup` - Determines whether all keys should be removed on script start.
* `useKeyAsItem` - Determines whether the keys need to be an item, only [ox_inventory](https://github.com/overextended/ox_inventory/releases) is supported.
#### Language Settings
* `language` - Change the code here that determines which language setting to use in `langSettings`.