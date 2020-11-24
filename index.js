$(".di").on("click",function(){
  const className=this.name;
  $(".sheduleImg").attr("src", "shedules/"+className+".png" );
});





























$(".ti").on("click",function(){
  const year =this.name;
  console.log(year);
  if(year === "14"){
    $(".table").attr("src", "https://docs.google.com/spreadsheets/d/e/2PACX-1vRNtGD1TSU3e1hb7EcPkwuxt0v3ec4HXvD-h9iV5fieNy4HAMGHTvlYj7x5pWAm8snVQuVUg1KrMOje/pubhtml" );
  }
  if(year === "15"){
    $(".table").attr("src", "https://docs.google.com/spreadsheets/d/e/2PACX-1vSJ8p72W8ezaRBVWhhT1FT9G7vTgKacBROqKVQIB232nJfvpCC9uouQ1bEzAwHsNJIJ7QEZlO0Jy7n2/pubhtml" );
  }
  if(year === "16"){
    $(".table").attr("src", "https://docs.google.com/spreadsheets/d/e/2PACX-1vQgRP0Wme4n0HT6CbupBJuaypIGBxFsEE_31cWxJrdkMjX1pDPqaHmsRn-Lm7Be4yAIabK_RcZ_X5Wu/pubhtml " );
  }
  if(year === "17"){
    $(".table").attr("src", "https://docs.google.com/spreadsheets/d/e/2PACX-1vSGqiLDyqfYjapOaD8-Ey50MxjlVnHW4xwuq-E3YWwtCpY85L_eOAgA-aqTDE29u9KGI7GpqKhDF9TH/pubhtml" );
  }
  if(year === "18"){
    $(".table").attr("src", "https://docs.google.com/spreadsheets/d/e/2PACX-1vRSdpgLRuMBSt_QnjpTIVjnMXw6unsqsveEUxelfKEGF4nESVDzvMP1iv01qImvcuzH-ip9ky676NfX/pubhtml" );
  }
  if(year === "19"){
    $(".table").attr("src", "https://docs.google.com/spreadsheets/d/e/2PACX-1vR09xMc3qYO2Lpxk9cO-3A8yoyRkpNfbLPsP1257qoHIVd-PoQx-w2yPLMgnbE_n4N1UuJZp7-rdef5/pubhtml " );
  }
  if(year === "statistic"){
    $(".table").attr("src", "https://docs.google.com/spreadsheets/d/e/2PACX-1vRgDe_qeDx_sFewnnksUhEWZx_xBvyRaUzlKk-GcZd3l876nlV5gV7aR8HZmAJ49AWZ1-dU7UcdaASg/pubhtml" );
  }
});
