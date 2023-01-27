import { fill_numeric_list, cycle_calculation } from "../project/index"

    
test('Filling keyboard', () => {
    let result:number[]|any[] = fill_numeric_list([0, 1, 2, 9, 7, 5, 6, 3, 8, 4])
    expect(result).toStrictEqual([0,1,2,9,7,5,6,3,8,4])
    expect(result.length).toBe(10)
    expect(new Set(result).size < result.length).toBe(false)
})

test('Keyboard length is not 10', () => {
    let result:number[]|any[] = fill_numeric_list([0, 4])
    expect(result).toStrictEqual([`ERROR: the keyboard should have 10 digits`])
})

test('There are repeated elements digit is not 0', () => {
    let result:number[]|any[] = fill_numeric_list([0, 2, 2, 3, 3, 3, 4, 4, 4, 4])
    expect(result).toStrictEqual([`ERROR: there are repeated elements`])
})

test('Processor calculation', () => {
    fill_numeric_list([0, 1, 2, 9, 7, 5, 6, 3, 8, 4])
    let result:number|string[] = cycle_calculation([1, 2, 9, 7])
    expect(result).toBe(4)
})

