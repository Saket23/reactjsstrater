export  const fetchData = (request) =>{
    console.log(request);
    return{
        type:'request',
        payload:request
    }
}