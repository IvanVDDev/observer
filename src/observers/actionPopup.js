import $ from 'jquery'
import Observer from "../classes/observer"

export default class ActionPopup extends Observer {

    constructor() {
        super()
    }

    update(state) {
        if(state.appState.lastDeleted) {
            $('.action-popup').remove()
            $('.container').append(this.getTemplate(state.appState.lastDeleted))
        }
    }

    getTemplate(post) {
        return `<div class="action-popup">
                    <h3>Last post deleted</h3>
                    <p>${post.title}</p>
                </div>
                 `
    }
}