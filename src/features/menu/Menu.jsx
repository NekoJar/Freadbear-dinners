import { getMenu } from "../../services/apiMenus";
import Loader from "../../ui/Loader";
import MenuItem from "./MenuItem";
import { useMenus } from "./useMenus";

function Menu() {
  const { isLoading, menus } = useMenus();

  if (isLoading) return <Loader />;

  return (
    <>
      <ul className="divide-y divide-stone-200 px-4">
        {menus.map((pizza) => (
          <MenuItem pizza={pizza} key={pizza.id} />
        ))}
      </ul>
    </>
  );
}

export async function loader() {
  const menu = await getMenu();
  return menu;
}

export default Menu;
