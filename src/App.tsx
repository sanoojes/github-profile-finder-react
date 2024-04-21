import { useEffect, useState } from "react";
import UserCard from "./component/UserCard";
import Cards from "./component/Cards";
import Button from "./component/Button";
function App() {
    const [userName, setUserName] = useState("sanoojes");
    const [input, setInput] = useState("");

    const handleSubmit = () => {
        setUserName(input);
    };
    const handleInput = (value: string) => {
        setInput(value);
    };

    interface DataProps extends JSON {
        name: string;
        bio: string;
        location: string;
        avatar_url: string;
        html_url: string;
        followers: string;
        following: string;
        public_repos: string;
    }

    const [data, setData] = useState<DataProps>();

    useEffect(() => {
        fetch("https://api.github.com/users/" + userName)
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => console.error(error));
    }, [userName]);

    return (
        <>
            <div className="flex w-full justify-center items-center max-w-screen-md flex-col gap-4">
                <div className="flex gap-2  overflow-hidden w-full">
                    <input
                        type="text"
                        className="px-4 py-2 rounded-xl bg-neutral-800 focus:outline-none w-full flex-2"
                        placeholder="Search Username.."
                        onChange={(e) => {
                            handleInput(e.target.value);
                        }}
                    />
                    <Button onClick={handleSubmit}>Search</Button>
                </div>
                {data ? (
                    <UserCard
                        avatar_url={data.avatar_url}
                        user={data.name}
                        bio={data.bio}
                        username={userName}
                        public_repos={data.public_repos}
                        followers={data.followers}
                        following={data.following}
                        location={data.location}
                        html_url={data.html_url}
                    />
                ) : (
                    <Cards title="Loading..." />
                )}
            </div>
        </>
    );
}

export default App;

