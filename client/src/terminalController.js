import ComponentsBuilder from "./components.js"

export default class TerminalController{
    constructor(){}

    #onInputReceived(eventEmitter){
        return function() {
            const message = this.getValue()
            console.log(message)
            this.clearValue()
        }
    }

    async initializeTable(eventEmitter){
        const components = new ComponentsBuilder()
            .setScreen({title: "Chat"})
            .setLayoutComponent()
            .setInputComponent(this.#onInputReceived(eventEmitter))
            .build()

        components.input.focus()
        components.screen.render()
    }
}