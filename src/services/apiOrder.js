import supabase from "./supabase";
const API_URL = "https://react-fast-pizza-api.onrender.com/api";

export async function getOrder(id) {
  const { data: orders, error } = await supabase
    .from("orders")
    .select("orderId");

  if (error) {
    console.log(error);
    throw new Error(`Couldn't find order #${id}`);
  }

  return orders;
}

export async function createOrder(newOrder) {
  try {
    const { data, error } = await supabase.from("order").insert([
      {
        customer: newOrder.customer,
        phone: newOrder.phone,
        address: newOrder.address,
        cart: newOrder.cart,
        position: newOrder.position,
        priority: newOrder.priority,
      },
    ]);

    if (error) {
      console.error("Error creating order:", error);
      throw new Error("Failed creating your order");
    }

    return data;
  } catch (error) {
    console.error("Failed creating your order", error);
    throw new Error("Failed creating your order");
  }
}

export async function updateOrder(id, updateObj) {
  try {
    const res = await fetch(`${API_URL}/order/${id}`, {
      method: "PATCH",
      body: JSON.stringify(updateObj),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) throw Error();
    // We don't need the data, so we don't return anything
  } catch (err) {
    throw Error("Failed updating your order");
  }
}
