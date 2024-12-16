import { useState } from 'react';
import { PRODUCTS, Product, Cart } from './products';

// product는 api로 받아오는 것이라고 가정
// 로컬에서 관리하는 장바구니 객체가 필요; key는 id, value는 개수
// 장바구니 모달의 데이터도 api 호출 결과라고 가정; cart의 id로 모달에 표시할 리스트를 새로 추출

function Challenge1() {
  const [cart, setCart] = useState<Cart>({});
  const [cartModalData, setCartModalData] = useState<(Product | undefined)[]>(
    []
  );

  const add = (id: number) => {
    if (cart[id])
      setCart((prev) => {
        return { ...prev, [id]: prev[id] + 1 };
      });
    else
      setCart((prev) => {
        return { ...prev, [id]: 1 };
      });
  };

  const subtract = (id: number) => {
    if (cart[id] > 1)
      setCart((prev) => {
        return { ...prev, [id]: prev[id] - 1 };
      });
    else {
      const temp = { ...cart };
      delete temp[id];
      setCart(temp);
    }
  };

  const getCartModalData = () => {
    setCartModalData(
      Object.keys(cart).map((id) =>
        PRODUCTS.find((product) => String(product.id) === id)
      )
    );
  };

  return (
    <div className="mx-8 my-12">
      {/*
          Header
      */}
      <header className="flex justify-between items-center">
        <h1 className="text-2xl">Challenge 1 - eCommerce</h1>
        <button
          type="button"
          className="btn btn-outline btn-primary"
          onClick={() => {
            getCartModalData();
            (
              document.getElementById('cart_modal') as HTMLDialogElement
            ).showModal();
          }}
        >
          Cart ({Object.keys(cart).length})
        </button>
      </header>

      {/*
          Product List
      */}
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-8 md:grid-cols-3 md:gap-10">
        {PRODUCTS.map((product) => (
          <ProductCard
            product={product}
            count={cart[product.id]}
            add={add}
            subtract={subtract}
            key={product.id}
          />
        ))}
      </div>

      {/* 
          Dialog Implementation with DaisyUI
          https://daisyui.com/components/modal/#dialog-modal-closes-when-clicked-outside
      */}
      <dialog id="cart_modal" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Cart</h3>
          <p>
            Total price: $
            {cartModalData.reduce((acc, crr) => {
              if (crr) return acc + crr.price * cart[crr.id];
              return acc;
            }, 0)}
          </p>
          <div className="grid gap-4">
            {cartModalData.map(
              (product) =>
                product && (
                  <ProductCard
                    product={product}
                    count={cart[product.id]}
                    add={add}
                    subtract={subtract}
                    key={product.id}
                  />
                )
            )}
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
}

function ProductCard({
  product,
  count,
  add,
  subtract,
}: {
  product: Product;
  count: number;
  add: (id: number) => void;
  subtract: (id: number) => void;
}) {
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={product.imageUrl} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{product.name}</h2>
        <p>${product.price}</p>
        <div className="card-actions items-center">
          <button className="btn" onClick={() => subtract(product.id)}>
            -
          </button>
          <span className="text-xl mx-2">{count || 0}</span>
          <button className="btn" onClick={() => add(product.id)}>
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default Challenge1;
