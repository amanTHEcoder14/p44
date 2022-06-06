class Form {
  constructor() {
    this.input = createInput("Name");
    this.button = createButton("Play");
    this.greeting = createElement("h2");
    this.title = createElement("h2");
    //this.reset = createButton("Reset");
    this.greeting2 = createElement("h2");
  }
  hide() {
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
  }
  display() {
    this.title.html("FRUIT CATCHER");
    this.title.position(150, 50);
    this.title.style("font-size", "70px");
    this.title.style("color", "skyblue");
    this.input.position(350, 200);
    this.input.style("width", "200px");
    this.input.style("height", "20px");
    this.input.style("background", "lavender");
    this.button.position(360, 400);
    this.button.style("width", "200px");
    this.button.style("height", "40px");
    this.button.style("background", "lightpink");
    

    this.button.mousePressed(() => {
      this.input.hide();
      this.button.hide();
      player.name = this.input.value();
      playerCount += 1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Hello " + player.name);
      this.greeting.position(200, 250);
      this.greeting.style("color", "white");
      this.greeting.style("font-size", "50px");
    });
  }

  win() {
    for (var i in allPlayers) {
      if (allPlayers[i].winner) {

        //Display the Congratulations message with winner's name
        //Winner's name can be obtained as allPlayers[i].name

        //Write your code after this line
       "Congratulations " + player.name + "is WON"

        //Write your code before this line


        this.greeting2.style("color", "white");
        this.greeting2.style("font-size", "30px");
      }
    }
  }
}

        