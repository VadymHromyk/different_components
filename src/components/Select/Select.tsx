import React, {useState, KeyboardEvent, useEffect} from 'react';
import {ItemType} from '../../App';
import css from './Select.module.css'


type SelectPropsType = {
    value?: number
    onItemChange: (value: number) => void
    items: ItemType[]
}

export default function Select(props: SelectPropsType) {

    const [active, setActive] = useState<boolean>(true)
    const [hoveredItemValue, setHoveredItemValue] = useState<number | undefined>(props.value)

    const selectedItem = props.items.find(i => i.value === props.value)
    const hoveredItem = props.items.find(i => i.value === hoveredItemValue)

    const toogleItems = () => setActive(!active)
    const onItemClick = (value: number) => {
        props.onItemChange(value)
        setActive(false)
    }

    useEffect(() => {
        setHoveredItemValue(props.value)
    }, [props.value])

    const onKeyUp = (e: string) => {
        if (e === 'ArrowDown' || e === 'ArrowUp') {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].value === hoveredItemValue) { //якщо елемент === підсвіченому(вибраному), то:
                    let pretendentElement = e === 'ArrowDown' // тернарний вираз
                        ? props.items[i + 1] //наступний елемент в списку
                        : props.items[i - 1] //попередній
                    if (pretendentElement) { // то якщо елемент є(true, not undefined), то віддаємо його value
                        props.onItemChange(pretendentElement.value) // колбек функція, яка встановить value
                        return // вийти з ф-ції onKeyUp після виконання цієї умови
                    }
                }
            }
            if (!selectedItem) { //якщо цикл пройшовся і вибраного елемента немає - то ним стане 1-й
                setHoveredItemValue(props.items[0].value)
            }
        }

        if (e === 'Escape' || e === 'Enter') { // згорнути список при натисканні цих клавіш
            setActive(false)
        }
    }

    return (
        <div className={css.select}
             tabIndex={0}
             onKeyUp={(e) => onKeyUp(e.key)}>
            <span className={css.main}
                  onClick={toogleItems}>
                {selectedItem && selectedItem.title}
            </span>
            {active &&
            <div className={css.items}>
                {props.items.map(i => <div onMouseEnter={() => setHoveredItemValue(i.value)}
                                           className=
                                               {css.item + ' ' + (hoveredItem === i ? css.selected : '')}
                                           key={i.value}
                                           onClick={() => onItemClick(i.value)}>
                    {i.title}
                </div>)
                }
            </div>}
        </div>
    );
};
