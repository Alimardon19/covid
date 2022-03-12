import React from "react";
import Head from 'next/head';
import Todo from "../containers/todo/getData";

export default function Home () {
    return (
        <div>
            <Head>
                <title>Covid-19 info</title>
                <meta name="description" content="Generated by create next app"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <div className={ "block" }>
                <div className={ "text-center" }>
                    <img src="/covid.png" width={ 200 } alt="covid-19"/>
                    <h1 className={ "mb-3" }>COUNTRIES COVID-19 LEARN ABOUT</h1>
                    <Todo/>
                </div>
            </div>
        </div>
    )
}