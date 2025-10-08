export const formatNumber = (num) => { 
    if(num >= 1000000) {
      return parseFloat((num/1000000).toFixed(1)) + "M";
    }else if (num >= 1000){ 
      return parseFloat((num / 1000).toFixed(1)) + "k";
    }else{
      return num?.toString();
    }
   }