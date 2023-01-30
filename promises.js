let p = new Promise( ( resolve, reject ) => {
    let a =1 + 1;
    if(a === 2) {
        resolve( 'success');
    }else {
        reject( 'error');
    }
})
p.then( ( message ) => {
    console.log( "this is then..resolved");
}) .catch( (message) => {
    console.log( 'this is an error, rejected');
})

let myPromise = new Promise( (resolve, reject) => {
    let vote = true;
    if( vote = true ) {
        resolve( 'Successful voting');
    }else {
        reject( 'failed voting');
    }
})

myPromise.then( (message) => {
    console.log( 'successful');
}) .catch( (message) => {
    console.log( 'failed' );
})