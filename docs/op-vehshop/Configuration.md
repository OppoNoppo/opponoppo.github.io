---
title: Configuration
sidebar_position: 1
description: Configure the script
toc_min_heading_level: 2
---

### _Settings
*    `debug` - boolean.
*    `framework` - Supported frameworks: 'qbcore', 'esx'.
*    `currency` - string.
*    `markerDistance` - integer.
*    `setupMarkerDistance` - integer.

### _KeyBinds
:::caution
Not all keybinds can be used, here is a list of usable keybindings:
<pre>
ESC     F1      F2      F3              F5      F6      F7      F8      F9      F10<br />
~       1       2       3        4      5       6       7       8       9       -       =       BACKSPACE<br />
TAB     Q       W       E        R      T       Y       U       P       [       ]       ENTER<br />
CAPS    A       S       D        F      G       H       K       L<br />
LEFTSHIFT       Z       X        C      V       B       N       M       ,       .       TOP<br />
LEFTCTRL        LEFTALT                 SPACE                   RIGHTCTRL       LEFT    DOWN    RIGHT<br />
<br />
HOME            PAGEUP  PAGEDOWN DELETE<br />
NENTER          N4      N5       N6     N+      N-      N7      N8      N9<br />
</pre>

:::

* `['goBack']` - Used in only `3dmenu`.
* `['openMenu']` - Used to open both menus.
* `['buyVehicle']` - Used in only `3dmenu`.
* `['checkStats']` - Used in only `3dmenu`.
* `['toggleLights']` - Used in only `3dmenu`
* `['toggleDoors']` - Used in only `3dmenu`
* `['testDrive']` - Used in only `3dmenu`
* `['changeVehicle']` - Used in only `3dmenu`

### _Locations

> ### lShowroom

#### points
* `[showroomName]` - Make them unique to avoid problems.
    * `coords` - vector4,
    * `interaction` - vector3,
    * `targetZone` - table
        * `minZ` - int,
        * `maxZ` - int,
        * `coords` - vector3,
        * `heading`,
        * `size` - vec2(length, width),
        * `distance` - int,
        * `debug` - boolean
    * `enabledFeatures` - table.
    * `categories` - table, add the **categories** you want to show here. `{['compact'] = true}`.
    * `classes` - boolean/table, same as `categories`, but with classes. (false to disable)
    * `defaultVehicle` - string (spawnName)
    * :::danger
    `chosenVehicle` - string (spawnName) !!! SCRIPT FUNCTIONALITY KEEP THIS THE SAME AS `defaultVehicle`.
    :::
    * `cosmetic`
        * `vehicleType` - Currently only for cosmetic purpose. (`client/editable.lua:getBrandPrefix`)
        * `changeCar_extraData` - Shows extra data in the change car menu. Options:
            * `class` - Shows what class the vehicle is in.
            * `brand` - Shows the brand the vehicle belongs to.
            * `category` - Shows what category the vehicle is in.
            * `false` - will disable option.

#### settings
* `markerType` - integer ([MarkerTypes](https://docs.fivem.net/docs/game-references/markers/#markers))
* `markerBobbing` - boolean.
* `markerRotate` - boolean.
* `markerFaceCam` - boolean.
* `markerDiffZ` - for positive values set to +x and for negative -x.
* `markerColor` - rgba `{r = x1, g = x2, b = x3, a = x4}`.
* `markerSize` - xyz `{x = x1, y = x2, z = x3}`.

> ### lSettings

* `sMenuOption` - '3dmenu' for 3dtext, 'ox' for ox_lib ContextMenu or 'target' for **ox_target** system.
* `sRestrictions`
    * `jobsWhitelisted` - boolean/table, make false to disable **[job] = grade** (`{['police'] = 4}`).
    * `jobsBlacklisted` - boolean/table, make false to disable **[job] = grade** (`{['ambulance'] = 4}`).
    * :::danger
    `canInteract` !!! SCRIPT FUNCTIONALITY KEEP `false`.
    :::
* `lTestDrive`
    * `coords` - vector4.
    * `time` - Time until player gets teleported back (in Seconds)
    * `bucketSystem` - If true player gets placed in their own world to avoid conflicts between players.
    * `smoothTransition` - if true the camera will smootly transition to the TestDrive coords.
* `purchaseLocation` - vector4.