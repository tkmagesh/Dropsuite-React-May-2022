
(function(){

    function addSync(x,y){
        console.log(`   [@service] processing ${x} and ${y}`)
        let result = x + y
        console.log(`   [@service] returning result`)
        return result
    }

    function addSyncClient(x,y){
        console.log(`[@client] invoking the service`)
        let result = addSync(x,y)
        console.log(`[@client] result = ${result}`)
    }

    window['addSyncClient'] = addSyncClient;

    function addAsync(x,y, callback){
        console.log(`   [@service] processing ${x} and ${y}`)
        setTimeout(function(){
            let result = x + y
            console.log(`   [@service] returning result`)
            callback(result)
        }, 5000);
    }

    function addAsyncClient(x,y){
        console.log(`[@client] invoking the service`)
        addAsync(x,y, function(result){
            console.log(`[@client] result = ${result}`)
        })
    }

    window['addAsyncClient'] = addAsyncClient;

    function addAsyncPromise(x,y){
        console.log(`   [@service] processing ${x} and ${y}`)
        let promise = new Promise(function(resolveFn, rejectFn){
            setTimeout(function(){
                let result = x + y
                console.log(`   [@service] returning result`)
                resolveFn(result)
            }, 5000);
        });
        return promise;
    }

    //window['addAsyncPromise'] = addAsyncPromise;

    

    function addAsyncPromiseClient(x,y){
        console.log(`[@client] invoking the service`);
        var p = addAsyncPromise(x,y)
        var p2 = p.then(function(result){
            console.log(`[@client] result = ${result}`); 
            return result * 2;  
        });
        return p2;
        
    }

    window['addAsyncPromiseClient'] = addAsyncPromiseClient

    async function addAsyncPromiseClient2(x,y){
        console.log(`[@client] invoking the service`)
        let result = await addAsyncPromise(x,y)
        console.log(`[@client] result = ${result}`)
        return result * 2
    }

    window['addAsyncPromiseClient2'] = addAsyncPromiseClient2
    

    function divide(x,y){
        return new Promise(function(resolveFn, rejectFn){
            setTimeout(function(){
                if (y === 0) {
                    return rejectFn(new Error('Cannot divide by zero'))
                }
                return resolveFn(x / y)
            },5000);
        })
    }

    async function divideClient(x,y){
        try {
            let result = await divide(x,y)
            console.log('result = ', result);
        } catch(err){
            console.log('something went wrong!', err);
        }
    }
})();

