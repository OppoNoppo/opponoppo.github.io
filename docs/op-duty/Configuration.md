---
title: Configuration
sidebar_position: 1
description: Configure the script
---

* id: `string` / `integer` -- any of them is possible as long as there is no duplicate id.
* jobnameOn: `string` -- name of the job when player is **on** duty.
* jobnameOff: `string` -- name of the job when player is **off** duty.
* coords: `table` -- vector3.

```lua showLineNumbers
[id] = {
    onDuty = jobnameOn,
    offDuty = jobnameOff,
    coords = {
        -- vector3(x,y,z) ...
    }
},
```