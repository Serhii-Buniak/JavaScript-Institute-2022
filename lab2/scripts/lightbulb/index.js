class Lamp {
    #image = document.getElementById('lightbulb-img')
    on = () => {
        this.#image.classList.add('image__on')
    }
    off = () => {
        this.#image.classList.remove('image__on')
    }
}

class LightbulbButtons {
    #onButton = document.getElementById('lightbulb-button-on')
    #offButton = document.getElementById('lightbulb-button-off')

    onClickOn = (method) => this.#onButton.addEventListener('click', method)
    onClickOff = (method) => this.#offButton.addEventListener('click', method)
}

class Lightbulb {
    lamp = new Lamp()
    buttons = new LightbulbButtons()
}

const lightbulb = new Lightbulb()