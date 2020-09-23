class Form {
constructor(){

}
display(){

    var title=createElement("h2");
    var greeting=createElement("h2");
    title.html("CAR RACING GAME ");
    title.position(130,0);
     var input = createInput("NAME");
     var button = createButton("START")
     input.position(130,160);
     button.position(250,200);
     button.mousePressed(
        function(){
            input.hide();
            button.hide();
            var name=input.value();
            playerCount+=1;
            player.update(name);
            player.update(playerCount);
            greeting.html("hello"+name);
            greeting.position(130,160);
        }
        );
}
}