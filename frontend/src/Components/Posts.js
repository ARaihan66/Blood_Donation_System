import styled from "styled-components";
import Post from "./Post";
import { postData } from "../Data";
import { useEffect } from "react";
import axios from "axios";

const Container = styled.div`

`

const Item = styled.div`

`

const Posts = () => {

    useEffect(() => {
        return axios.get("http://localhost:5000/api/postNewsFeed?page=1&sort=updatedAt")
            .then((response) => console.log(response));
    }, [])
    return (
        <Container>
            <Item>
                {
                    postData.map(item => (
                        <Post item={item} key={item.key} />
                    ))
                }
            </Item>
        </Container>
    )
}

export default Posts
