import styled from "styled-components";
import Post from "./Post";
import { postData } from "../Data";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

const Container = styled.div`

`

const Item = styled.div`

`

const Posts = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);


    useEffect(() => {
        return axios.get("http://localhost:5000/api/postNewsFeed/")
            .then((response) => {
                setData(response.data.postData);
                setIsLoading(false);
                //console.log(response.data.postData);
            }).catch(err => {
                setError(err);
                setIsLoading(false);
            })
    }, [])
    return (
        <Container>
            {isLoading && <h1>Data is loading</h1>}

            {

                data && data.map((res, index) => {
                    return < Post item={res} />;
                })
            }
        </Container >
    )
}

export default Posts
