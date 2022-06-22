function rec(num){
    if(num == 0){
      return 1;
    }
    return num * rec(num - 1);
  }
  console.log(rec(7));
  