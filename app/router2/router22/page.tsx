import React from 'react';
import Content from '../../../pages/components/demo2';

const tabName = [
    {
        name: 'text1',
        title: '标题1',
        rank: 1,
    },
    {
        name: 'text2',
        title: '标题2',
        rank: 2,
    },
    {
        name: 'text3',
        title: '标题3',
        rank: 3,
    },
    {
        name: 'text4',
        title: '标题4',
        rank: 4,
    },
    {
        name: 'text5',
        title: '标题5',
        rank: 5,
    },
    {
        name: 'text6',
        title: '标题6',
        rank: 6,
    },
    {
        name: 'text7',
        title: '标题7',
        rank: 7,
    },
];
export default function Page({
    params,
    searchParams,
}: {
    params: { name: string };
    searchParams: { [key: string]: string };
}) {
    const name = searchParams.name;
    return (
        <div>
            <Content name={name} items={tabName} />
        </div>
    );
}
