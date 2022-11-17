import styled from "styled-components";
import Post from "./Post";
import { postData } from "../Data";

const Container = styled.div`

`

const Item = styled.div`

`

const Posts = () => {
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
