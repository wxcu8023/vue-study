export default {
    // var id = 1;
    storageState(state,e){
        var myStorage = JSON.parse(localStorage.getItem('mydata'));
        // console.log(myStorage)
        state.prs.postState = e
        if(myStorage == null){
            myStorage = new Array();
            myStorage.push(JSON.parse(JSON.stringify(e)));
            localStorage.setItem("mydata",JSON.stringify(myStorage))
        }else{
            myStorage.push(JSON.parse(JSON.stringify(e)));
            localStorage.setItem("mydata",JSON.stringify(myStorage))
        }
    }
        // var zzz = new Array();
        // console.log(zzz)
        // console.log(e)
        // zzz.push(e)
        // console.log(zzz)
        // localStorage.setItem("mydata",JSON.stringify(zzz))
        // console.log(JSON.parse(localStorage.getItem('mydata')))
        // var localstate = [];
        // var zzz = JSON.stringify(e)
        // console.log(zzz)
        // localstate = JSON.stringify(localstate)
        // // console.log(localstate.push(zzz))
        // state.prs.postState = e

}