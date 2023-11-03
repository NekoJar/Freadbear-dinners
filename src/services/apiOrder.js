import supabase from "./supabase";

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
    const { data, error } = await supabase.from("orders").insert([
      {
        newOrder,
      },
    ]);
    return data;
  } catch {
    throw Error("Failed creating your order");
  }
}
