import firebase from "../firebase";

const firebaseService = (collectionName: string) => {
  const db = firebase.collection(collectionName);

  const getAll = () => {
    return db;
  };

  const create = (data: any) => {
    return db.add(data);
  };

  const update = (id: string, value: any) => {
    return db.doc(id).update(value);
  };

  const remove = (id: string) => {
    return db.doc(id).delete();
  };
  return { getAll, create, update, remove };
};

export { firebaseService };
