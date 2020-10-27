    class Frutta
    {
        static async getFrutta() {
        const response = await fetch('https://api.predic8.de//shop/categories/Fruits').then(res => res.json())
        const frutta = response.products;

        frutta.map( x => {
            const app = document.getElementById('app')
            const li = document.createElement('li')
            li.textContent = x.name
            app.appendChild(li)
            return app
        })
        console.log(frutta);
    }
}
Frutta.getFrutta();
