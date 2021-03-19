import React, { useReducer } from "react"
import Head from "next/head"
import Link from "next/link"
import {useRouter} from "next/router"
import { route } from "next/dist/next-server/server/router";

export default function User (){
    const router = useRouter();

    //console.log("router", router.query.id);
    
    function handleOnClick (){
        router.push('/about')
    }

    return(
        <>
            <Head>
                <title>User Page</title>
            </Head>
            <h1>
                User 1 {router.query.id}
            </h1>
            <Link href="/about">
                <button onClick={handleOnClick}> Go to Home</button>
            </Link>
        </>
    )
}