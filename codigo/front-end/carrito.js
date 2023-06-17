const btnCart = document.querySelector('.container-cart-icon');
const containerCartProducts = document.querySelector('.container-cart-products');

btnCart.addEventListener('click', () => {
	containerCartProducts.classList.toggle('hiddent-cart');
})

//Arri}a botones de antes 

const cartInfo = document.querySelector('.cart-product');
const rowProduct = document.querySelector('.row-product');

// Lista de todos los contenedores de productos
const productsList = document.querySelector('.card-deck');


let allProducts = [] 
const valorTotal = document.querySelector('.total-pagar');
const countProducts = document.querySelector('#contador-productos');




productsList.addEventListener('click', e=>{
     
    if(e.target.classList.contains('btn-add')){
        const product = e.target.parentElement.parentElement
        
        const infoProduct = {
            quantity:1,
            title: product.querySelector('h5').textContent,
            price: product.querySelector('.Precio').textContent
        }

        const exist = allProducts.some(product=>product.title === infoProduct.title)
        if(exist){
            const products = allProducts.map(product=>{
                if(product.title === infoProduct.title){
                    product.quantity++;
                    return product
                }else{
                    return product
                }

            })
            allProducts = [...allProducts]
        }else{
            allProducts = [...allProducts, infoProduct]
        }       

        showHTML();
    }

    console.log(allProducts);
})

/*rowProduct.addEventListener('click', e =>{
    if(e.target.classList.contains('close')){
        alert('entra')
        const product = e.target.parentElement
        const title = product.queryselector ('p').textContent;

        allProducts = allProducts.filter(
            product => product.title !== title); 

        showHTML()    
    }
    

})*/
rowProduct.addEventListener('click', e => {
	if (e.target.classList.contains('material-symbols-outlined')) {
		const product = e.target.parentElement;
		const title = product.querySelector('p').textContent;

		allProducts = allProducts.filter(
			product => product.title !== title
		);

		console.log(allProducts);

		showHTML();
	}
});

//Parte para mostrar

const showHTML = () => {

    if(!allProducts.length){
        containerCartProducts.innerHTML=`
        <p class="cart-empty">El carrito esta vacio </p>
        `
    }




    rowProduct.innerHTML= ''

    let total = 0;
    let totalOfProducts = 0;

    allProducts.forEach(product => {
        const containerProduct = document.createElement('div')
        containerProduct.classList.add('cart-product')
        
        containerProduct.innerHTML = `
        <div class="info-cart-product">
            <span class="cantidad-producto-carrito">${product.quantity}</span>
            <p class="titulo-producto-carrito">${product.title}</p>
            <span class="precio-producto-carrito">${product.price}</span>
        </div>
        <span class="material-symbols-outlined">
            close
        </span>
            `;


        rowProduct.append(containerProduct)

        total = total + parseInt(product.quantity * product.price.slice(1));
        totalOfProducts = totalOfProducts + product.quantity;

    })
    
    valorTotal.innerText = `$${total}`;
    countProducts.innerText = totalOfProducts;


}

