export let PlayersController = {
    currentPlayer: parseInt(localStorage.getItem(localStorage.getItem("currentGame")!)!) - 1,
    colorNames: ["Blue", "Green", "Yellow", "Orange", "Cyan", "Purple", "Magenta", "Dark Green"],
    colors: ["200ac4", "20ab45", "edb724", "ed8524", "14b8a2", "6e14b8", "b81471", "035e26"]
}