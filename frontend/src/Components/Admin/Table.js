import React, { useState, useEffect} from 'react';
import TableItem from './TableItem';
import Config from '../../Miscellaneous/Config';

function Table() {

    const [posts, setPosts] = useState();
    const [orgPosts, setOrgPosts] = useState();
    const [orgPostItems, setOrgPostItems] = useState();

    function retrieveActivePosts() {

        fetch(`${Config.url.API_URL}/api/posts/`)
            .then(res => res.json())
            .then((result) => {
              setPosts(result);
              const temp = result.map((post => <TableItem name={post.eventName} date={post.eventDate} description={post.eventDescription} />))
              setOrgPostItems(temp);
            })
            .catch((err) => console.log(err));

    }

    function retrieveOrganizationPosts() {

        
        const orgPostList = [];

        /*
        console.log(posts);

        const temp = posts.map((post) => <TableItem name={post.name} date={post.date} description={post.description} />)

        console.log(temp);
        */
        /*
        for (let i=0; i < posts.length; i++) {
            var post = posts[i]
            orgPostList.push(<TableItem name={post.name} date={post.date} description={post.description} />)
        }
        */

        /*

        for (var post of posts) {
            orgPostList.push(<TableItem name={post.name} date={post.date} description={post.description} />)
        }
        */

        /*
        console.log(orgPostList);
        setOrgPostItems(orgPostList);
        */

    }

    useEffect(() => {
        retrieveActivePosts()
    }, [])
    useEffect(() => {
        retrieveOrganizationPosts();
    }, [posts])

    return (
        <div className="admin-dashboard-table">
            <table>
                <thead>
                    <tr>
                        <th className="tdname">Event Name</th>
                        <th className="tddate">Event Date</th>
                        <th className="tddescription">Event Description</th>
                        <th className="tdactions">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {orgPostItems}
                </tbody>
            </table>
        </div>
    )
}

export default Table;