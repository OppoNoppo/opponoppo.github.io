---
title: Configuration
sidebar_position: 1
description: Configure the script
toc_min_heading_level: 2
---

### _Settings
*    `debug` = false, -- Set to true if you encounter any errors.
*    `framework` = 'qbcore', -- esx, qbcore
*    `currency` = '€',
*    `markerDistance` = 4.0,
*    `setupMarkerDistance` = 15.0,

### _KeyBinds
:::caution
Not all keybinds can be used, here is a list of usable keybindings:
<pre>
ESC     F1      F2      F3              F5      F6      F7      F8      F9      F10 <br />
~       1       2       3        4      5       6       7       8       9       -       =       BACKSPACE <br />
TAB     Q       W       E        R      T       Y       U       P       [       ]       ENTER <br />
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
``` lua showLineNumbers
    ["pdm"] = {
        lBlip = {label = "PDM", coords = vector3(-44.6309, -1093.9458, 27.2697), type = 326, color = 2, scale = 0.5},
        lShowroom = {
            points = {
                ['middle'] = {
                    coords = vector4(-47.6200, -1092.0547, 26.7044, 139.2080),
                    interaction = vector3(-46.8375, -1095.8361, 27.2726),
                    enabledFeatures = {
                        'buyVehicle', -- to disable comment out the line
                        'toggleLights', -- to disable comment out the line
                        'toggleDoors', -- to disable comment out the line
                        'testDrive', -- to disable comment out the line
                        'changeVehicle', -- to disable comment out the line
                    },
                    categories = {['compact'] = true},
                    defaultVehicle = 'issi2',
                    chosenVehicle = 'issi2', -- Keep same as defaultVehicle (script functionality)

                    cosmetic = {
                        vehicleType = 'car', -- Used for cosmetic purpose only. To disable set to false (client/editable.lua:getBrandPrefix)
                        changeCar_extraData = 'class', -- class, brand, category to disable type false
                    }
                },
                ['entranceRight'] = {
                    coords = vector4(-42.5070, -1101.5100, 26.9263, 250.4447),
                    interaction = vector3(-38.5588, -1100.0487, 27.2744),
                    enabledFeatures = {
                        'buyVehicle', -- to disable comment out the line
                        'toggleLights', -- to disable comment out the line
                        'toggleDoors', -- to disable comment out the line
                        'testDrive', -- to disable comment out the line
                        'changeVehicle', -- to disable comment out the line
                    },
                    categories = {['coupes'] = true},
                    defaultVehicle = 'f620',
                    chosenVehicle = 'f620', -- Keep same as defaultVehicle (script functionality)

                    cosmetic = {
                        vehicleType = 'car', -- Used for cosmetic purpose only. To disable set to false (client/editable.lua:getBrandPrefix)
                        changeCar_extraData = 'class', -- class, brand, category to disable type false
                    }
                },
                ['entraceLeft'] = {
                    coords = vector4(-54.7474, -1097.0447, 26.8175, 277.2576),
                    interaction = vector3(-51.2713, -1094.7955, 27.2744),
                    enabledFeatures = {
                        'buyVehicle', -- to disable comment out the line
                        'toggleLights', -- to disable comment out the line
                        'toggleDoors', -- to disable comment out the line
                        'testDrive', -- to disable comment out the line
                        'changeVehicle', -- to disable comment out the line
                    },
                    categories = {['motors'] = true},
                    defaultVehicle = 'fcr',
                    chosenVehicle = 'fcr', -- Keep same as defaultVehicle (script functionality)

                    cosmetic = {
                        vehicleType = 'motorcyle', -- Used for cosmetic purpose only. To disable set to false (client/editable.lua:getBrandPrefix)
                        changeCar_extraData = 'class', -- class, brand, category to disable type false
                    }
                },
                ['backLeft'] = {
                    coords = vector4(-49.8034, -1083.7113, 26.8222, 188.1572),
                    interaction = vector3(-51.2698, -1087.3419, 27.2744),
                    enabledFeatures = {
                        'buyVehicle', -- to disable comment out the line
                        'toggleLights', -- to disable comment out the line
                        'toggleDoors', -- to disable comment out the line
                        'testDrive', -- to disable comment out the line
                        'changeVehicle', -- to disable comment out the line
                    },
                    categories = {['muscle'] = true},
                    defaultVehicle = 'blade',
                    chosenVehicle = 'blade', -- Keep same as defaultVehicle (script functionality)

                    cosmetic = {
                        vehicleType = 'car', -- Used for cosmetic purpose only. To disable set to false (client/editable.lua:getBrandPrefix)
                        changeCar_extraData = 'class', -- class, brand, category to disable type false
                    }
                },
                ['backRight'] = {
                    coords = vector4(-36.9202, -1093.2919, 26.7793, 77.3684),
                    interaction = vector3(-40.6137, -1094.7111, 27.2744),
                    enabledFeatures = {
                        'buyVehicle', -- to disable comment out the line
                        'toggleLights', -- to disable comment out the line
                        'toggleDoors', -- to disable comment out the line
                        'testDrive', -- to disable comment out the line
                        'changeVehicle', -- to disable comment out the line
                    },
                    categories = {['offroad'] = true},
                    defaultVehicle = 'dune',
                    chosenVehicle = 'dune', -- Keep same as defaultVehicle (script functionality)

                    cosmetic = {
                        vehicleType = 'car', -- Used for cosmetic purpose only. To disable set to false (client/editable.lua:getBrandPrefix)
                        changeCar_extraData = 'class', -- class, brand, category to disable type false
                    }
                },
            },
            settings = {
                markerType = 20,
                markerBobbing = false,
                markerRotate = true,
                markerFaceCam = false,
                markerDiffZ = -0.2,
                markerColor = {r = 0, g = 162, b = 255, a = 255},
                markerSize = {x = 0.25, y = 0.25, z = 0.125},
            }
        },
        lSettings = {
            sMenuOption = '3dmenu', -- 'ox', '3dmenu'
            sRestrictions = {
                -- When whitelisted and blacklisted contain the same job no matter what grade unexpected results will happen.
                jobsWhitelisted = {}, -- Make empty to disable
                jobsBlacklisted = {}, -- Make empty to disable

                -- Script functionality
                canInteract = false
            },
            lTestDrive = {
                coords = vector4(-1974.5850, 2814.6165, 32.8104, 59.3271),
                time = 15, -- Time until player gets teleported back (in Seconds)
                bucketSystem = true, -- If true player gets placed in their own world to avoid conflicts between players. (bucket id is always the players ID)
                -- Cosmetic
                smoothTransition = true,
            },
            purchaseLocation = vector4(-17.38783454895, -1079.2053222656, 26.317541122437, 134.22),
        }
    }
```