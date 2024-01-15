var outputvalue="";
function Value(value){
    outputvalue=outputvalue+value;
    updateoutput();

}
function Valuechar(value){
    outputvalue=outputvalue+value;
    updateoutput();

}
function del(){
    outputvalue=outputvalue.slice(0 ,-1);
    updateoutput();
}
function Clear(){
    outputvalue="";
    updateoutput();
} 
function result(){
    outputvalue=eval(outputvalue).toString();
    updateoutput();
}
function updateoutput(){
    document.getElementById("input").value=outputvalue;
}