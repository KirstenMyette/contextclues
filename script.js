
var name = ['Kiera', 'Tiffany', 'Jeff', 'Erica', 'Brandon'];
var place = ['the kitchen', 'the bathroom', 'the bedroom', 'the parlor', 'the backyard', 'the library', 'the laundry room', 'the living room', 'the garage', 'the frontyard'];
var weapon = ['lightsaber', 'landmine', 'katana', 'hatchet', 'gun', 'grenade', 'heat seeking missile', 'ninja throwing star', 'rope', 'spoon', 'thumbtack', 'childproof scissors', 'the zombie virus', 'vampire bite', 'toothpick', 'desktop pc', 'Samsung Galaxy 8', 'Deadpool 4th wall break', 'wet, angry cat', 'baseball bat'];



$(document).ready(function () {
    for (var i = 1; i < 100; i++) {
       
        var randName = name[Math.floor(Math.random() * name.length)];
        var randPlace = place[Math.floor(Math.random() * place.length)];
        var randWeapon = weapon[Math.floor(Math.random() * weapon.length)];

        var obj = {
            friend: randName,
            item: randWeapon,
            city: randPlace
        }
        
        $('body').append($(`<h3>Accusation ${i}</h3>`));
        var clickMe = $(document.createElement('h3'));
        $('body').append(clickMe);


        $('clickMe').click(function () {
        alert(accusation.bind(obj));

    });
    }


    function accusation() {
        alert("I accuse " + this.friend + ", with " + this.item + ", in " + this.city + ".");
    }
});

            

