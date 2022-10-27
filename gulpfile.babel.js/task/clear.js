//plugins
import del from "del";

//Config
import path from "../config/path.js";

//Delete folder
export default () => {
    return del(path.root);
}