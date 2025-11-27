import { OrderHeader } from "./OrderHeader";
import { OrderDetailsGrid } from "./OrderDetailsGrid";

export function OrdersGrid({ orders }) {
  return (
    <>
      <div className="orders-grid">
        {orders.map((orders) => {
          return (
            <div key={orders.id} className="order-container">

              <OrderHeader orders={orders}/>
              <OrderDetailsGrid orders={orders}/>
            </div>
          );
        })}
      </div>
    </>
  )
}