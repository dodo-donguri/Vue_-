import firebase from 'firebase';
import { getCollectionMessages } from '../db';


class Message {
    constructor({id, body, date}) {
        this.id = id;
        this.body = body;
        this.date = date;
    }

    static async save({ body, channelId }) {
        if (!body || !body.trim()) {
            throw new Error('bodyはString型で1文字以上の入力必須です');
        }

        const postDate = {
            body,
            date: firebase.firestore.FieldValue.serverTimestamp()
        };

        const docRef = await getCollectionMessages(channelId).add(postDate);
        const snapShot = await docRef.get();
        const data = snapShot.data();
        const model = this.create(docRef.id, data);

        return model;
    }

    static async fetchMessages(channelId) {
        const collection = await getCollectionMessages(channelId).orderBy('date').get();
        if (collection.empty) {
            return [];
        }

        return collection.docs.map(doc => {
            return this.create(doc.id,doc.data())
        });
    }

    static create(id, data) {
        return new Message({
            id,
            body: data.body,
            date: data.date.toDate().toLocaleString()
        });
    }
}

export default Message;