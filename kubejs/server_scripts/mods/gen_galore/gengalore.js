ServerEvents.recipes(allthemods => {

    // netherstar generator
    allthemods.remove({ id: `generatorgalore:generators/netherstar_generator`})
    allthemods.shaped('generatorgalore:netherstar_generator', [
        'AAA',
        'ABA',
        'ACA'
    ], {
        A: 'minecraft:wither_skeleton_skull',
        B: 'generatorgalore:netherite_generator',
        C: 'allthetweaks:nether_star_block'
    })

    // culinary generator
    allthemods.shaped('generatorgalore:culinary_generator', [
        'AAA',
        'ABA',
        'ACA'
    ], {
        A: '#c:crops',
        B: 'generatorgalore:iron_generator',
        C: 'minecraft:hay_block'
    })

    // iron generator
    allthemods.shaped('generatorgalore:iron_generator', [
        'AAA',
        'ABA',
        'ACA'
    ], {
        A: 'minecraft:iron_ingot',
        B: 'minecraft:furnace',
        C: 'minecraft:redstone_block'
    })

    // magmatic generator
    allthemods.shaped('generatorgalore:magmatic_generator', [
        'AAA',
        'ABA',
        'DCD'
    ], {
        A: 'minecraft:gold_ingot',
        B: 'minecraft:furnace',
        C: 'minecraft:redstone_block',
        D: 'minecraft:obsidian'
    })

    // enchantment generator
    allthemods.shaped('generatorgalore:enchantment_generator', [
        'AAA',
        'ABA',
        'DCD'
    ], {
        A: 'minecraft:golden_carrot',
        B: 'generatorgalore:iron_generator',
        C: 'minecraft:bookshelf',
        D: 'minecraft:obsidian'
    })

    // enchantment generator
    allthemods.shaped('generatorgalore:netherite_generator', [
        'AAA',
        'ABA',
        'DCD'
    ], {
        A: 'minecraft:netherite_ingot',
        B: 'generatorgalore:iron_generator',
        C: '#c:storage_blocks/charcoal',
        D: 'minecraft:obsidian'
    })
    })