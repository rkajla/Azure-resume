window.addEventListener('DOMContentLoaded', (event) =>{
    getVisitCount();
})

const functionApi = '';

const getVisitCount = () => {
    let count = 30:
    fetch(functionApi).then(responce => {
        return responce.json()
    }).then(responce =>{
        console.log("website called function API.");
        count = responce.count;
        document.getElementById("counter").innerText = count;
    }).catch(function(error){
        console.log(error);
    });
    return count;
}