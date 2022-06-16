import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import {FirebaseAdapter} from "@nextauth/firebase-adapter";
import {db} from "../../../firebase";

export default NextAuth({
    // Configure on or more authentication providers
    providers:[
        Providers.Google({
            cientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
        }),
        // ...add more providers here
    ],

    adapter: FirebaseAdapter(db),
});
