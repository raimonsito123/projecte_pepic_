// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100005060606060606060606060606060607010a0a0a110a030a120a0a0a0a0a0a09010a0b1013100f1013100a10100a0a09010a02020a100a100a0d0a0d0a0a0a09010a0d0a0a100b100a0d0d0d0d0d0a09010a0d0a0b100a100a0a0a0a0a0a0a09010a0d0c0a100a100d0d0d0d0d0d0a09010a0d0c0a100d0a0a0a0a0b030d0a09010a0a0a0a0a0a0b0d0d0a0d0a0d0a09010d0d0d0d0d0a0d0d0a0a0a0a0d0a09010d0d0d0d0d0a0d0d0d0a0c0d0d0a09010d0a0a0a0a0a0a0a0d0a0a0a0a0a09010d0a0d0d0d0a0a0a0a0d0d0d0d0a09010a0a0a0d0d0f0c0f0a0a0a0a0a0a0901030d0b0d0d0f0a0f0d0d0d0a0a0a09040e0e0e0e0e0f0a0f0e0e0e0e0e0e08`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . 2 . . . . . . . . . . 2 
2 . . 2 2 2 2 2 2 2 . 2 2 . . 2 
2 . 2 2 . 2 . 2 . 2 . 2 . . . 2 
2 . 2 . . 2 . 2 . 2 2 2 2 2 . 2 
2 . 2 . . 2 . 2 . . . . . . . 2 
2 . 2 . . 2 . 2 2 2 2 2 2 2 . 2 
2 . 2 . . 2 2 . . . . . . 2 . 2 
2 . . . . . . . 2 2 . 2 . 2 . 2 
2 2 2 2 2 2 . 2 2 . . . . 2 . 2 
2 2 2 2 2 2 . 2 2 2 . . 2 2 . 2 
2 2 . . . . . . . 2 . . . . . 2 
2 2 . 2 2 2 . . . . 2 2 2 2 . 2 
2 . . . 2 2 2 . 2 . . . . . . 2 
2 . 2 . 2 2 2 . 2 2 2 2 . . . 2 
2 2 2 2 2 2 2 . 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.dungeon.darkGroundWest,sprites.dungeon.darkGroundNorthEast1,sprites.dungeon.chestClosed,sprites.dungeon.darkGroundSouthWest0,sprites.dungeon.darkGroundNorthWest0,sprites.dungeon.darkGroundNorth,sprites.dungeon.darkGroundNorthEast0,sprites.dungeon.darkGroundSouthEast0,sprites.dungeon.darkGroundEast,sprites.dungeon.floorDark0,sprites.dungeon.floorDark1,sprites.dungeon.floorDark3,sprites.dungeon.darkGroundNorthWest1,sprites.dungeon.darkGroundSouth,sprites.dungeon.doorClosedNorth,sprites.dungeon.darkGroundSouthWest1,sprites.dungeon.doorClosedEast,sprites.dungeon.doorClosedWest,sprites.dungeon.darkGroundSouthEast1], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
