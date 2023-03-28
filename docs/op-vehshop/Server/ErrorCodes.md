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

### Dependency
#### `ox_lib_NotFound`
> Make sure you have installed ox_lib. And keep it up to date.