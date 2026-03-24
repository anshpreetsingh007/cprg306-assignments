import { db } from "../utils/firebase";
import { addDoc, collection, getDocs, query } from "firebase/firestore";

export type ShoppingItem = {
  id?: string;
  name: string;
  quantity: number;
  category: string;
};

export async function getItems(userId: string): Promise<ShoppingItem[]> {
  const itemsCollection = collection(db, "users", userId, "items");
  const q = query(itemsCollection);
  const querySnapshot = await getDocs(q);

  const items: ShoppingItem[] = [];
  querySnapshot.forEach((doc) => {
    items.push({ id: doc.id, ...(doc.data() as Omit<ShoppingItem, "id">) });
  });

  return items;
}

export async function addItem(
  userId: string,
  item: Omit<ShoppingItem, "id">
): Promise<string> {
  const itemsCollection = collection(db, "users", userId, "items");
  const docRef = await addDoc(itemsCollection, item);
  return docRef.id;
}