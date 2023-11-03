import supabase from "./supabase";

export async function getMenu() {
  const { data, error } = await supabase.from("menus").select("*");

  if (error) {
    console.log(error);
    throw new Error("Menus could not be loaded");
  }

  return data;
}
