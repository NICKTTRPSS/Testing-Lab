const axios = require("axios");

//Test Cases1
const functions = {
    fetchPosts: () => axios
    .get("http://localhost:3000/student/4")
    .then((res) => res.data)
    .catch((err) => "error"),
};

test("Test Cases#1: Checking Student's Age is equal to 25.", () => {
    return functions.fetchPosts().then((data) => { 
    expect(data.data.STU_AGE).toBe(25);
    }); 
});

//Test Cases2
const functions2 = {
    fetchPosts: () => axios
    .get("http://localhost:3000/student/1")
    .then((res) => res.data)
    .catch((err) => "error"),
};

test("Test Cases#2: Checking Student's Name is Andrew.", () => {
    return functions2.fetchPosts().then((data) => { 
    expect(data.data.STU_FNAME).toBe("Andrew");
    }); 
});   

