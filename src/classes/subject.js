export default class Subject {
    constructor() {
        this.observers = []
    }

    addObserver(observer) {
        this.observers.push(observer)
    }

    removeObserver(observer) {
        this.observers = this.observers.filter(obs => obs === observer)
    }

    notify(data) {
        for(const observer in this.observers) {
            this.observers[observer].update(data)
        }
    }
}