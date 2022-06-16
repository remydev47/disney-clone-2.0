import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import { FirebaseAdapter } from "@next-auth/firebase-adapter"
import { db } from "../../../firebase"

import firebase from "firebase/app"

const firestore = (
  firebase.apps[0] ?? firebase.initializeApp(/* your config */)
).firestore()

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  adapter: FirebaseAdapter(db),
});
