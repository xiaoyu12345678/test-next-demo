import { Tab } from '../tab';

export type Item = {
    name: string;
    title: string;
    rank: number;
};

export const TabGroup = ({ name, items }: { name: string; items: Item[] }) => {
    return (
        <div className="flex flex-wrap items-center gap-2">
            {items.map((item) => (
                <Tab key={name + item.title} item={item} name={name} />
            ))}
        </div>
    );
};
