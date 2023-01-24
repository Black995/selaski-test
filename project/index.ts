/**
 * Global variables to manage:
 * 1. numeric keyboard: number list of 10 elements
 * 2. processor: numeric variable that will increase for each iteration in verify_position function
 * 3. iterator_position: current position in the numeric keyboard
 */
let numeric_keyboard:number[] = []
let processor:number = 0
let iterator_position:number = 0

/**
 * function  to fill the numeric keyboard
 */
export function fill_numeric_list(list:number[]) {
    numeric_keyboard = []

    // If there are not 10 elements
    if(list.length != 10) {
        return [`ERROR: the keyboard should have 10 digits`]
    }
    // If the first element is not 0
    else if(list[0] != 0){
        return [`ERROR: the first digit should be 0`]
    }
    else {
        // Verify numbers aren't repeated
        if(new Set(list).size < list.length) {
            return [`ERROR: there are repeated elements`]
        }
        else {
            for(let i=0;i<list.length;i++) {
                numeric_keyboard.push(list[i])
            }
        }
    }

    return numeric_keyboard

}

/**
 * recursive function that increase or decrease the position in the numeric_keyboard while it finds the current digit
 */
function verify_position(number:number) {

    let index = numeric_keyboard.indexOf(number)
    if(index > iterator_position) {
        iterator_position++
        processor++
        verify_position(number)
    }
    else if(index < iterator_position) {
        iterator_position--
        processor++
        verify_position(number)
    }

}

/**
 * function that processes the digit about the keyboard
 */
export function cycle_calculation(number_list:number[]) {
    
    if(number_list.length != 0) {
        for(let i=0;i<number_list.length;i++) {
            verify_position(number_list[i])
        }
        return processor
    }
    else {
        return [`ERROR: the number list can't be empty`]
    }

}


/**
 * Program
 */
// fill_numeric_list([0, 1, 2, 9, 7, 5, 6, 3, 8, 4])
// console.log('Keyboard list: ' + numeric_keyboard)

// cycle_calculation([1, 2, 9, 7])
// console.log('Result: ' + processor + ' ms')

