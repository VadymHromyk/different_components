// import {students, StudentType} from './tests';

export type StudentType = {
    name: string
    age: number
    isMarried: boolean
    scores: number
    isStudent: boolean
    friends? : string[]
}

let students: Array<StudentType> = [
    {name: "Bob", age: 22, isMarried: true, scores: 85, isStudent: true},
    {name: "Alex", age: 21, isMarried: true, scores: 90, isStudent: true},
    {name: "John", age: 19, isMarried: false, scores: 100, isStudent: true},
    {name: "Ann", age: 20, isMarried: false, scores: 105, isStudent: true},
    {name: "Helen", age: 20, isMarried: false, scores: 110, isStudent: true},
    {name: "Nick", age: 20, isMarried: true, scores: 120, isStudent: true},
];

beforeEach( ()=> {
    return students;
})

/*test('copyStudent', () => {
    const copyStudent = {...students}
    expect(students === copyStudent).toBe(false)
    expect(students.friends === copyStudent.friends).toBe(true)
})

test('deepCopyStudent', () => {
    const deepCopyStudent = {...students, friends: [...students.friends]}
    expect(students === deepCopyStudent).toBe(false)
    expect(students.friends === deepCopyStudent.friends).toBe(false)
    expect(students.friends).toEqual(deepCopyStudent.friends)
})*/

test('add an array of friends to student', () => {
    const copyStudent = [...students]

    let arr = copyStudent.map(st => {
        return st.name
    })
    let addFriends = copyStudent.map(st => {
        let names = arr.filter(n => n !== st.name )
        return st = {...st, friends: names}
    })

    expect(students === copyStudent).toBe(false)
    expect(addFriends[0].friends.length).toBe(5)
    expect(addFriends[2].friends.length).toBe(5)
    expect(addFriends[0].friends.includes(addFriends[0].name)).toBeFalsy()
    expect(addFriends[2].friends.includes(addFriends[2].name)).toBeFalsy()
    expect(addFriends[2].friends[4]).toBe("Nick")
})