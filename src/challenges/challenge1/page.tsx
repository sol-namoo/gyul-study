import { PRODUCTS, Product } from './products';

const product1 = PRODUCTS[0];
const product2 = PRODUCTS[1];
const product3 = PRODUCTS[2];

function Challenge1() {
  return (
    <div className="mx-8 my-12">
      {/*
          Header
      */}
      <header className="flex justify-between items-center">
        <h1 className="text-2xl">challengee 1 - eCommerce</h1>
        <button
          type="button"
          className="btn btn-outline btn-primary"
          onClick={() =>
            (
              document.getElementById('cart_modal') as HTMLDialogElement
            ).showModal()
          }
        >
          Cart (0)
        </button>
      </header>

      {/*
          Product List
      */}
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-8 md:grid-cols-3 md:gap-10">
        {PRODUCTS.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>

      {/* 
          Dialog Implementation with DaisyUI
          https://daisyui.com/components/modal/#dialog-modal-closes-when-clicked-outside
      */}
      <dialog id="cart_modal" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Cart</h3>
          <p>Total price: $123</p>
          <div className="grid gap-4">
            <ProductCard product={product1} key={product1.id} />
            <ProductCard product={product2} key={product2.id} />
            <ProductCard product={product3} key={product3.id} />
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
}

function ProductCard({ product }: { product: Product }) {
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={product.imageUrl} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{product.name}</h2>
        <p>${product.price}</p>
        <div className="card-actions items-center">
          <button className="btn">-</button>
          <span className="text-xl mx-2">0</span>
          <button className="btn">+</button>
        </div>
      </div>
    </div>
  );
}

export default Challenge1;
