const products = [
    {code: 1, name: 'Iphone 14', capacity: '128gb', color: 'white', stock: '10'},
    {code: 2, name: 'Iphone 14 pro', capacity: '512gb', color: 'blak', stock: '10'},
    {code: 3, name: 'Iphone 15', capacity: '256gb', color: 'green', stock: '10'},
    {code: 4, name: 'Iphone 15 pro max', capacity: '1024gb', color: 'blue', stock: '10'},
];

export const fetch = () => {

    return new Promise((res, rej)=>{
        setTimeout(()=> {
            res(products)
        }, 2000)
        })
}