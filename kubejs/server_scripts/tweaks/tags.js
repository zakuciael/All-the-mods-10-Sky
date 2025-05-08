// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.tags('block', allthemods => {
  // Waystones
  allthemods.add('ftbchunks:interact_whitelist', ['@waystones'])

  // Extreme Reactors
  allthemods.add('c:storage_blocks/yellorium', 'alltheores:uranium_block' )

  // Essence Blocks
  allthemods.add('c:storage_blocks/air_essence', 'kubejs:air_essence_block')
  allthemods.add('c:storage_blocks/earth_essence', 'kubejs:earth_essence_block')
  allthemods.add('c:storage_blocks/fire_essence', 'kubejs:fire_essence_block')
  allthemods.add('c:storage_blocks/water_essence', 'kubejs:water_essence_block')
  allthemods.add('c:storage_blocks', [
    '#c:storage_blocks/air_essence',
    '#c:storage_blocks/earth_essence',
    '#c:storage_blocks/fire_essence',
    '#c:storage_blocks/water_essence'
  ])

  //Entangled
  allthemods.add('entangled:invalid_targets',
      ['@ae2', '@advancedae', '@extendedae', '@megacells', '@appmek']
  )
  
})

ServerEvents.tags('item', allthemods => {
  // Extreme Reactors
  allthemods.add('c:ingots/yellorium', 'alltheores:uranium_ingot' )
  allthemods.add('c:storage_blocks/yellorium', 'alltheores:uranium_block' )

  //Myst AG removals
  allthemods.add('kubejs:olyremovedit', [
    'mysticalagriculture:uraninite_essence', 
    'mysticalagriculture:yellorium_essence', 
    'mysticalagriculture:yellorium_essence', 
    'mysticalagriculture:coal_essence', 
    'mysticalagriculture:honey_essence', 
    'mysticalagriculture:amethyst_essence', 
    'mysticalagriculture:pig_essence', 
    'mysticalagriculture:rubber_essence', 
    'mysticalagriculture:silicon_essence', 
    'mysticalagriculture:sulfur_essence', 
    'mysticalagriculture:aluminum_essence', 
    'mysticalagriculture:saltpeter_essence', 
    'mysticalagriculture:apatite_essence', 
    'mysticalagriculture:grains_of_infinity_essence', 
    'mysticalagriculture:menril_essence', 
    'mysticalagriculture:iron_essence', 
    'mysticalagriculture:copper_essence', 
    'mysticalagriculture:nether_quartz_essence', 
    'mysticalagriculture:glowstone_essence', 
    'mysticalagriculture:redstone_essence', 
    'mysticalagriculture:obsidian_essence', 
    'mysticalagriculture:prismarine_essence', 
    'mysticalagriculture:zombie_essence', 
    'mysticalagriculture:tin_essence', 
    'mysticalagriculture:bronze_essence', 
    'mysticalagriculture:zinc_essence', 
    'mysticalagriculture:brass_essence', 
    'mysticalagriculture:silver_essence', 
    'mysticalagriculture:lead_essence', 
    'mysticalagriculture:graphite_essence', 
    'mysticalagriculture:copper_alloy_essence', 
    'mysticalagriculture:redstone_alloy_essence', 
    'mysticalagriculture:conductive_alloy_essence', 
    'mysticalagriculture:sky_stone_essence', 
    'mysticalagriculture:certus_quartz_essence', 
    'mysticalagriculture:quartz_enriched_iron_essence',
    'mysticalagriculture:gold_essence', 
    'mysticalagriculture:lapis_lazuli_essence', 
    'mysticalagriculture:end_essence', 
    'mysticalagriculture:steel_essence', 
    'mysticalagriculture:nickel_essence', 
    'mysticalagriculture:constantan_essence', 
    'mysticalagriculture:electrum_essence', 
    'mysticalagriculture:invar_essence', 
    'mysticalagriculture:uranium_essence', 
    'mysticalagriculture:ruby_essence', 
    'mysticalagriculture:sapphire_essence', 
    'mysticalagriculture:peridot_essence', 
    'mysticalagriculture:hop_graphite_essence', 
    'mysticalagriculture:soularium_essence', 
    'mysticalagriculture:dark_steel_essence', 
    'mysticalagriculture:pulsating_alloy_essence', 
    'mysticalagriculture:energetic_alloy_essence', 
    'mysticalagriculture:osmium_essence', 
    'mysticalagriculture:fluorite_essence', 
    'mysticalagriculture:refined_glowstone_essence', 
    'mysticalagriculture:refined_obsidian_essence', 
    'mysticalagriculture:fluix_essence', 
    'mysticalagriculture:energized_steel_essence', 
    'mysticalagriculture:blazing_crystal_essence', 
    'mysticalagriculture:diamond_essence', 
    'mysticalagriculture:emerald_essence', 
    'mysticalagriculture:netherite_essence', 
    'mysticalagriculture:platinum_essence', 
    'mysticalagriculture:iridium_essence', 
    'mysticalagriculture:vibrant_alloy_essence', 
    'mysticalagriculture:end_steel_essence', 
    'mysticalagriculture:yellorium_essence', 
    'mysticalagriculture:cyanite_essence', 
    'mysticalagriculture:niotic_crystal_essence', 
    'mysticalagriculture:spirited_crystal_essence', 
    'mysticalagriculture:uraninite_essence',
    'mysticalagriculture:nitro_crystal_essence',
    'mysticalagriculture:uraninite_seeds', 
    'mysticalagriculture:yellorium_seeds', 
    'mysticalagriculture:yellorium_essence', 
    'mysticalagriculture:coal_seeds', 
    'mysticalagriculture:honey_seeds', 
    'mysticalagriculture:amethyst_seeds', 
    'mysticalagriculture:pig_seeds', 
    'mysticalagriculture:rubber_seeds', 
    'mysticalagriculture:silicon_seeds', 
    'mysticalagriculture:sulfur_seeds', 
    'mysticalagriculture:aluminum_seeds', 
    'mysticalagriculture:saltpeter_seeds', 
    'mysticalagriculture:apatite_seeds', 
    'mysticalagriculture:grains_of_infinity_seeds', 
    'mysticalagriculture:menril_seeds', 
    'mysticalagriculture:iron_seeds', 
    'mysticalagriculture:copper_seeds', 
    'mysticalagriculture:nether_quartz_seeds', 
    'mysticalagriculture:glowstone_seeds', 
    'mysticalagriculture:redstone_seeds', 
    'mysticalagriculture:obsidian_seeds', 
    'mysticalagriculture:prismarine_seeds', 
    'mysticalagriculture:zombie_seeds', 
    'mysticalagriculture:tin_seeds', 
    'mysticalagriculture:bronze_seeds', 
    'mysticalagriculture:zinc_seeds', 
    'mysticalagriculture:brass_seeds', 
    'mysticalagriculture:silver_seeds', 
    'mysticalagriculture:lead_seeds', 
    'mysticalagriculture:graphite_seeds', 
    'mysticalagriculture:copper_alloy_seeds', 
    'mysticalagriculture:redstone_alloy_seeds', 
    'mysticalagriculture:conductive_alloy_seeds', 
    'mysticalagriculture:sky_stone_seeds', 
    'mysticalagriculture:certus_quartz_seeds', 
    'mysticalagriculture:quartz_enriched_iron_seeds',
    'mysticalagriculture:gold_seeds', 
    'mysticalagriculture:lapis_lazuli_seeds', 
    'mysticalagriculture:end_seeds', 
    'mysticalagriculture:steel_seeds', 
    'mysticalagriculture:nickel_seeds', 
    'mysticalagriculture:constantan_seeds', 
    'mysticalagriculture:electrum_seeds', 
    'mysticalagriculture:invar_seeds', 
    'mysticalagriculture:uranium_seeds', 
    'mysticalagriculture:ruby_seeds', 
    'mysticalagriculture:sapphire_seeds', 
    'mysticalagriculture:peridot_seeds', 
    'mysticalagriculture:hop_graphite_seeds', 
    'mysticalagriculture:soularium_seeds', 
    'mysticalagriculture:dark_steel_seeds', 
    'mysticalagriculture:pulsating_alloy_seeds', 
    'mysticalagriculture:energetic_alloy_seeds', 
    'mysticalagriculture:osmium_seeds', 
    'mysticalagriculture:fluorite_seeds', 
    'mysticalagriculture:refined_glowstone_seeds', 
    'mysticalagriculture:refined_obsidian_seeds', 
    'mysticalagriculture:fluix_seeds', 
    'mysticalagriculture:energized_steel_seeds', 
    'mysticalagriculture:blazing_crystal_seeds', 
    'mysticalagriculture:diamond_seeds', 
    'mysticalagriculture:emerald_seeds', 
    'mysticalagriculture:netherite_seeds', 
    'mysticalagriculture:platinum_seeds', 
    'mysticalagriculture:iridium_seeds', 
    'mysticalagriculture:vibrant_alloy_seeds', 
    'mysticalagriculture:end_steel_seeds', 
    'mysticalagriculture:yellorium_seeds', 
    'mysticalagriculture:cyanite_seeds', 
    'mysticalagriculture:niotic_crystal_seeds', 
    'mysticalagriculture:spirited_crystal_seeds', 
    'mysticalagriculture:uraninite_seeds',
    'mysticalagriculture:nitro_crystal_seeds'
 ])
   
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
  // Essence Blocks
  allthemods.add('c:storage_blocks/air_essence', 'kubejs:air_essence_block')
  allthemods.add('c:storage_blocks/earth_essence', 'kubejs:earth_essence_block')
  allthemods.add('c:storage_blocks/fire_essence', 'kubejs:fire_essence_block')
  allthemods.add('c:storage_blocks/water_essence', 'kubejs:water_essence_block')
  allthemods.add('c:storage_blocks', [
    '#c:storage_blocks/air_essence',
    '#c:storage_blocks/earth_essence',
    '#c:storage_blocks/fire_essence',
    '#c:storage_blocks/water_essence'
  ])

  // Ars Elemental Books
  allthemods.add('minecraft:bookshelf_books', 'ars_elemental:air_caster_tome')
  allthemods.add('minecraft:bookshelf_books', 'ars_elemental:fire_caster_tome')
  allthemods.add('minecraft:bookshelf_books', 'ars_elemental:water_caster_tome')
  allthemods.add('minecraft:bookshelf_books', 'ars_elemental:earth_caster_tome')
  allthemods.add('minecraft:bookshelf_books', 'ars_elemental:anima_caster_tome')
  allthemods.add('minecraft:bookshelf_books', 'ars_elemental:manipulation_caster_tome')
})

ServerEvents.tags('entity_type', allthemods => {
  // Productive Bees
  allthemods.add('justdirethings:paradox_deny', /productivebees:/);
  allthemods.add('industrialforegoing:mob_duplicator_blacklist', /productivebees:/)

  // Allthemodium
  allthemods.add('justdirethings:paradox_deny', 'allthemodium:piglich');
  allthemods.add('industrialforegoing:mob_duplicator_blacklist', 'allthemodium:piglich')

  // Occultism
  allthemods.add('justdirethings:paradox_deny', /occultism:/);
  allthemods.add('industrialforegoing:mob_duplicator_blacklist', /occultism:/)

  //Industrial Foregoing
  allthemods.add('industrialforegoing:mob_crusher_blacklist', [
    "minecraft:warden",
    "minecraft:elder_guardian",
    "minecraft:ender_dragon",
    "minecraft:wither",
    "artifacts:mimic",
    "allthemodium:piglich"
  ])

});

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
