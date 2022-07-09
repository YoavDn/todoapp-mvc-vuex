import { storageService } from './storage.service.js'
import { utilService } from './utils.service.js'

const KEY = 'userDB'
const USERS_KEY = 'USERS'

export const userService = {
    put,
    query,
    updateUserFrefs,
    validateUser
}


const gUser = storageService.load(KEY) || null
const gUsers = _createUsers()

function query() {
    return gUser
}
function validateUser(user) {
    const targetUser = gUsers.find(currUser => currUser.pass === user.pass && currUser.username === user.username)
    if (targetUser) {
        storageService.store(KEY, targetUser)
        return targetUser
    } else return null

}

function put(username) {
    const user = JSON.parse(JSON.stringify(gUser))
    user.username = username
    storageService.store(KEY, user)
    return user
}

function updateUserFrefs(userPrefs) {
    gUser.prefs = userPrefs
    storageService.store(KEY, gUser)
}



function _createUsers() {
    let users = storageService.load(USERS_KEY)
    if (!users) {
        users = [
            {
                username: 'yoav',
                pass: '123',
                prefs: {
                    color: 'black',
                    bgColor: 'white'
                }
            },
            {
                username: 'aviv',
                pass: '123',
                prefs: {
                    color: 'black',
                    bgColor: 'orange'
                }
            }
        ]
        storageService.load(USERS_KEY, users)
        return users
    } else return users
}