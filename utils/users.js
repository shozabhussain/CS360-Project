import firestore from "./firebase"


const getUsers = async () => {
    const snapshot = await firestore.collections("users").get()
    snapshot.docs.forEach(doc => {
        console.log(doc.data());
    });
}

export {getUsers};