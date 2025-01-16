import {getAuthURL} from './handler.js'
export const handler = (event, context, callback) => {
    return getAuthURL()
}