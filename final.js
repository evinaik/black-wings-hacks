const USER_API = "https://reqres.in/api/users/6";

function ReactHeader() {
  const [user, setUser] = React.useState("");

  React.useEffect(async () => {
    const response = await fetch(USER_API);
    const json = await response.json();

    // Add an artificial delay
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Let's get our user
    setUser(json.data.first_name);
  }, []);

  return <h1>Let's try React{user ? `, ${user}` : null}!</h1>;
}

function LikeButton(props) {
  return (
    <button className="likeButton" onClick={props.onClick}>
      Like
    </button>
  );
}

function DislikeButton(props) {
  return (
    <button
      className="dislikeButton"
      disabled={props.disabled}
      onClick={props.onClick}
    >
      Dislike
    </button>
  );
}

function Post(props) {
  const [likes, setLikes] = React.useState(0); // start likes at 0

  const onLike = React.useCallback(() => {
    setLikes(likes + 1);
  }, [likes]);

  const onDislike = React.useCallback(() => {
    if (likes > 0) {
      setLikes(likes - 1);
    }
  }, [likes]);

  return (
    <div className="container">
      <h3 className="postTitle">My {props.name} Post</h3>
      <div className="subcontainer">
        <LikeButton onClick={onLike} />

        <span className="likes">{likes}</span>

        <DislikeButton disabled={likes === 0} onClick={onDislike} />
      </div>
    </div>
  );
}

function App() {
  return (
    <React.Fragment>
      <ReactHeader />
      <Post name="First" />
      <Post name="Second" />
      <Post name="Favorite" />
    </React.Fragment>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
