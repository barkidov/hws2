import {useState} from 'react'
import Affairs from './affairs/Affairs'
import s2 from '../../s1-main/App.module.css'

/*
* 7 - в файле Affairs.tsx дописать типизацию пропсов
* 8 - в файле Affairs.tsx дописать логику функций setAll, setHigh, setMiddle, setLow
* 9 - в файле Affair.tsx дописать типизацию пропсов
* 10 - в файле Affair.tsx дописать функции deleteCallback и использовать
* 11 - в файле Affair.tsx отобразить приходящие данные
* */

export type AffairPriorityType = 'high' | 'low' | 'middle'

export type AffairType = {
    _id: number
    name: string
    priority: AffairPriorityType
}
export type FilterType = 'all' | AffairPriorityType

const defaultAffairs: AffairType[] = [
    {_id: 1, name: 'React', priority: 'high'},
    {_id: 2, name: 'anime', priority: 'low'},
    {_id: 3, name: 'games', priority: 'low'},
    {_id: 4, name: 'work', priority: 'high'},
    {_id: 5, name: 'html & css', priority: 'middle'},
]

export const filterAffairs = (affairs: AffairType[], filter: FilterType): AffairType[] => {
    if (filter === 'high') {
        return affairs.filter(el => el.priority === 'high')
    } else if (filter === 'middle') {
        return affairs.filter(el => el.priority === 'middle')
    } else if (filter === 'low') {
        return affairs.filter(el => el.priority === 'low')
    } else {
        return affairs
    }
}
export const deleteAffair = (affairs: AffairType[], _id: number): AffairType[] => {
    return affairs.filter(el => el._id !== _id)
}

function HW2() {
    const [affairs, setAffairs] = useState<AffairType[]>(defaultAffairs)
    const [filter, setFilter] = useState<FilterType>('all')

    const filteredAffairs = filterAffairs(affairs, filter)
    const deleteAffairCallback = (_id: number) => { 
        setAffairs(affairs.filter(el => el._id !== _id))
    }

    return (
        <div id={'hw2'}>
            <div className={s2.hwTitle}>Homework #2</div>
            <div className={s2.hw}>
                <Affairs
                    data={filteredAffairs}
                    setFilter={setFilter}
                    deleteAffairCallback={deleteAffairCallback}
                    filter={filter}
                />
            </div>
        </div>
    )
}

export default HW2
