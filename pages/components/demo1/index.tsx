import React from 'react';
import { TabGroup } from '../tabGroup';

export default function index({ name, items }) {
    return (
        <div>
            <TabGroup name={name} items={items} />
        </div>
    );
}
