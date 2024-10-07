/* // components/Post.js
'use client'; // Potrebno ako je u Next.js 13+ sa app ruterom

import React, { useEffect, useState } from 'react';
import { getPostBySlug } from "../util/api";

const Post = ({ slug }) => {
  const [post, setPost] = useState(null); // Inicijalno stanje je null
  const [loading, setLoading] = useState(true); // Stanje za praćenje učitavanja

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getPostBySlug(slug); // Pozivanje asinhrone funkcije
        setPost(data); // Postavljanje podataka u stanje
        setLoading(false); // Postavljanje učitavanja na false nakon što se podaci učitaju
      } catch (error) {
        console.error('Error fetching post:', error); // Logovanje greške u konzolu
        setLoading(false); // Prekid učitavanja u slučaju greške
      }
    };

    fetchData();
  }, [slug]); // Pozivanje efekta samo kad se promijeni `slug`

  if (loading) {
    return <div>Loading...</div>; // Prikazivanje teksta za učitavanje dok se podaci ne učitaju
  }

  if (!post) {
    return <div>No post found</div>; // Prikazivanje poruke ako nema podataka
  }

  return (
    <div>
      <h1>{post.title}</h1> 
      <p>{post.content}</p> 
    </div>
  );
};

export default Post;
 */