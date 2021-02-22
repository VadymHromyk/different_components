import React, {useState} from 'react';
import Select from './components/Select/Select';

export type ItemType = {
    title: string
    value: number
}

const items: ItemType[] = [
    {title: 'Vadym', value: 1},
    {title: 'Dmitry', value: 2},
    {title: 'Liudmyla', value: 3},
    {title: 'Kolya', value: 4},
    {title: 'Valera', value: 5},
]

export default function App() {

    const [titleValue, setTitleValue] = useState<number>(0)

    const onItemChange = (value: number) => setTitleValue(value)

    return (
        <div>
            <Select value={titleValue}
                    items={items}
                    onItemChange={onItemChange}
            />
        </div>
    );
};
