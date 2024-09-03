"use client";

import { likeCommitWord } from "@/lib/data/commits";
import React, { memo, useEffect, useState } from "react";
import { BsSuitHeart, BsSuitHeartFill } from "react-icons/bs";

const LikesButton = memo(({ id }: { id: string }) => {
  const [isLike, setIsLike] = useState(false);

  useEffect(() => {
    const dataLikes: string[] =
      JSON.parse(localStorage.getItem("commit-words-likes") as string) || [];

    const isLike = dataLikes.find((idLike: string) => idLike === id);

    if (isLike) {
      setIsLike(true);
    } else {
      setIsLike(false);
    }
  }, []);

  const onPress = async () => {
    try {
      setIsLike(true);

      const dataLikes =
        JSON.parse(localStorage.getItem("commit-words-likes") as string) || [];

      dataLikes.push(id);

      localStorage.setItem("commit-words-likes", JSON.stringify(dataLikes));

      await likeCommitWord(id);
    } catch (e) {
      console.log("Error likes commit word :", e);
    }
  };

  return !isLike ? (
    <BsSuitHeart
      size={20}
      className="cursor-pointer dark:text-[#FFFFFF99] text-black/80"
      onClick={onPress}
    />
  ) : (
    <BsSuitHeartFill size={20} className="cursor-pointer text-red-600" />
  );
});

export default LikesButton;
