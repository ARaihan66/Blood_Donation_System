import styled from "styled-components";
import Posts from "../Components/Posts";
const Container = styled.div`
display: flex;
justify-content: center;
`
const Wrapper = styled.div`

`

const PostsPage = () => {
    return (
        <Container>
            <Wrapper>
                <Posts />
            </Wrapper>

        </Container>
    )
}

export default PostsPage
