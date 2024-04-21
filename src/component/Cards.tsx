interface Props {
    title: string;
    desc?: string;
}

const Cards = (Props: Props) => {
    return (
        <div className="flex w-full flex-col justify-center items-center text-lg font-bold px-4 py-2 bg-neutral-900 rounded-xl text-center">
            <span>{Props.title}</span>
            <span>{Props.desc}</span>
        </div>
    );
};

export default Cards;
