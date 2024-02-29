import Link from "next/link";

export async function generateMetadata({params}) {
    const results = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.commentId}`)
    const post = await results.json()

    return {
        title: `${post.title}`,
        description: `This post is about ${post.title}`
    }
}

export default async function page({params}) {

    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.commentId}`); // call the API
    const posts = await response.json(); // parse the response as JSON

    // console.log(params)
    return (
        <>
            {/* <h1>Post: {params.id}. Comment ID: {params.commentId}</h1> */}
            {/* <ul>
                {posts.map((post) => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul> */}
            <h2>Post: {params.commentId}</h2>
            <br />
            <h3>{posts.title}</h3>
            <h4>userID: {posts.id}</h4>
            <br />
            <p>{posts.body}</p>
            <br />
            <Link href={`/posts/1`} className="text-red-500 no-underline">Back</Link>
        </>
    )
}