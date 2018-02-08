var instance = new TypeIt('#writer', {
     speed: 100,
     deleteSpeed: 70,
     autoStart: false
})
.type('This is')
.pause(300)
.break()
.type('Andela')
.pause(1200)
.delete()
.type('This is ')
.pause(300)
.break()
.type('ALC 2.0')
.pause(1300)
.delete()
.type('This is ')
.pause(500)
.break()
.type('ALC Calabar')
.pause(750)