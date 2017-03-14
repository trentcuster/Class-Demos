(function () {

    window.db = {
        save: save,
        get: get,
        remove: remove,
        update: update
    }

    function save(key, value){
        localStorage.setItem(key, value);
    }

    function get(key) {
        localStorage.getItem(key);
    }

    function remove(key) {
        localStorage.removeItem(key);
    }

    function update(key, value) {
        if(localStorage.getItem(key)){
            localStorage[key] = value;
            return true;
        }
        return false;
    }
})


