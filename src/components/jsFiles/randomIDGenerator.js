function randomID (){
    const r1 = Math.round(Math.random() * (9999 - 1000) + 1000);  
    const r2 = Math.random().toString(36).substring(2,8);
    const r3 = Date.now()
    const r4 = Math.random().toString(36).substring(2,9);
    const r5 = Math.round(Math.random() * (99999 - 10000) + 10000); 
    const id = r1 + '-'+ r2 + r3 + r4 + '-' + r5  
    return id
}

export default randomID