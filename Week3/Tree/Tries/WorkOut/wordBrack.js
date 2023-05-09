function wordBreak(key){
    if(key.length == 0)return true;
    for(let i = 1; i <= key.length; i++){
        let prefix = key.substring(0, i);
        if(dictionary.includes(prefix) && wordBreak(key.substring(i))){
            return true;
        }
    }
}