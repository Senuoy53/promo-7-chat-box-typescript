import firebase from "../firebase";

const firebaseService = (collectionName) => {
  const db = firebase.collection(collectionName);

  const getAll = () => {
    return db;
  };

  const create = (data) => {
    return db.add(data);
  };

  const update = (id, value) => {
    return db.doc(id).update(value);
  };

  const remove = (id) => {
    return db.doc(id).delete();
  };
  return { getAll, create, update, remove };
};

export { firebaseService };
