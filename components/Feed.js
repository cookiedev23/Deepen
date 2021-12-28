import { useEffect, useState } from "react";
import Input from "./Input";
import { onSnapshot, collection, query, orderBy } from "@firebase/firestore";
import { db } from "../firebase";
import Post from "./Post";
import { useSession } from "next-auth/react";

import Carousel from "./CarouselComp";
import CategoriesComp from "./CategoriesComp";
import Header from "./Header";
import VideosListComp from "./VideosListComp";

function Feed() {
  const [posts, setPosts] = useState([]);

  // MESSY
  // useEffect(() => {
  //   const unsubscribe = onSnapshot(
  //     query(collection(db, "posts"), orderBy("timestamp", "desc")),
  //     (snapshot) => {
  //       setPosts(snapshot.docs);
  //     }
  //   );

  //   return () => {
  //     unsubscribe();
  //   };
  // }, [db]);

  // CLEAN
  useEffect(
    () =>
      onSnapshot(
        query(collection(db, "posts"), orderBy("timestamp", "desc")),
        (snapshot) => {
          setPosts(snapshot.docs);
        }
      ),
    [db]
  );

  return (
    <div className="flex-grow border-l border-r border-[#202020] max-w-full sm:ml-[73px] xl:ml-[240px]">
      <Header />
      <div className="pb-72 px-3 pt-3 text-white">
        <p className=" xl:text-2xl pb-1 font-semibold">In evidenza</p>
        <Carousel />
        <CategoriesComp />
        <VideosListComp
          categoryName={"Deepen x "}
          title={"I numeri primidsdsdsdsddd"}
        />
        {posts.map((post) => (
          <Post key={post.id} id={post.id} post={post.data()} />
        ))}
      </div>
    </div>
  );
}

export default Feed;
