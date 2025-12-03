import { OrderHeader } from "./OrderHeader";
import { OrderDetailsGrid } from "./OrderDetailsGrid";

export function OrdersGrid({ orders, loadCart }) {
  return (
    <>
      <div className="orders-grid">
        {orders.map((orders) => {
          return (
            <div key={orders.id} className="order-container">

              <OrderHeader orders={orders}/>
              <OrderDetailsGrid orders={orders} loadCart={loadCart}/>
            </div>
          );
        })}
      </div>
    </>
  )
}