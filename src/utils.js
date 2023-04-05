import { setUser } from "./store/auth";
import store from "./store/index.js"


export default function handleUser(data) {

    store.dispatch(setUser({
        data
    }));

}