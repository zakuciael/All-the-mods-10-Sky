// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.tags('block', allthemods => {
    // Waystones
    allthemods.add('ftbchunks:interact_whitelist', ['@waystones'])

    // Extreme Reactors
    allthemods.add('c:storage_blocks/yellorium', 'alltheores:uranium_block' )

    allthemods.remove('c:relocation_not_supported', [
        'geore:budding_diamond',
        'geore:budding_gold',
        'geore:budding_iron',
        'geore:budding_copper',
        'geore:budding_redstone',
        'geore:budding_lapis',
        'geore:budding_coal',
        'geore:budding_quartz',
        'geore:budding_ruby',
        'geore:budding_emerald',
        'geore:budding_sapphire',
        'geore:budding_zinc',
        'geore:budding_topaz'
    ])

    //Entangled
    allthemods.add('entangled:invalid_targets',
        ['@ae2', '@advancedae', '@extendedae', '@megacells', '@appmek']
    )

    allthemods.add('allthemods:tick_acceleration_blacklist', [
        '@exmachinis',
    ])

    allthemods.add('justdirethings:tick_speed_deny', '#allthemods:tick_acceleration_blacklist')
    allthemods.add('tiab:un_acceleratable', '#allthemods:tick_acceleration_blacklist')
    //allthemods.add('industrialforegoingsouls:cant_accelerate', '#allthemods:tick_acceleration_blacklist')
})

ServerEvents.tags('item', allthemods => {
    // Extreme Reactors
    allthemods.add('c:ingots/yellorium', 'alltheores:uranium_ingot' )
    allthemods.add('c:storage_blocks/yellorium', 'alltheores:uranium_block' )

    // water buckets
    allthemods.add('c:buckets/water', 'exdeorum:porcelain_water_bucket')

    // lava buckets
    allthemods.add('c:buckets/lava', 'exdeorum:porcelain_lava_bucket')

    // Tiny Coal
    allthemods.add('atm10:tiny_coals', [
        'utilitarian:tiny_coal',
        'actuallyadditions:tiny_coal',
    ])
    allthemods.add('atm10:tiny_charcoals', [
        'utilitarian:tiny_charcoal',
        'actuallyadditions:tiny_charcoal',
    ])

    // Allthemodium Alloy Dusts
    allthemods.add('c:dusts/unobtainium_allthemodium_alloy', 'allthemodium:unobtainium_allthemodium_alloy_dust')
    allthemods.add('c:dusts/unobtainium_vibranium_alloy', 'allthemodium:unobtainium_vibranium_alloy_dust')
    allthemods.add('c:dusts/vibranium_allthemodium_alloy', 'allthemodium:vibranium_allthemodium_alloy_dust')
    allthemods.add('c:dusts', [
        '#c:dusts/unobtainium_allthemodium_alloy',
        '#c:dusts/unobtainium_vibranium_alloy',
        '#c:dusts/vibranium_allthemodium_alloy',
    ])

    // Ars Elemental Books
    allthemods.add('minecraft:bookshelf_books', 'ars_elemental:air_caster_tome')
    allthemods.add('minecraft:bookshelf_books', 'ars_elemental:fire_caster_tome')
    allthemods.add('minecraft:bookshelf_books', 'ars_elemental:water_caster_tome')
    allthemods.add('minecraft:bookshelf_books', 'ars_elemental:earth_caster_tome')
    allthemods.add('minecraft:bookshelf_books', 'ars_elemental:anima_caster_tome')
    allthemods.add('minecraft:bookshelf_books', 'ars_elemental:manipulation_caster_tome')

    allthemods.remove('tombstone:seeds', '#mysticalagriculture:seeds')
    allthemods.remove('c:seeds', '#mysticalagriculture:seeds')

    allthemods.add('chisel_chipped_integration:gems/diamond', 'minecraft:diamond_block')
})

ServerEvents.tags('fluid', allthemods => {
    allthemods.add('c:molten_emerald', 'productivemetalworks:molten_emerald')
})

ServerEvents.tags('entity_type', allthemods => {

    allthemods.add('c:bosses', [
        "allthemodium:piglich",
        "#neoforge:bosses",
    ])

    allthemods.add('allthemods:entity_blacklist', [
        'ars_nouveau:animated_block',
        'artifacts:mimic',
        'create:package',
        'mekanism:robit',
        '#c:bosses',
        /occultism:/,
        /productivebees:/
    ])

    allthemods.add('apothic_spawners:blacklisted_from_spawners', '#allthemods:entity_blacklist')
    allthemods.add('enderio:soul_vial_blacklist', '#allthemods:entity_blacklist')
    allthemods.add('industrialforegoing:mob_duplicator_blacklist', '#allthemods:entity_blacklist')
    allthemods.add('industrialforegoing:mob_crusher_blacklist', '#allthemods:entity_blacklist')
    allthemods.add('justdirethings:paradox_deny', '#allthemods:entity_blacklist');
    allthemods.add('tombstone:unhandled_tamable', '#allthemods:entity_blacklist')
    allthemods.add('mob_grinding_utils:no_swab', '#allthemods:entity_blacklist')
    allthemods.add('mob_grinding_utils:no_spawn', '#allthemods:entity_blacklist')
    allthemods.add('enderio:spawner_blacklist', '#allthemods:entity_blacklist')
});

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10 To The Sky.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
