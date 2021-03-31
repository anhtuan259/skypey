import { combineReducers } from 'redux'

import contacts from "./contacts";
import user from "./users";
import activeUserId from "./activeUserId";
import messages from "./messages";
import typing from "./typing";

export default combineReducers({
    user,
    contacts,
    messages,
    typing,
    activeUserId
});