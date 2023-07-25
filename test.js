const arrposts = [];

const post = (username, msg) => {
  const postObj = {
    username: "",
    messages: [],
  };
  if (arrposts.length <= 0) {
    postObj.username = username;
    postObj.messages.push(msg);
    arrposts.push(postObj);
    console.log("first line executed");
  } else if (arrposts.length > 0) {
    arrposts.forEach((item) => {
      if (item.username == username) {
        item.messages.push(msg);
        console.log("Same user");
      } else {
        postObj.username = username;
        postObj.messages.push(msg);
        arrposts.push(postObj);
        console.log("different user");
      }
    });
  }
};

post("X", "This is X's first post");
post("Z", "This is Z's post");
post("X", "This is X's second post");
console.log(arrposts);
