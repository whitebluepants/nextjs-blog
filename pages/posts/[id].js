import Layout from "../../components/layout";
import fs from "fs"

export default function Post() {
    return <Layout>...</Layout>;
}

export function getAllPostIds() {
    const fileNames = fs.readdirSync(postsDirectorty);
    // Returns an array that looks like this:
    // [
    //   {
    //     params: {
    //       id: 'ssg-ssr'
    //     }
    //   },
    //   {
    //     params: {
    //       id: 'pre-rendering'
    //     }
    //   }
    // ]
    return fileNames.map((fileName) => {
        return {
            params: {
                id: fileName.replace(/\.md$/, '');
            }
        }
    })
}

export async function getStaticProps({ params }) {

}