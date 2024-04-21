import Button from "./Button";
import Cards from "./Cards";

interface CardProps {
    user: string;
    username: string;
    bio: string;
    location: string;
    avatar_url: string;
    html_url: string;
    followers: string;
    following: string;
    public_repos: string;
}

const UserCard = ({
    username,
    user,
    bio,
    location,
    avatar_url,
    html_url,
    followers,
    following,
    public_repos,
}: CardProps) => {
    return (
        <div className="p-4 px-6 bg-neutral-800 w-full flex flex-col justify-center items-center rounded-xl gap-2">
            <div className="flex flex-col justify-center items-center rounded-xl bg-neutral-900 p-4 px-6 gap-4 w-full">
                <img
                    className="w-32 h-32 rounded-full"
                    src={avatar_url}
                    alt={"Avatar of " + user}
                />
                <div className="flex-col flex justify-center items-center">
                    <span className="text-2xl font-bold">{user}</span>
                    <span>{username + (location ? " · " + location : "")}</span>
                </div>
                {bio ? <span>{bio}</span> : null}
            </div>
            <div className="flex w-full gap-2">
                <Cards title="Public Repos" desc={public_repos} />
                <Cards title="Followers" desc={followers} />
                <Cards title="Following" desc={following} />
            </div>
            <Button
                onClick={() => {
                    open(html_url);
                }}
            >
                Visit Profile
            </Button>
        </div>
    );
};

export default UserCard;
