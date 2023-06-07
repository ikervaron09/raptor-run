enum ActionKind {
    Walking,
    Idle,
    Jumping,
    Dead
}
namespace SpriteKind {
    export const Ground = SpriteKind.create()
    export const Cloud = SpriteKind.create()
}
function initGround () {
    ground1 = sprites.create(img`
        ...................................................................................cccc...........................................................................
        ..................................................................................c....c..........................................................................
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc......ccccccccccccccccc....ccccccccccccccccccccccccccccccccccccccccccccccccccccc
        .........................................................................................................cccc.....................................................
        ..................................................................................................................................................................
        ..cccc..c.......................c..cccc.........................cccc..c.............c..........................cccc..c...........c..ccc.................c..ccc....
        ..................................................................................................................................................................
        ...............cccc..c.........................cccc.c.......c..............cc.c........cccc..c.....cccc..c..................c...............cccc..c...............
        ..................................................................................................................................................................
        ..................................................................................................................................................................
        ..................................................................................................................................................................
        ..................................................................................................................................................................
        ..................................................................................................................................................................
        ..................................................................................................................................................................
        ..................................................................................................................................................................
        ..................................................................................................................................................................
        ..................................................................................................................................................................
        ..................................................................................................................................................................
        ..................................................................................................................................................................
        ..................................................................................................................................................................
        ..................................................................................................................................................................
        ..................................................................................................................................................................
        ..................................................................................................................................................................
        ..................................................................................................................................................................
        ..................................................................................................................................................................
        ..................................................................................................................................................................
        ..................................................................................................................................................................
        ..................................................................................................................................................................
        ..................................................................................................................................................................
        ..................................................................................................................................................................
        ..................................................................................................................................................................
        ..................................................................................................................................................................
        `, SpriteKind.Ground)
    ground2 = sprites.create(img`
        .....................................................cccc..................cccc...................................................................................
        ....................................................c....c................c....c..................................................................................
        cccccccccccccccccccccccccccccccccccccccccccccccccccc......cccccccccccccccc......cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ..................................................................................................................................................................
        ..................................................................................................................................................................
        ....ccc..c.................ccc..c...........c..cccc..........................c.............c..cccc.........................cccc..c.......................c..cccc..
        ..................................................................................................................................................................
        ...............c..cccc...............c..................c..cccc.....c..cccc........c.cc..............c.......c.cccc.........................c..cccc...............
        ..................................................................................................................................................................
        ..................................................................................................................................................................
        ..................................................................................................................................................................
        ..................................................................................................................................................................
        ..................................................................................................................................................................
        ..................................................................................................................................................................
        ..................................................................................................................................................................
        ..................................................................................................................................................................
        ..................................................................................................................................................................
        ..................................................................................................................................................................
        ..................................................................................................................................................................
        ..................................................................................................................................................................
        ..................................................................................................................................................................
        ..................................................................................................................................................................
        ..................................................................................................................................................................
        ..................................................................................................................................................................
        ..................................................................................................................................................................
        ..................................................................................................................................................................
        ..................................................................................................................................................................
        ..................................................................................................................................................................
        ..................................................................................................................................................................
        ..................................................................................................................................................................
        ..................................................................................................................................................................
        ..................................................................................................................................................................
        `, SpriteKind.Ground)
    ground1.setPosition(scene.screenWidth() / 2, 120)
    ground2.setPosition(ground1.x + scene.screenWidth(), 120)
    ground1.vx = -100
    ground2.vx = -100
    ground1.z = 2
    ground2.z = 2
}
function initRaptor () {
    raptor = sprites.create(img`
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ........................fff.....
        .......................fcccff...
        ......................fc1fcccf..
        ......................fccccccf..
        .................fffffcccccff...
        .............ffffcccccccccf.....
        .........ffffccccccccccccf......
        .....ffffcccccccccccccccf.......
        ...fccccccccccccccccccccf.......
        ..fccc......fffccccccfffcf......
        ...............ffcccf...cf......
        .................fccf..ff.......
        .................fcf............
        ................fccf............
        ................fcf.............
        ................fcf.............
        .................f..............
        `, SpriteKind.Player)
    run = animation.createAnimation(ActionKind.Walking, 100)
    run.addAnimationFrame(img`
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ........................fff.....
        .......................fcccff...
        ......................fc1fcccf..
        ......................fccccccf..
        .................fffffcccccff...
        .............ffffcccccccccf.....
        .........ffffccccccccccccf......
        .....ffffcccccccccccccccf.......
        ..ffccccccccccccccccccccf.......
        ............fffccccccfffcf......
        ...............ffcccff..cf......
        .................fccff.ff.......
        .................fcfff..........
        ................fccf.ff.........
        ................fcf...f.........
        ................fcf....f........
        .................f..............
        `)
    run.addAnimationFrame(img`
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ........................fff.....
        .......................fcccff...
        ......................fc1fcccf..
        ......................fccccccf..
        .................fffffcccccff...
        .........ffffffffcccccccccf.....
        .....ffffccccccccccccccccf......
        ..ffccccccccccccccccccccf.......
        ............ffcccccccccccf......
        ..............fcccccccffccf.....
        ...............ffffcccf..cf.....
        ................fffffcf.ff......
        ................fff.fcf.........
        ................ff.fccf.........
        ...............ff..fcf..........
        ..............f....fcf..........
        ....................f...........
        `)
    animation.attachAnimation(raptor, run)
    jump = animation.createAnimation(ActionKind.Jumping, 200)
    jump.addAnimationFrame(img`
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ........................fff.....
        .......................fcccff...
        ......................fc1fcccf..
        ......................fccccccf..
        .................fffffcccccff...
        .............ffffcccccccccf.....
        ...........ffccccccccccccf......
        .........ffcccccccccccccf.......
        .......ffcccccccccccccccf.......
        ......fccc..fffccccccfffcf......
        .....fcc.......ffcccf...cf......
        .....fc..........fccf..ff.......
        ....cc...........fcf............
        ....f...........fccf............
        ................fcf.............
        ................fcf.............
        .................f..............
        `)
    animation.attachAnimation(raptor, jump)
    dead = animation.createAnimation(ActionKind.Dead, 200)
    dead.addAnimationFrame(img`
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ........................fff.....
        .......................f111ff...
        ......................fc1f1ccf..
        ......................fc111ccf..
        .................fffffcccccff...
        .............ffffcccccccccf.....
        .........ffffccccccccccccf......
        .....ffffcccccccccccccccf.......
        ...fccccccccccccccccccccf.......
        ..fccc......fffccccccfffcf......
        ...............ffcccf...cf......
        .................fccf..ff.......
        .................fcf............
        ................fccf............
        ................fcf.............
        ................fcf.............
        .................f..............
        `)
    animation.attachAnimation(raptor, dead)
    raptor.z = 3
    raptor.setPosition(15, 94)
}
ControllerButtonEvent.Pressed.onEvent(controller.anyButton, function () {
    if (raptor.x == 94 && end == 0) {
        raptor.vy = -160
        animation.setAction(raptor, ActionKind.Jumping)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    end = 1
    animation.setAction(raptor, ActionKind.Dead)
    pause(50)
    game.over(false, effects.dissolve)
})
let cloud: Sprite = null
let cactus: Sprite = null
let choice = 0
let dead: animation.Animation = null
let jump: animation.Animation = null
let run: animation.Animation = null
let raptor: Sprite = null
let ground2: Sprite = null
let ground1: Sprite = null
let end = 0
let idle = null
game.setDialogCursor(img`
    ................................
    ..1111111111111111111111111111..
    .111111111111111111111111111111.
    11111111111111111111111111111111
    11111111111111111111111111111111
    11111111111111111111111111111111
    11111111111111111111111111111111
    11111111111111111111111111111111
    11111111111111111111111111111111
    111111111111111111111111fff11111
    11111111111111111111111fcccff111
    1111111111111111111111fc1fcccf11
    1111111111111111111111fccccccf11
    11111111111111111fffffcccccff111
    1111111111111ffffcccccccccf11111
    111111111ffffccccccccccccf111111
    11111ffffcccccccccccccccf1111111
    111fccccccccccccccccccccf1111111
    11fccc111111fffccccccfffcf111111
    111111111111111ffcccf111cf111111
    11111111111111111fccf11ff1111111
    11111111111111111fcf111111111111
    1111111111111111fccf111111111111
    1111111111111111fcf1111111111111
    1111111111111111fcf1111111111111
    11111111111111111f11111111111111
    11111111111111111111111111111111
    11111111111111111111111111111111
    11111111111111111111111111111111
    11111111111111111111111111111111
    .111111111111111111111111111111.
    ..1111111111111111111111111111..
    `)
game.splash("Raptor Run")
scene.setBackgroundColor(1)
initGround()
initRaptor()
info.setScore(0)
end = 0
game.showLongText("Press any button to jump.", DialogLayout.Top)
game.onUpdate(function () {
    if (raptor.x < 94) {
        raptor.ay = 400
    } else {
        raptor.ay = 0
        raptor.y = 94
        if (end == 0) {
            animation.setAction(raptor, ActionKind.Walking)
        }
    }
})
game.onUpdateInterval(50, function () {
    info.changeScoreBy(1)
})
game.onUpdateInterval(1000, function () {
    ground1.x += -1
    ground2.x += -1
})
game.onUpdateInterval(1000, function () {
    choice = randint(0, 4)
    if (choice == 0) {
        cactus = sprites.createProjectileFromSide(img`
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ..............ccc...............
            .............ccccc..............
            .............ccccc..............
            .............ccccc...c..........
            .........c...ccccc..ccc.........
            ........ccc..ccccc..ccc.........
            ........ccc..ccccc..ccc.........
            ........ccc..ccccc..ccc.........
            ........cccccccccc..ccc.........
            ........cccccccccc..ccc.........
            .........cccccccccccccc.........
            .............cccccccccc.........
            .............ccccccccc..........
            .............ccccc..............
            .............ccccc..............
            .............ccccc..............
            .............ccccc..............
            .............ccccc..............
            .............ccccc..............
            .............ccccc..............
            `, ground1.x, 0)
        cactus.y = 94
        cactus.z = 2
    } else if (choice == 1) {
        cactus = sprites.createProjectileFromSide(img`
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ..............ccc...............
            .............ccccc..............
            .............ccccc..............
            .............ccccc..............
            .........c...ccccc...c..........
            ........ccc..ccccc..ccc.........
            ........ccc..ccccc..ccc.........
            ........ccc..ccccc..ccc.........
            ........ccc..cccccccccc.........
            ........ccc..cccccccccc.........
            ........cccccccccccccc..........
            ........cccccccccc..............
            .........ccccccccc..............
            .............ccccc..............
            .............ccccc..............
            .............ccccc..............
            .............ccccc..............
            .............ccccc..............
            .............ccccc..............
            .............ccccc..............
            `, ground1.x, 0)
        cactus.y = 94
        cactus.z = 2
    } else if (choice == 2) {
        cactus = sprites.createProjectileFromSide(img`
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ...........c....................
            ..........ccc...................
            ..........ccc......c............
            ........c.ccc.....ccc...........
            ........c.ccc.....ccc.c.........
            ........ccccc.c...ccc.c.........
            ..........ccc.c.c.ccccc.........
            ..........ccccc.c.ccc...........
            ..........ccc...ccccc...........
            ..........ccc.....ccc...........
            ..........ccc.....ccc...........
            ..........ccc.....ccc...........
            `, ground1.x, 0)
        cactus.y = 94
        cactus.z = 2
    }
})
game.onUpdateInterval(1500, function () {
    if (Math.percentChance(40)) {
        cloud = sprites.createProjectileFromSide(img`
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................bbbb.bb.........
            ...............bb.....b.........
            .............bbb......bbb.......
            .............b..........bbbb....
            .............b.............b....
            ..........bbbb.............bbb..
            .........bb..................b..
            .....bbbbb...................bb.
            .....b........................b.
            .bb.bb..b......................b
            bb.......bbbbbbbbbbbbbbbbbbbbbbb
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            `, ground1.x / 4, 0)
        cloud.y = randint(20, 60)
        cloud.setKind(SpriteKind.Cloud)
        cloud.z = 1
    }
})
forever(function () {
    if (ground2.x < -1 * (scene.screenWidth() / 2)) {
        ground2.x = ground1.x + scene.screenWidth()
    }
})
forever(function () {
    if (ground1.x < -1 * (scene.screenWidth() / 2)) {
        ground1.x = ground2.x + scene.screenWidth()
    }
})
