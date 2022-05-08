/**
 * @desc  Using Async/Await and Generators, create separate functions and achieve the same functionality
 */

const fetchSingleUser = () => {
  return Promise.resolve({
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496",
      },
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets",
    },
  });
};

function* fetchUserWithGenerator() {
  yield fetchSingleUser().then((user) => {
    return user;
  });
}

const fetchUser = fetchUserWithGenerator();
fetchUser.next().value.then((user) => {
  console.log("----- Generator ------");
  console.log(user);
});

async function fetchUserWithAsyncAwait() {
  const response = await fetchSingleUser();
  return response;
}
fetchUserWithAsyncAwait().then((user) => {
  console.log("----- Async/Await -----");
  console.log(user);
});
