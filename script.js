var name = ['Kiera', 'Tiffany', 'Jeff', 'Erica', 'Brandon'];
var place = ['the kitchen', 'the bathroom', 'the bedroom', 'the parlor', 'the backyard', 'the library', 'the laundry room', 'the living room', 'the garage', 'the frontyard'];
var weapon = ['lightsaber', 'landmine', 'katana', 'hatchet', 'gun', 'grenade', 'heat seeking missile', 'ninja throwing star', 'rope', 'spoon', 'thumbtack', 'childproof scissors', 'the zombie virus', 'vampire bite', 'toothpick', 'desktop pc', 'Samsung Galaxy 8', 'Deadpool 4th wall break', 'wet, angry cat', 'baseball bat'];


// 'Accusation ${i}: I accuse ${this.name}, with a ${this.weapon}, in the ${this.place}!'

$(document).ready(function () {
    for (var i = 1; i < 100; i++) {
        $('body').append($(`<h3>Accusation ${i}</h3>`));
    }
    $('h3').click(function () {
        alert('deadpool sucks!');
    });
});

