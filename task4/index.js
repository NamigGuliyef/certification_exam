import { hash, genSalt } from 'bcrypt'
import chalk from 'chalk'
import { readFile } from 'fs'

const fileWordHash = (txtFile) => {
    readFile(`${txtFile}.txt`, 'utf-8', async (err, data) => {
        if (err) {
            console.log(err)
        }
        const hashPass = await hash(data, await genSalt())
        console.log(chalk.bgRed(hashPass))
    })
}
fileWordHash('task4/hash')

