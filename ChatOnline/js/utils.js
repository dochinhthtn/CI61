// doc: document trả về từ cloud firestore
export function getDataFromDoc(doc) {
    let obj = doc.data();
    obj.id = doc.id;
    return obj;
}

// docs: mảng chứa document trả về từ cloud firestore
export function getDataFromDocs(docs) {
    let data = [];
    for(let doc of docs) {
        data.push(getDataFromDoc(doc));
    }

    return data;
}