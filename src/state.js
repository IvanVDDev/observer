import Subject from './classes/subject'

export default class State extends Subject {

     constructor() {
        super()
        this.usersSet = false
        this.appState = {} 
    }

    update(data) {
        this.appState = data
        this.notify(this)
    }

    removePost(id) {
        this.appState.lastDeleted = this.getPost(id)[0]
        this.appState.posts = this.appState.posts.filter(post => post.id !== id)
        this.update(this.appState)
    }

    updatePost(id, title, body) {
        this.appState.posts = this.appState.posts.map(post => {
            if(post.id == id) {
                post.title = title
                post.body = body
            }
            return post
        })
    }

    decrementUserPosts(id) {
        
    }
    getPost(id) {
        return this.appState.posts.filter(post => post.id === id)
    }

    getPostByUserId(id) {
        return this.appState.posts.filter(post => post.userId === id)
    }

    getState() {
        console.log(this);
    }
}