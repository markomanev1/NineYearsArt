// Static example tilemaps. No wall flags or game behavior.
namespace nineYearsArt {
    //% fixedInstance jres whenUsed tags="nine-years-art"
    export const level1_home_garden = tiles.createTilemap(
        hex`10000c000b0d0d0d0d0d0d0d0d0d0d0d0d0d0d0e0a02020202040404040404020202020a0a03110303040404040404031103030a0a01011101051205081205010111010a0a02020202020202150202020202020a0a03060f0f0303031603030f0f06030a0a01010101010101160101010101010a0a02141818181818191818181817020a0a03070303030303160303030303030a0a0111010f0101011601010f0111010a0a02020206020202130202060202020a090d0d0d0d0d0d0d100d0d0d0d0d0d0c`,
        img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        `,
        [garden_transparency_0, garden_ground_0_0, garden_ground_1_0, garden_ground_2_0, garden_house_roof_0, garden_house_wall_0, garden_map_bush_0, garden_map_decorative_stones_0, garden_map_door_0, garden_map_fence_03_0, garden_map_fence_05_0, garden_map_fence_06_0, garden_map_fence_09_0, garden_map_fence_0a_0, garden_map_fence_0c_0, garden_map_flowers_0, garden_map_garden_gate_0, garden_map_tree_0, garden_map_window_0, garden_path_01_0, garden_path_02_0, garden_path_04_0, garden_path_05_0, garden_path_08_0, garden_path_0a_0, garden_path_0f_0], TileScale.Sixteen);
    //% fixedInstance jres whenUsed tags="nine-years-art"
    export const level1_pond_walk = tiles.createTilemap(
        hex`10000c000709090909090909090909090909090a0602020202020d0202020d0202020206060d0311131313131313131314030d060601011001010101010101011001010606020b1004191a1a1a1a1802100b020606030310031a1a1a1a1a1a031003030606010110011a1a1a1a1a1a011001010606020b1002161a1a1a1a1704100b0206060d0310030304030303030310030d060601010f13131313151313131201010606020202020b02020e02020b0202020605090909090909090c09090909090908`,
        img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        `,
        [garden_transparency_0, garden_ground_0_0, garden_ground_1_0, garden_ground_2_0, garden_map_decorative_stones_0, garden_map_fence_03_0, garden_map_fence_05_0, garden_map_fence_06_0, garden_map_fence_09_0, garden_map_fence_0a_0, garden_map_fence_0c_0, garden_map_flowers_0, garden_map_garden_gate_0, garden_map_tree_0, garden_path_01_0, garden_path_03_0, garden_path_05_0, garden_path_06_0, garden_path_09_0, garden_path_0a_0, garden_path_0c_0, garden_path_0e_0, garden_water_terrain_07_0, garden_water_terrain_0b_0, garden_water_terrain_0d_0, garden_water_terrain_0e_0, garden_water_terrain_0f_0], TileScale.Sixteen);
    //% fixedInstance jres whenUsed tags="nine-years-art"
    export const level1_first_steps = tiles.createTilemap(
        hex`1e001400111313131313131313131313131313131313131313131313131313131314100e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e10100e0906090909090d09090e090909090909090e09090707090709090e10100e0905090909090909090e09090b0c0909090e09090909090909090e10100e0909090909090909090e090909090909090e09090909090909090e10100e0909090909090909090e090909090d09090909090909090909090e10100e0e0e0e0e0e090e0e0e0e090909090909090e0e0e0e0e0e0e0e0e0e10100e090909090909090909090909090a0909090909090909090909090e10100e09090909090909090909090909090909090909090909090909090e10100e0e0e0e0e0e0e0e0e0e0e0e0e0e0e090e0e0e0e0e0e0e0e0e0e0e0e1010040203040215040203040203040203180203040203040203040203041010020316020304191a1a1a1a1a1a1a1a1b030402030402160402030402101003040203160218041603041f202020082020201e0203040203160203101004021504020318021504022020202008202020200304021504020304101002030401010118010102032020202008202020200402030402150402101003040201010118010103041c202020082020201d02030402030402031010040215010101180101150203040203180203040203160203041603041010021604020304171a1a1a1a1a1a1a1a1b0304020304020304020304021010030402030402030402031602030402171a1a1a1a1a1a1a1a1a1a1a1a020f1313131313131313131313131313131313131313131313131313131312`,
        img`
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        `,
        [garden_transparency_0, garden_clearing_0, garden_ground_0_0, garden_ground_1_0, garden_ground_2_0, garden_level1_bed_foot_0, garden_level1_bed_head_0, garden_level1_bookshelf_0, garden_level1_bridge_water_0, garden_level1_floor_0, garden_level1_rug_0, garden_level1_sofa_left_0, garden_level1_sofa_right_0, garden_level1_table_0, garden_level1_wall_0, garden_map_fence_03_0, garden_map_fence_05_0, garden_map_fence_06_0, garden_map_fence_09_0, garden_map_fence_0a_0, garden_map_fence_0c_0, garden_map_flowers_0, garden_map_tree_0, garden_path_03_0, garden_path_05_0, garden_path_06_0, garden_path_0a_0, garden_path_0d_0, garden_water_terrain_07_0, garden_water_terrain_0b_0, garden_water_terrain_0d_0, garden_water_terrain_0e_0, garden_water_terrain_0f_0], TileScale.Sixteen);
}
