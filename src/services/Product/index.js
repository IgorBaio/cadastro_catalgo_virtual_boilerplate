import { auth, db, firebase } from '../../firebase'

const ProductService = {
  async getMessages() {
    
    return db
      .collection('produtos')
      .then(produtos => {
        let _produtos = []
        produtos.forEach(produto => {
          _produtos.push(produto.data())
        })
        return _produtos
      })
  },

  observeMessages (callback) {
    db.collection('produtos').onSnapshot(callback)
  },

  async sendMessage (produto) {
    const user = auth().currentUser

    db.collection('produtos').add({
      user: {
        uid: user.uid,
        photo: user.photoURL,
        name: user.displayName,
        email: user.email
      },
      produto,
      created: firebase.firestore.FieldValue.serverTimestamp()
    })
  },
}

export default ProductService