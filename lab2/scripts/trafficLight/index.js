class TrafficLightCircle {
    #element
    constructor(color) {
        this.#element = document.getElementById(`traffic-light-${color}`)
    }

    isLight = () => {
        return !this.isDark()
    }

    isDark = () => {
        return this.#element.classList.contains('dark')
    }

    setLight = () => {
        this.#element.classList.remove('dark')
    }

    setDark = () => {
        this.#element.classList.add('dark')
    }
}

class TrafficLight {
    red = new TrafficLightCircle('red')
    yellow = new TrafficLightCircle('yellow')
    green = new TrafficLightCircle('green')

    constructor() {
        this.red.setDark()
        this.yellow.setDark()
        this.green.setDark()
    }

    next = () => {
        if (this.red.isDark() && this.yellow.isDark() && this.green.isDark()) {
            this.red.setLight()
            return
        }

        if (this.red.isLight()) {
            this.red.setDark()
            this.yellow.setLight()
            return
        }

        if (this.yellow.isLight()) {
            this.yellow.setDark()
            this.green.setLight()
            return
        }

        if (this.green.isLight()) {
            this.green.setDark()
            this.red.setLight()
            return
        }
    }

    darkAll = () => {
        this.red.setDark()
        this.yellow.setDark()
        this.green.setDark()
    }
}

const trafficLight = new TrafficLight()