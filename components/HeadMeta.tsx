import Head from "next/head";
import React from "react";
import Image from "../assets/tabimage.png"
const HeadMeta = () => {
    return <Head>
        <title>Jayendra Madaram</title>
        <meta name="robots" content="index, follow" />
        <meta name="robots" content="follow" />
        <meta name="robots" content="index" />

        <meta name="google-site-verification" content="NMiR7h6mmhVppVqCMYszuw_d7I5jakn9jr8VqvIgJUI" />
        <link rel="icon" href="/tabimage.png"></link>
        <meta name="description" content="Jayendra Madaram's personal portfolio !! 19 year old blockchain developer studying at Neil gogte institute of technology and a martial artist" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://portfolio-jayendramadara.herokuapp.com/" />
        <meta name="twitter:title" content="Jayendra Madara Twitter" />

        <meta name="twitter:description" content="19 year old blockchain developer studying at Neil gogte institute of technology and a martial artist" />

        {/* <meta name="twitter:image" content="LINK TO IMAGE" /> */}

        <meta name="twitter:site" content="@jayendra__02" />

        <meta name="twitter:creator" content="@jayendra__02"></meta>
    </Head>;
};

export default HeadMeta;
