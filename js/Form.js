class Form {
 constructor() {
    this.input = createInput("Username");

    this.button = createButton('play');

    this.title = createElement('h1');
    this.reset = createButton('reset');

    this.greeting = createElement('h2');
 }
 hide () {
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
}
 display () {

     this.title.html("Bristol Streetfighter");

     this.title.position(350,50);

     this.title.style('color', 'white');

     this.input.position(550,400);

     this.button.position(560,330);

     this.reset.position(950,50);
 
 
this.button.mousePressed(()=> {
this.input.hide();
this.button.hide();

player.name = this.input.value()
playerCount += 1; 

player.index = playerCount;
player.update();

player.updateCount(playerCount);

this.greeting.html("Hello noble " + player.name + "!")
this.greeting.position(400,250);
this.greeting.style('color', 'white');
this.greeting.style('font-size', '100px')

}) 


this.reset.mousePressed(()=>{
    player.updateCount(0);
    game.update(0);
})
}}

