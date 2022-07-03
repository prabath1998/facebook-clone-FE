import { useSession } from "next-auth/react";
import Image from "next/image";
import React from "react";

const CreatePost = () => {
  const { data: session } = useSession();
  return (
    <div className="bg-white rounded-md shadow-md text-gray-500 p-2 ">
      <div className="flex p-4 space-x-2 items-center">
        <Image
          
          className="rounded-full cursor-pointer"
          src={session?.user.image}
          height={40}
          width={40}
        />
        <form className="flex flex-1">
            <input className="rounded-full h-12 flex-grow focus:outline-none font-medium bg-gray-100 px-4" type="text" placeholder={`Whats's on your mind, ${session?.user.name.split(" ")[0]}?`}></input>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
