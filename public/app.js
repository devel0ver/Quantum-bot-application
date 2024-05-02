document.addEventListener('DOMContentLoaded', event => {
    const app = firebase.app()
    console.log(app)

    const db = firebase.firestore()
    
    const mypost = db.collection('posts').doc('firstpost')

    mypost.get()
        .then(doc => {
            const data = doc.data();
            document.write(data.title + `<br>`)
            document.write(data.createdAt)
        })
})

// function googleLogin() {
//     const provider = new firebase.auth.GoogleAuthProvider()

//     firebase.auth().signInWithPopup(provider)

//             .then(result => {
//                 const user = result.user;
//                 document.write(`Hello ${user.displayName}`)
//                 console.log(user)
//             })
//             .catch(console.log)
// }