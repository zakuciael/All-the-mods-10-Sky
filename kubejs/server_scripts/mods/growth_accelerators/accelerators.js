ServerEvents.recipes(allthemods => {

    // cranked growth accelerator

    allthemods.shaped('growthacceleratortiers:cranked_growth_accelerator', [
        'DCD',
        'BAB',
        'DCD'
    ], {
        A: '#minecraft:planks',
        B: 'minecraft:iron_ingot',
        C: 'ae2:crank',
        D: 'minecraft:cobblestone'
    })

    allthemods.shaped('growthacceleratortiers:directional_growth_accelerator', [
        'ECE',
        'BAB',
        'DFD'
    ], {
        A: 'ae2:growth_accelerator',
        B: 'minecraft:diamond',
        C: 'ae2:fluix_pearl',
        D: 'minecraft:netherite_ingot',
        E: 'ae2:speed_card',
        F: 'ae2:formation_core'
    })

    allthemods.shaped('growthacceleratortiers:boosted_growth_accelerator', [
        'ECE',
        'BAB',
        'DFD'
    ], {
        A: 'ae2:growth_accelerator',
        B: 'minecraft:emerald',
        C: 'ae2:fluix_pearl',
        D: 'minecraft:netherite_ingot',
        E: 'ae2:speed_card',
        F: 'ae2:annihilation_core'
    })

    })