import $ from 'jquery'
import Observer from "../classes/observer"

export default class UserCard extends Observer {

    constructor() {
        super()
    }

    update(state) {
        // if(!state.usersSet) {
            $('.user-card').remove()
            for(const user in state.appState.users) {
                $('.sidebar').append(this.getTemplate(state.appState.users[user]))
            }
            state.usersSet = true
        // }
    }

    getTemplate(user) {
        let today = new Date();
        let date = today.getFullYear()+'/'+(today.getMonth()+1)+'/'+today.getDate();
        let time = today.getHours()+':'+today.getMinutes()+":"+today.getSeconds()

        return ` <div class="user-card" data-id="${user.id}">
                    <h3><span><img src="${user.avatar}"></span>${user.name}</h3>
                    <h4>${user.username}</h4>
                    <p>${user.posts.length}</p>
                    <small><b>Last seen: </b>${date} | ${time}</small>
                </div>`
    }
}
