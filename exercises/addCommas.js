function runAddCommas(number){
    if(number<0){
        number=number*-1;
        return "-" + addCommas(number);
        
    }

    else{
        return addCommas(number)
    }
}
    
function addCommas(number){
    let str = "" + number;

    for(let i = str.length; i>=0; i=i-3){ 

        if(i<=3){
            return str;
        }

        if(str.length>3){ 
            let temp = str.slice(i-3, str.length); 
            
            str = str.substring(0, i-3) + "," + temp; 
            //i++
        }
    }
   return str;
}



if (require.main === module) {
    console.log('Running sanity checks for addCommas:');

    console.log(runAddCommas(1600371)==="1,600,371");
    console.log(runAddCommas(1600378)==="1,600,378");
    console.log(runAddCommas(160000378)==="160,000,378");
    console.log(runAddCommas(100)==="100");
    console.log(runAddCommas(27900)==="27,900");
    console.log(runAddCommas(160000378)==="160,000,378");
    console.log(runAddCommas(1)==="1");
    console.log(runAddCommas(1234758869584894)==="1,234,758,869,584,894");
    console.log(runAddCommas(0)==="0");
    console.log(runAddCommas(-1000)==="-1,000");
    console.log(runAddCommas(-100000)==="-100,000");
  
    //console.log(addCommas(1600371)==="1,600,371");
    //console.log(addCommas(1600378)==="1,600,378");
    //console.log(addCommas(160000378)==="160,000,378");
    //console.log(addCommas(100)==="100");
    //console.log(addCommas(27900)==="27,900");
    //console.log(addCommas(160000378)==="160,000,378");
    //console.log(addCommas(1)==="1");
    //console.log(addCommas(1234758869584894)==="1,234,758,869,584,894");
    //console.log(addCommas(0)==="0");
    //console.log(addCommas(-1000)==="-1,000");
    //console.log(addCommas(-100000)==="-100,000");


  }
  
  module.exports = runAddCommas;
  //module.exports = addCommas;