export default class User {

    constructor(id, name, username, posts) {
        this.id = id
        this.name = name
        this.username = username
        let avatarNumber = Math.floor((Math.random() * 10) + 1);
        this.avatar = `https://randomuser.me/api/portraits/lego/${avatarNumber < 9 ? avatarNumber : 8}.jpg`
        console.log(id);
        this.posts = posts.filter(post => post.userId == this.id)
    }
    
}