
let state = {
    profilePage: {
        posts: [
            { id: 1, post: "it's my first post", like_count: 37 },
            { id: 2, post: 'Hello World!', like_count: 12 },
            { id: 3, post: 'Hi, how are you?', like_count: 40 },
        ],
    },
    dialogsPage: {
        dialogs: [
            { id: 1, name: 'Dima' },
            { id: 2, name: 'Vova' },
            { id: 3, name: 'Masha' },
            { id: 4, name: 'Igor' },
            { id: 5, name: 'Klava' },
            { id: 6, name: 'Jack' },
            { id: 7, name: 'Jhon' }
        ],
        messages: [
            { id: 1, message: 'Hi' },
            { id: 2, message: 'Hello World!' },
            { id: 3, message: 'BinPot)' },
            { id: 4, message: 'How is your name?' },
            { id: 5, message: 'How a u?' },
        ]
    }
}

export let addPost = (postMessage) => {
    let newPost = {
        id: 5,
        post: postMessage,
        like_count: 0
    };
    state.profilePage.posts.push(newPost);
};

export default state;