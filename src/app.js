import $ from 'jquery'
import State from './state.js'
import http from './classes/http'
import BlogCard from './observers/blogCard'
import UserCard from './observers/userCard'
import ActionPopup from './observers/actionPopup'
import User from './models/user'


$( async () => {

    let data = {}
    let posts = await getPosts()
    let users = await getUsers()

    let usersArr = users.map(user => {
        return new User(user.id, user.name, user.username, posts)
    })

    console.log(usersArr);

    data.posts = posts
    data.users = usersArr

    let state = new State()
    let blogCard = new BlogCard()
    let userCard = new UserCard()
    let actionPopup = new ActionPopup()

    state.addObserver(blogCard)
    state.addObserver(userCard)
    state.addObserver(actionPopup)

    console.log(state);

    $('.get-posts').on('click', function(){
        state.update(data)
    console.log(state);

    })
    
    $('.toggle-sidebar, .sidebar-close').on('click', function(){
        $('.sidebar').toggleClass('show')
    })

    $('.card-wrapper').on('click', '.remove-post', function(){
        let id = $(this).parents('.blog-card').data('id')
        state.removePost(id)
    })
    

    $('.card-wrapper').on('click', '.edit-post', function(){
        let wrapper =  $(this).parents('.blog-card')
        wrapper.find('h2, p').attr('contenteditable', 'true').addClass("editable")
        wrapper.find('.apply').css('display', 'inline')
    })

    $('.card-wrapper').on('click', '.apply', function(){
        let wrapper =  $(this).parents('.blog-card')
        let id = wrapper.data('id')
        let title = wrapper.find('h2').text()
        let body = wrapper.find('p').text()
        wrapper.find('h2, p').attr('contenteditable', 'false').removeClass('editable')
        wrapper.find('.apply').css('display', 'none')
        wrapper.find('.edited').css('display', 'block')
        state.updatePost(id, title, body)
    })
})

window.getPosts = async () => {
    let {data} = await http.get('https://jsonplaceholder.typicode.com/posts')
    return data
}

window.getUsers = async () => {
    let {data} = await http.get('https://jsonplaceholder.typicode.com/users')
    return data
}