export default {
    storageState(state, e){
        var myStorage = JSON.parse(localStorage.getItem('mydata'))
        state.prs.postState.process = e
        state.prs.postState.result = eval(e)
        if (myStorage == null){
            myStorage = new Array()
            myStorage.push(JSON.parse(JSON.stringify(e)))
            localStorage.setItem('mydata', JSON.stringify(myStorage))
        } else {
            myStorage.push(JSON.parse(JSON.stringify(e)));
            localStorage.setItem('mydata', JSON.stringify(myStorage))
        }
    }
}