---
title: ErrorCodes
toc_min_heading_level: 2
---

:::caution
If you encounter any problems with the script, please enable `debug` before opening an ticket.
:::

If there are any errors you may encounter, please set `debug` to **true** in de config. This will be helpfull most of the times.
When debug enabled you should get an error code with the debug message, these can be found at the end of the print.

### Misconfig
#### `Unsupported_Framework`
> The specified framework is not supported.
>
> :::info
> Reference: `config.lua:_Settings.framework`
> :::

#### `Location_IntSystem`
> The menu of the location is unsupported.
>
> :::info
> Reference: `config.lua:_Locations[location].lSettings.sMenuOption`
> :::

#### `Vehicle_Spawnname`
> The spawnname of the vehicle is incorrect. Recheck the spawnname in your config/database.

### pCall
#### `getVehiclePrefix`
> Please check the editable.lua if the vehicle type is in there. If not add it.

#### `getBrandPrefix`
> Please check the editable.lua if the vehicle type is in there. If not add it.
>
> :::info
> Reference: `config.lua:_Locations[location].lShowroom.points[point].cosmetic.vehicleType`
> :::

### Error

#### `NotLoaded`
> The vehicle that is being spawned, this may be due to a slow server or internet. (This shouldn't really encountered)

#### `NoVehicle_OnSpot`
> There is no vehicle on the spot of the showroompoint coords. (This shouldn't really encountered)