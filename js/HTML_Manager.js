let HTML_Manager = {
    //Properties
  //  loaded: false,
   // showing: false,
    htmlTargetEle: {},

    //Methods
    load: function(HTMLsourceFile) {
        //alert("in load");
        //alert("HTMLsourceFile: " + HTMLsourceFile);
        this.htmlTargetEle.style.zIndex = 10;
        this.htmlTargetEle.style.opacity= "1";
      //  if(!this.loaded){
            fetch(HTMLsourceFile)
            .then(res => {
                //alert("in res =>");
                if (res.ok) {
                    //alert("res.ok");
                    return res.text();
                }
            })
            .then(resultHTML => {
                //alert("loading resultHTML");
                this.htmlTargetEle.innerHTML = resultHTML;
            })

           // this.loaded = true;
     //   } 
      //  this.showing = true; 
    },

    close: function(){
        this.htmlTargetEle.style.opacity = "0";
        this.htmlTargetEle.style.zIndex = -10;
    },

    transitionHasEnded: function(){
        //alert("in transitionHasEnded");
        let newEle = document.getElementById("html-target-id");
        if(newEle.style.opacity == 0){
            newEle.style.zIndex = -10;	
        }
    },

    init: function(){
        //alert("in init()");
        this.htmlTargetEle = document.getElementById("html-target-id");
        this.htmlTargetEle.addEventListener("transitionend",this.transitionHasEnded);
        //alert("after init()");
    }
}