import React from 'react';
import { Tab } from '../tab2';

export default function index({ name, items }) {
    return (
        <div className="flex flex-wrap items-center gap-2">
            {items.map((item) => (
                <Tab key={name + item.title} item={item} name={name} />
            ))}
        </div>
    );
}
