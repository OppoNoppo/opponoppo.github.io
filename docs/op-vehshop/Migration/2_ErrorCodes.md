---
title: ErrorCodes
toc_min_heading_level: 2
---

When Migrating there shouldn't be any errors present (if the old config is correct offcourse)
Even though there shouldn't be any here is a list of errorcodes that may happen during the migrating process.

### Misconfig ``Migrate_FileNotFound``
This error occures whenever the correct files are not found in the `migrating` folder. Make sure you inserted your files correctly.\

[How to fix FileNotFound Error](https://opponoppo.github.io/docs/op-vehshop/Migration/HowTo#1-moving-old-files-into-migrating-folder)

### Migrating_ErrorSQL
This may happen due to there not being any tables to insert into or the sv-config.lua is not set correctly. Search for keywords in the error.

#### ```Creating Brand Failed```
This error usually indicates that the sql files are not executed or incorrectly set in the sv-config.lua

#### ```Creating Category Failed```
This error usually indicates that the sql files are not executed or incorrectly set in the sv-config.lua

#### ```Creating Brand Failed```
This error usually indicates that the sql files are not executed or incorrectly set in the sv-config.lua

