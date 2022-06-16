import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google"
import {FirebaseAdapter} from "@next-auth/firebase-adapter";
import {db} from "../../../firebase";

export default NextAuth({
    // Configure on or more authentication providers
    providers:[
        GoogleProvider.GOOGLE({
            cientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
        }),
        // ...add more providers here
    ],

    adapter: FirebaseAdapter(db),
});
