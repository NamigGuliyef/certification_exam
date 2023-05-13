
import { writeFile } from 'fs'

const randomFileWrite = (numArray) => {
    let newFile = ""
    for (let i = 0; i < numArray.length; i++) {
        let randomChar = Math.floor((Math.random() * numArray.length))
        newFile += numArray[randomChar]
    }
    writeFile(`${newFile}.txt`, '', 'utf-8', (err) => {
        if (err) {
            console.log(err)
        }
    })
}
randomFileWrite(['a', 'b', 'c', 'd', 'e'])
