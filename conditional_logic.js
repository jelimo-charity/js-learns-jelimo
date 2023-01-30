// 1. IF...ELSE

/*if(condition == true) {
    //Execute code
}
    else {
        //Execute code
    }
*/ 

    var score= 50;
    if(score >35) {
        console.log('SUPERB!')
    }
    else {
        console.log('GOOD!')
    };

// 2. IF...ELSE IF...ELSE

     var position= 'first';
     if(position=='first') {
        console.log( 'GOLD MEDAL')
     }
     else if(position=='second') {
        console.log('COPPER MEDAL')
     }
     else if(position=='third'){
        console.log('BRONZE MEDAL')
     }
     else {
        console.log('NO MEDAL')
     };


// 3. SWITCH

      var position='third';

      switch(position) {
        case 'first':
            console.log('AWARD GOLD MEDAL');
            break;
        case 'second':
            console.log('AWARD BRONZE MEDAL');
            break;
        case 'third':
            console.log('AWARD COPPER MEDAL');
            break;
        default:
            console.log('AWARD NO MEDAL');
      }