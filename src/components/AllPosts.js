import { useEffect,useState } from "react";
import  SanityClient  from "../client";


export default function AllPosts(){
    const [allPostsData, setAllPosts] = useState(null);

    useEffect(() =>{
        SanityClient.fetch(
            `*[_type == "post"]{
                title,
                slug,
                mainImage {
                    asset -> {
                        _id,
                        url
                    }
                }
            }`
        )
        /*eslint no-undef: "error"*/
        .then((data) => setAllPosts(data))
        .catch(console.error);
    },[])
    return (
        <div>
            <h2>blog posts</h2>
            <h3>Welcome to my blog</h3>
        </div>
    );
}