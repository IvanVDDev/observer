import $ from 'jquery'
import Observer from "../classes/observer"

export default class BlogCard extends Observer {

    constructor() {
        super()
    }

    update(state) {
        $('.card-wrapper').empty()
        for(const post in state.appState.posts) {
            $('.card-wrapper').append(this.getTemplate(state.appState.posts[post]))
        }
    }

    getTemplate(post) {
        return `<div class="blog-card" data-id ="${post.id}">
                    <h2 contenteditable="false">${post.title}</h2>
                    <p>${post.body}</p>
                    <button class="remove-post">REMOVE</button>
                    <button class="edit-post">EDIT</button>
                    <button class="apply">APPLY</button>
                    <div class="edited">Edited</div>
                </div>
                 `
    }
}