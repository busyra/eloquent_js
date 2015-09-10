function SmartPlantEater() {
      this.energy = 30;
      this.direction = "e";
}
SmartPlantEater.prototype.act = function(view) {
      var space = view.find(" ");
      if (this.energy > 90 && space)
            return {type: "reproduce", direction: space};
      var plants = view.findAll("*");
      if (plants.length > 1)
            return {type: "eat", direction: randomElement(plants)};
      if (view.look(this.direction) != " " && space)
            this.direction = space;
      return {type: "move", direction: this.direction};
};
      // tracks amount of prey seen per turn
function Tiger() {
      this.energy = 100;
      this.direction = "w";
      this.preySeen = [];
}

// needs tiger prototype


animateWorld(new LifelikeWorld(
      ["####################################################",
       "#                 ####         ****              ###",
       "#   *  @  ##                 ########       OO    ##",
       "#   *    ##        O O                 ****       *#",
       "#       ##*                        ##########     *#",
       "#      ##***  *         ****                     **#",
       "#* **  #  *  ***      #########                  **#",
       "#* **  #      *               #   *              **#",
       "#     ##              #   O   #  ***          ######",
       "#*            @       #       #   *        O  #    #",
       "#*                    #  ######                 ** #",
       "###          ****          ***                  ** #",
       "#       O                        @         O       #",
       "#   *     ##  ##  ##  ##               ###      *  #",
       "#   **         #              *       #####  O     #",
       "##  **  O   O  #  #    ***  ***        ###      ** #",
       "###               #   *****                    ****#",
       "####################################################"],
      {"#": Wall,
       "@": Tiger,
       "O": SmartPlantEater, // from previous exercise
       "*": Plant}
));
