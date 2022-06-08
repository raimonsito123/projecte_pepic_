// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100005060606060606060606060606060607010a0a0a100a030a110a0a0a0a0a0a09010a0b0f120f0e0f120f0a0f0f0b0a09010a02020a0f0a0f0a0c0a0c0a0a0a09010a0c0a0a0f0b0f0a0c0c0c0c0c0a09010a0c0a0b0f0a0f0a0a0a0a0a0a0b09010a0c0a0a0f0a0f0c0c0c0c0c0c0a09010a0c0a0a0a0a0a0a0a0a0b0a0c0a09010a0a0a0b0a0a0b0c0c0a0c0a0c0a09010c0c0c0c0c0a0a0c0a0a0a0a0c0a09010c0c0c0c0c0a0a0c0c0a0b0c0c0a09010c0a0b0a0a0a0a0a0c0a0a0a0a0a09010c0a0c0c0c0a0a0a0a0c0c0c0c0a09010a0a0a0c0c0e0b0e0a0a0a0a0a0a09010a0c0b0c0c0e0a0e0c0c0c0a0a0a09040d0d0d0d0d0e0a0e0d0d0d0d0d0d08`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . 2 . . . . . . . . . . 2 
2 . . 2 2 2 2 2 2 2 . 2 2 . . 2 
2 . 2 2 . 2 . 2 . 2 . 2 . . . 2 
2 . 2 . . 2 . 2 . 2 2 2 2 2 . 2 
2 . 2 . . 2 . 2 . . . . . . . 2 
2 . 2 . . 2 . 2 2 2 2 2 2 2 . 2 
2 . 2 . . . . . . . . . . 2 . 2 
2 . . . . . . . 2 2 . 2 . 2 . 2 
2 2 2 2 2 2 . . 2 . . . . 2 . 2 
2 2 2 2 2 2 . . 2 2 . . 2 2 . 2 
2 2 . . . . . . . 2 . . . . . 2 
2 2 . 2 2 2 . . . . 2 2 2 2 . 2 
2 . . . 2 2 2 . 2 . . . . . . 2 
2 . 2 . 2 2 2 . 2 2 2 2 . . . 2 
2 2 2 2 2 2 2 . 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.dungeon.darkGroundWest,sprites.dungeon.darkGroundNorthEast1,sprites.dungeon.chestClosed,sprites.dungeon.darkGroundSouthWest0,sprites.dungeon.darkGroundNorthWest0,sprites.dungeon.darkGroundNorth,sprites.dungeon.darkGroundNorthEast0,sprites.dungeon.darkGroundSouthEast0,sprites.dungeon.darkGroundEast,sprites.dungeon.floorDark0,sprites.dungeon.floorDark1,sprites.dungeon.darkGroundNorthWest1,sprites.dungeon.darkGroundSouth,sprites.dungeon.doorClosedNorth,sprites.dungeon.darkGroundSouthWest1,sprites.dungeon.doorClosedEast,sprites.dungeon.doorClosedWest,sprites.dungeon.darkGroundSouthEast1], TileScale.Sixteen);
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
