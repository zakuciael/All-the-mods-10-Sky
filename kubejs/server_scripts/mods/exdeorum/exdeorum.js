ServerEvents.recipes(allthemods => {

    /**
     * @readonly
     * @enum {string}
     */
    const Materials = {
        Dirt: 'minecraft:dirt',
        Moss: 'minecraft:moss_block',
        Gravel: 'minecraft:gravel',
        Sand: 'minecraft:sand',
        RedSand: 'minecraft:red_sand',
        SoulSand: 'minecraft:soul_sand',
        Dust: 'exdeorum:dust',
        Deepslate: 'exdeorum:crushed_deepslate',
        EndStone: 'exdeorum:crushed_end_stone',
        Netherrack: 'exdeorum:crushed_netherrack',
        Blackstone: 'exdeorum:crushed_blackstone'
    };

    /**
     * @readonly
     * @enum {string}
     */
    const Meshes = {
        STRING:   'exdeorum:string_mesh',
        FLINT:    'exdeorum:flint_mesh',
        IRON:     'exdeorum:iron_mesh',
        GOLD:     'exdeorum:golden_mesh',
        DIAMOND:  'exdeorum:diamond_mesh',
        NETHERITE:'exdeorum:netherite_mesh'
    };

    allthemods.remove({id: Meshes.FLINT})
    allthemods.remove({id: Meshes.IRON})
    allthemods.remove({id: Meshes.GOLD})
    allthemods.remove({id: Meshes.DIAMOND})

    /**
     * @param {Materials} input
     * @param {Meshes} mesh
     * @param {string} result
     * @param {number} [amount]
     * @param {number} [chance]
     */
    function sieving(input, mesh, result, amount, chance) {
        allthemods.custom({
            type: 'exdeorum:sieve',
            ingredient: { item: input },
            mesh: mesh,
            result: result,
            result_amount: {
                type: 'minecraft:binomial',
                n: amount || 1,
                p: chance || 1
            }
        }).id(`allthemods:exdeorum/sieve/${mesh.split(':')[1]}/${result.split(':')[1]}`);
    }

    /**
     * @param {string} input
     * @param {string} result
     * @param {number} [amount]
     */
    function hammer(input, result, amount) {
        allthemods.custom({
            type: 'exdeorum:hammer',
            ingredient: [{ item: input }],
            result: result,
            result_amount: amount || 1.0
        }).id(`allthemods:exdeorum/hammer/${result.split(':')[1]}`);
    }

    /**
     * @param {string} fluid
     * @param {string} input
     * @param {string} result
     * @param {number} [fluidAmount]
     */
    function barrelMixin(fluid, input, result, fluidAmount) {
        allthemods.custom({
            type: 'exdeorum:barrel_mixing',
            fluid: fluid,
            fluid_amount: fluidAmount || 1000,
            ingredient: Ingredient.of(input),
            result: result
        }).id(`allthemods:exdeorum/barrel_mixing/item/${fluid.split(':')[1]}/${result.split(':')[1]}`);
    }

    /**
     * @param {string}  baseFluid
     * @param {string}  addFluid
     * @param {boolean} consumes
     * @param {string}  result
     * @param {number}  [baseAmount]
     */
    function barrelFluidMixing(baseFluid, addFluid, consumes, result, baseAmount) {
        allthemods.custom({
            type: 'exdeorum:barrel_fluid_mixing',
            base_fluid: baseFluid,
            base_fluid_amount: baseAmount || 1000,
            additive_fluid: addFluid,
            consumes_additive: consumes,
            result: result
        }).id(`allthemods:exdeorum/barrel_mixing/fluid/${addFluid.split(':')[1]}/${result.split(':')[1]}`);
    }

    /**
     * @param {string} block
     * @param {number} heatValue
     */
    function heatSource(block, heatValue) {
        allthemods.custom({
            type: 'exdeorum:crucible_heat_source',
            block_predicate: { block: block },
            heat_value: heatValue
        }).id(`allthemods:exdeorum/heat_source/${block.split(':')[1]}`);
    }

    /**
     * @param {string} input
     * @param {string} fluidName
     * @param {number} amount
     */
    function lavaCrucible(input, fluidName, amount) {
        allthemods.custom({
            type: 'exdeorum:lava_crucible',
            ingredient: Ingredient.of(input),
            fluid: { FluidName: fluidName, Amount: amount }
        }).id(`allthemods:exdeorum/lava_crucible/${fluidName}/${fluidName.split(':')[1]}`);
    }

    // Xycraft Gems
    // addSifting(Dust, FlintMesh, 'xycraft_world:xychorium_gem_blue', 1, 0.04)
    // addSifting(Dust, FlintMesh, 'xycraft_world:xychorium_gem_red', 1, 0.04)
    // addSifting(Dust, FlintMesh, 'xycraft_world:xychorium_gem_green', 1, 0.04)
    // addSifting(Dust, FlintMesh, 'xycraft_world:xychorium_gem_light', 1, 0.04)
    // addSifting(Dust, FlintMesh, 'xycraft_world:xychorium_gem_dark', 1, 0.04)
    //
    // addSifting(Dust, IronMesh, 'xycraft_world:xychorium_gem_blue', 1, 0.05)
    // addSifting(Dust, IronMesh, 'xycraft_world:xychorium_gem_red', 1, 0.05)
    // addSifting(Dust, IronMesh, 'xycraft_world:xychorium_gem_green', 1, 0.05)
    // addSifting(Dust, IronMesh, 'xycraft_world:xychorium_gem_light', 1, 0.05)
    // addSifting(Dust, IronMesh, 'xycraft_world:xychorium_gem_dark', 1, 0.05)
    //
    // addSifting(Dust, DiamondMesh, 'xycraft_world:xychorium_gem_blue', 1, 0.06)
    // addSifting(Dust, DiamondMesh, 'xycraft_world:xychorium_gem_red', 1, 0.06)
    // addSifting(Dust, DiamondMesh, 'xycraft_world:xychorium_gem_green', 1, 0.06)
    // addSifting(Dust, DiamondMesh, 'xycraft_world:xychorium_gem_light', 1, 0.06)
    // addSifting(Dust, DiamondMesh, 'xycraft_world:xychorium_gem_dark', 1, 0.06)
    //
    // addSifting(Dust, NetheriteMesh, 'xycraft_world:xychorium_gem_blue', 1, 0.08)
    // addSifting(Dust, NetheriteMesh, 'xycraft_world:xychorium_gem_red', 1, 0.08)
    // addSifting(Dust, NetheriteMesh, 'xycraft_world:xychorium_gem_green', 1, 0.08)
    // addSifting(Dust, NetheriteMesh, 'xycraft_world:xychorium_gem_light', 1, 0.08)
    // addSifting(Dust, NetheriteMesh, 'xycraft_world:xychorium_gem_dark', 1, 0.08)
    [
        { mesh: Meshes.FLINT,     chance: 0.04 },
        { mesh: Meshes.IRON,      chance: 0.05 },
        { mesh: Meshes.DIAMOND,   chance: 0.06 },
        { mesh: Meshes.NETHERITE, chance: 0.08 }
    ].forEach(entry => {
        ['blue', 'red', 'green', 'light', 'dark'].forEach(color => {
            sieving(
                Materials.Dust,
                entry.mesh,
                `xycraft_world:xychorium_gem_${color}`,
                1,
                entry.chance
            );
        });
    });

    // Arcane Crystal
    // addSifting(Dust, IronMesh, 'forbidden_arcanus:arcane_crystal', 1, 0.05)
    // addSifting(Dust, DiamondMesh, 'forbidden_arcanus:arcane_crystal', 1, 0.06)
    // addSifting(Dust, NetheriteMesh, 'forbidden_arcanus:arcane_crystal', 1, 0.08)
    [
        { mesh: Meshes.IRON,     amount: 1, chance: 0.05 },
        { mesh: Meshes.DIAMOND,  amount: 2, chance: 0.06 },
        { mesh: Meshes.NETHERITE,amount: 2, chance: 0.08 }
    ].forEach(entry => {
        sieving(Materials.Deepslate, entry.mesh, 'forbidden_arcanus:arcane_crystal', entry.amount, entry.chance);
    });

    // Diamond Adjustment
    allthemods.remove({output: 'minecraft:diamond', type: 'exdeorum:sieve', mod: 'exdeorum'});
    // addSifting(Gravel, IronMesh, 'minecraft:diamond', 1, 0.01)
    // addSifting(Gravel, GoldMesh, 'minecraft:diamond', 1, 0.04)
    // addSifting(Gravel, DiamondMesh, 'minecraft:diamond', 1, 0.06)
    // addSifting(Gravel, NetheriteMesh, 'minecraft:diamond', 2, 0.06)
    [
        { mesh: Meshes.IRON,     amount: 1, chance: 0.01 },
        { mesh: Meshes.GOLD,     amount: 1, chance: 0.04 },
        { mesh: Meshes.DIAMOND,  amount: 1, chance: 0.06 },
        { mesh: Meshes.NETHERITE,amount: 2, chance: 0.06 }
    ].forEach(entry => {
        sieving(Materials.Gravel, entry.mesh, 'minecraft:diamond', entry.amount, entry.chance);
    });

    //Emerald Adjustment
    allthemods.remove({output: 'minecraft:emerald', type: 'exdeorum:sieve', mod: 'exdeorum'});
    // addSifting(Gravel, IronMesh, 'minecraft:emerald', 1, 0.01)
    // addSifting(Gravel, GoldMesh, 'minecraft:emerald', 1, 0.03)
    // addSifting(Gravel, DiamondMesh, 'minecraft:emerald', 1, 0.04)
    // addSifting(Gravel, NetheriteMesh, 'minecraft:emerald', 2, 0.05)
    [
        { mesh: Meshes.IRON,     amount: 1, chance: 0.01 },
        { mesh: Meshes.GOLD,     amount: 1, chance: 0.03 },
        { mesh: Meshes.DIAMOND,  amount: 1, chance: 0.04 },
        { mesh: Meshes.NETHERITE,amount: 2, chance: 0.05 }
    ].forEach(entry => {
        sieving(Materials.Gravel, entry.mesh, 'minecraft:emerald', entry.amount, entry.chance);
    });

    // Salt
    // addSifting(Dust, IronMesh, 'mekanism:salt', 1, 0.15)
    // addSifting(Dust, DiamondMesh, 'mekanism:salt', 1, 0.15)
    // addSifting(Dust, GoldMesh, 'mekanism:salt', 1, 0.15)
    // addSifting(Dust, NetheriteMesh, 'mekanism:salt', 2, 0.12)
    [
        { mesh: Meshes.IRON,     amount: 1, chance: 0.15 },
        { mesh: Meshes.GOLD,     amount: 1, chance: 0.15 },
        { mesh: Meshes.DIAMOND,  amount: 1, chance: 0.15 },
        { mesh: Meshes.NETHERITE,amount: 2, chance: 0.12 }
    ].forEach(entry => {
        sieving(Materials.Dust, entry.mesh, 'alltheores:salt', entry.amount, entry.chance);
    });

    // Prosperity Shard
    // addSifting(SoulSand, IronMesh, 'mysticalagriculture:prosperity_shard', 1, 0.2)
    // addSifting(SoulSand, DiamondMesh, 'mysticalagriculture:prosperity_shard', 1, 0.2)
    // addSifting(SoulSand, GoldMesh, 'mysticalagriculture:prosperity_shard', 1, 0.2)
    // addSifting(SoulSand, NetheriteMesh, 'mysticalagriculture:prosperity_shard', 2, 0.18)
    [
        { mesh: Meshes.IRON,     amount: 1, chance: 0.2 },
        { mesh: Meshes.GOLD,     amount: 1, chance: 0.2 },
        { mesh: Meshes.DIAMOND,  amount: 1, chance: 0.2 },
        { mesh: Meshes.NETHERITE,amount: 2, chance: 0.18 }
    ].forEach(entry => {
        sieving(Materials.SoulSand, entry.mesh, 'mysticalagriculture:prosperity_shard', entry.amount, entry.chance);
    });

    // Fluorite
    // addSifting(Sand, IronMesh, 'mekanism:fluorite_gem', 1, 0.15)
    // addSifting(Sand, DiamondMesh, 'mekanism:fluorite_gem', 1, 0.15)
    // addSifting(Sand, GoldMesh, 'mekanism:fluorite_gem', 1, 0.15)
    // addSifting(Sand, NetheriteMesh, 'mekanism:fluorite_gem', 2, 0.12)
    [
        { mesh: Meshes.IRON,     amount: 1, chance: 0.15 },
        { mesh: Meshes.GOLD,     amount: 1, chance: 0.15 },
        { mesh: Meshes.DIAMOND,  amount: 1, chance: 0.15 },
        { mesh: Meshes.NETHERITE,amount: 2, chance: 0.12 }
    ].forEach(entry => {
        sieving(Materials.Sand, entry.mesh, 'alltheores:fluorite', entry.amount, entry.chance);
    });

    // Black Quartz
    // addSifting(Sand, IronMesh, 'actuallyadditions:black_quartz', 1, 0.10)
    // addSifting(Sand, DiamondMesh, 'actuallyadditions:black_quartz', 1, 0.11)
    // addSifting(Sand, GoldMesh, 'actuallyadditions:black_quartz', 1, 0.11)
    // addSifting(Sand, NetheriteMesh, 'actuallyadditions:black_quartz', 2, 0.11)
    [
        { mesh: Meshes.IRON,     amount: 1, chance: 0.10 },
        { mesh: Meshes.GOLD,     amount: 1, chance: 0.11 },
        { mesh: Meshes.DIAMOND,  amount: 1, chance: 0.11 },
        { mesh: Meshes.NETHERITE,amount: 2, chance: 0.11 }
    ].forEach(entry => {
        sieving(Materials.Sand, entry.mesh, 'actuallyadditions:black_quartz', entry.amount, entry.chance);
    });

    // Uraninite
    // addSifting(Sand, DiamondMesh, 'powah:uraninite', 1, 0.05)
    // addSifting(Sand, NetheriteMesh, 'powah:uraninite', 2, 0.06)
    [
        { mesh: Meshes.DIAMOND,  amount: 1, chance: 0.05 },
        { mesh: Meshes.NETHERITE,amount: 2, chance: 0.06 }
    ].forEach(entry => {
        sieving(Materials.Sand, entry.mesh, 'powah:uraninite', entry.amount, entry.chance);
    });

    // Saplings
    // addSifting(Moss, IronMesh, 'integrateddynamics:menril_sapling', 1, 0.1)
    // addSifting(Moss, GoldMesh, 'integrateddynamics:menril_sapling', 1, 0.1)
    // addSifting(Moss, DiamondMesh, 'integrateddynamics:menril_sapling', 1, 0.1)
    // addSifting(Moss, NetheriteMesh, 'integrateddynamics:menril_sapling', 1, 0.1)
    // addSifting(Moss, IronMesh, 'forbidden_arcanus:growing_edelwood', 1, 0.1)
    // addSifting(Moss, GoldMesh, 'forbidden_arcanus:growing_edelwood', 1, 0.1)
    // addSifting(Moss, DiamondMesh, 'forbidden_arcanus:growing_edelwood', 1, 0.1)
    // addSifting(Moss, NetheriteMesh, 'forbidden_arcanus:growing_edelwood', 1, 0.1)
    // addSifting(Moss, FlintMesh, 'ars_elemental:yellow_archwood_sapling', 1, 0.1)
    // addSifting(Moss, IronMesh, 'ars_elemental:yellow_archwood_sapling', 1, 0.1)
    // addSifting(Moss, GoldMesh, 'ars_elemental:yellow_archwood_sapling', 1, 0.1)
    // addSifting(Moss, DiamondMesh, 'ars_elemental:yellow_archwood_sapling', 1, 0.1)
    // addSifting(Moss, NetheriteMesh, 'ars_elemental:yellow_archwood_sapling', 1, 0.1)
    [
        { mesh: Meshes.IRON,     },
        { mesh: Meshes.GOLD,     },
        { mesh: Meshes.DIAMOND,  },
        { mesh: Meshes.NETHERITE }
    ].forEach(entry => {
        sieving(Materials.Moss, entry.mesh, 'integrateddynamics:menril_sapling',    1, 0.1);
        sieving(Materials.Moss, entry.mesh, 'forbidden_arcanus:growing_edelwood',   1, 0.1);
        sieving(Materials.Moss, entry.mesh, 'ars_elemental:yellow_archwood_sapling',1, 0.1);
    });
    sieving(Materials.Moss, Meshes.FLINT, 'ars_elemental:yellow_archwood_sapling',  1, 0.1);

    // Soulium dust
    // addSifting(SoulSand, DiamondMesh, 'mysticalagriculture:soulium_dust', 1, 0.05)
    // addSifting(SoulSand, NetheriteMesh, 'mysticalagriculture:soulium_dust', 1, 0.1)
    [
        { mesh: Meshes.DIAMOND,  amount: 1, chance: 0.05 },
        { mesh: Meshes.NETHERITE,amount: 1, chance: 0.1 }
    ].forEach(entry => {
        sieving(Materials.SoulSand, entry.mesh, 'mysticalagriculture:soulium_dust', entry.amount, entry.chance);
    });

    // addSifting(Blackstone, NetheriteMesh, 'occultism:raw_iesnium', 1, 0.05)
    sieving(Materials.Blackstone, Meshes.NETHERITE, 'occultism:raw_iesnium', 1, 0.05);

    [
        { mesh: Meshes.IRON,     amount: 1, chance: 0.08 },
        { mesh: Meshes.GOLD,     amount: 1, chance: 0.08 },
        { mesh: Meshes.DIAMOND,  amount: 1, chance: 0.11 },
        { mesh: Meshes.NETHERITE,amount: 2, chance: 0.11 }
    ].forEach(entry => {
        [
            'create:veridium',
            'create:crimsite',
            'create:asurine',
            'xycraft_world:kivi'
        ].forEach(item => {
            sieving(Materials.Gravel, entry.mesh, item, entry.amount, entry.chance);
        })
    });

    sieving(Materials.Sand, Meshes.DIAMOND, 'minecraft:cactus', 1, 0.12)

    // Crucible heating blocks
    // addHeatSource(`alltheores:uranium_block`, 20)
    // addHeatSource(`mekanism:superheating_element`, 60)
    heatSource('alltheores:uranium_block',      20);
    heatSource('mekanism:superheating_element', 60);
})