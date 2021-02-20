import React, {useState} from 'react';
import {ItemType} from '../../App';
import css from './Select.module.css'


type SelectPropsType = {
    value?: number
    onItemChange: (value: number) => void
    items: ItemType[]
}

export default function Select(props: SelectPropsType) {

    const [active, setActive] = useState<boolean>(true)
    const [hoveredItemValue, setHoveredItemValue] = useState(props.value)

    const selectedItem = props.items.find(i => i.value === props.value)
    const hoveredItem = props.items.find(i => i.value === hoveredItemValue)

    const toogleItems = () => setActive(!active)
    const onItemClick = (value: number) => {
        props.onItemChange(value)
        setActive(false)
    }

    return (
        <div className={css.select}>
            <span className={css.main}
                  onClick={toogleItems}>
                {selectedItem && selectedItem.title}
            </span>
            {active &&
            <div className={css.items}>
                {props.items.map(i => <div onMouseEnter={() => setHoveredItemValue(i.value)}
                                           className=
                                               {css.item+ " " +(hoveredItem === i ? css.selected : "")}
                                           key={i.value}
                                           onClick={() => onItemClick(i.value)}>
                    {i.title}
                </div>)
                }
            </div>}
        </div>
    );
};
