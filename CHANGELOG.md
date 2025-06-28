# Changelog

## Beta 3

### Mods

- Added:
  - [Crafting on a Stick](https://www.curseforge.com/minecraft/mc-mods/crafting-on-a-stick)
  - [Euphoria Patches](https://www.curseforge.com/minecraft/mc-mods/euphoria-patches)
  - [Klee Slabs](https://www.curseforge.com/minecraft/mc-mods/kleeslabs)
  - [Nolijium](https://www.curseforge.com/minecraft/mc-mods/nolijium)
  - [Zume](https://www.curseforge.com/minecraft/mc-mods/zume)

- Removed:
  - [Mod Name Tooltip](https://www.curseforge.com/minecraft/mc-mods/mod-name-tooltip)
  - [Productive Tree + Mekanism Compatibility](https://www.curseforge.com/minecraft/mc-mods/productive-tree-mekanism-compatibility)
  - [Simple Discord Rich Presence](https://www.curseforge.com/minecraft/mc-mods/simple-discord-rich-presence)

- Updated:
  - Ars Elemental (0.7.4.1 -> 0.7.4.3)
  - Ars Nouveau (5.9.2 -> 5.9.3)
  - Immersive Engineering (12.4.0-192 -> 12.4.0-193)
  - Integrated Crafting (1.2.2-331 -> 1.2.2-333)
  - Integrated Terminals (1.6.14-522 -> 1.6.14-524)
  - Iron's Spells 'n Spellbooks (3.12.3 -> 3.13.0)
  - Modonomicon (1.114.2 -> 1.114.4)
  - Occultism (1.180.0 -> 1.181.0)
  - Productive Bees (13.7.2 -> 13.7.3)
  - Productive Metalworks (1.9.4 -> 1.9.5)
  - Silent Gear (4.0.23 -> 4.0.24)

- DO NOT UPDATE:
  - Iris Shaders (1.8.8)

### Recipes

- Added:
  - ExDeorum Sieving:
    - `minecraft:torchflower_seeds` via **Dirt** in any but **String** & **Flint**
    - `minecraft:cactus` via **Sand** in **Diamond Meshes**

- Removed:
  - Crafting:
    - All `pickletweaks` paxels: Duplicates with Mekanism
    - `extendedcrafting:handheld_table`: Duplicate with Crafting on a Stick

- Changed:
  - Crafting:
    - `crystalix:crystalix_wand`: Duplicate with Construction Sticks

### Tags

- Added: 
  - `minecraft:diamond_block` to `#chisel_chipped_integration:gems/diamond`: Broken craft from block to diamond
  - `productivemetalworks:molten_emerald` to `c:molten_emerald`: Missing tag

### Configs

- Better Compatibility Check:
  - Proper versioning

- Crash Assistant:
  - Proper names in the crash message

- Cucumber lib:
  - `tagTooltips = false`: remove duplicate tag tooltips

- FTB Essentials:
  - Disable /rtp

### Other

- Added GitHub Issue Templates
- Added Complementary Shaders

## Beta 2

### Mods

- Added:
  - [Construction Sticks](https://www.curseforge.com/minecraft/mc-mods/construction-sticks)
  - [Keybind Bundles](https://www.curseforge.com/minecraft/mc-mods/keybind-bundles)
  - [Keybinds Purger](https://www.curseforge.com/minecraft/mc-mods/keybindspurger)

### Recipes

- Added:
  - ExDeorum Sieving (Iron, Gold, Diamond, Netherite):
      - `create:veridium`
      - `create:crimsite`
      - `create:asurine`
      - `xycraft_world:kivi`
  - Xycraft Extractor:
      - `create:veridium`
      - `create:crimsite`
      - `create:asurine`
  - AE2 Inscriber:
    - `ae2:silicon_press`
    - `ae2:calculation_processor_press`
    - `ae2:engineering_processor_press`
    - `ae2:logic_processor_press`
    - `advanced_ae:quantum_processor_press`

- Removed:
  - Growth Accelerator Tiers:
    - `growth_accelerator_tiers:cranked_growth_accelerator`: Dupe with mod recipe
    - `growth_accelerator_tiers:boosted_growth_accelerator`: Dupe with mod recipe
    - `growth_accelerator_tiers:directional_growth_accelerator`: Dupe with mod recipe

  - Modern Industrialization:
    - `modern_industrialization:replicator`: Unbalanced and OP

### Tags

- Removed:
  - `#mysticalagriculture:seeds` from `#tombstone:seeds`: Prevent MA seeds from appearing in the seedbags
  - `#mysticalagriculture:seeds` from `#c:seeds`: Prevent MA seeds from appearing in the seedbags

### Configs

- Almost Unified:
  - Fully added and configured the almost unified config
  
- Mekanism:
  - `holidays = false`: Disable Holidays to remove the chat startup message

- Utilitarian:
  - Block all remaining startup messages

- Skyblock Builder:
  - Added the `default.nbt` template as a selectable option to generate an island from

### Other

- Removed the Angel Block and Creeper from the `simple_life.nbt` template file
- Removed the Starter Chest from the `default.nbt` template
- Added Tooltips:
  - `create:limestone`: Explains how to create it via fluid interactions
  - `create:scoria`: Explains how to create it via fluid interactions

