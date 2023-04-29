---
title: Changelogs
sidebar_position: 4
toc_min_heading_level: 2
---

### v3.0.4
`+` Readded SQL improvements<br/>
`/` Fixed bug which affects slow running users/servers.<br/>
`/` Fixed prefix issue.<br/>

#### Config Change:
One change made, which only affects non changed configs.
:::info
**Old**<br/>
`vehicleType = 'motorcyle`<br/>

**New**<br/>
`vehicleType = 'motorcycle`<br/>
:::
#### Files Changed:

`client/3dmenu.lua`<br/>
`client/editable.lua`<br/>
`client/main.lua`<br/>
`client/ox.lua`<br/>
`client/target.lua`<br/>
`server/main.lua`<br/>
`config.lua`<br/>

### v3.0.3
`+` Class filtering for showroompoints.<br/>
`/` Improved SQL performance.<br/>
`/` Fixed oxMenu id issue.<br/>

#### Config Change:

With the addition of class filtering, an extra is available for each showroompoint.
No new lines **NEED** to be added, only when wanting to use class filtering.

You can now filter a showroompoint with 2 filtersystems, using 1 of two or even both! To use this feature please add `classes = {['classname'] = true},` beneath categories in the showroompoint you want to filter. It basicly works the same as categories. These 2 options can be used together to enhance your filtering. Have fun!

#### Files Changed:

`client/3dmenu.lua`<br />
`client/main.lua`<br />
`client/ox.lua`<br />
`client/target.lua`<br />
`server/main.lua`<br />
`config.lua`<br />

### v3.0.2
`+` Added Target system.<br />
`+` Added defaultmods as option in `/op-v-changeveh`.<br />
`+` Added label spaces support in `/op-v-changeveh`.<br />
`/` Fixed Debug message.<br />
`/` Fixed Vehicle spawning issue.<br />
`/` Fixed Vehicle not loading due to "slow" server.<br />
`-` Removed Unused code.<br />

#### Config Change:

Due to the target interaction system addition. Some changes to the config have been made.

Add this to `_Language`:
> ```lua
> --[[Target]]
> ['targetopenMenu'] = 'Open Menu',
> ['targetopenMenuIcon'] = 'fas fa-bars-staggered',
> ```

Changes to Showroompoints:
> Added `targetZone` Please take a look at the config of the new version and compare it to yours for more explanation.

#### Files Changed:

`client/cmd.lua`<br />
`client/main.lua`<br />
`client/ox.lua`<br />
`client/target.lua`<br />
`server/cmd.lua`<br />
`config.lua`<br />

### v3.0.1
`+` Added Ox_lib version check.<br />
`/` Fixed SQL file problem.<br />
`/` Fixed Job Whitelist System.<br />
`/` Fixed Menu bug after buying vehicle.<br />
`-` Removed Certain files from migrating/ folder to avoid confusion.<br />

#### Config Change:
Due to the job whitelist system issue fix the following settings need to be changed to minimize reconfiguring: **per location**
`... .lSettings.sRestrictions` Please compare the section with your old version.

> Old
```lua
-- When whitelisted and blacklisted contain the same job no matter what grade unexpected results will happen.
jobsWhitelisted = {}, -- Make empty to disable
jobsBlacklisted = {}, -- Make empty to disable
```

> New
```lua
-- {['jobname'] = mingrade}
jobsWhitelisted = false, -- Make false to disable
jobsBlacklisted = false, -- Make false to disable
```

#### Files Changed:

`client/3dmenu.lua`<br />
`client/main.lua`<br />
`client/utils.lua`<br />
`server/utils.lua`<br />
`sql/op-vehshop.sql`<br />
`config.lua`<br />