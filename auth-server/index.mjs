import {getCalendarEvents} from './handler.js'
export const handler = (event, context, callback) => {
    return getCalendarEvents()
}