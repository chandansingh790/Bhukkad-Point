import { useState, useEffect } from "react";
import {MENU_API_URL} from '../utils/constants.js';

const useRestaurantMenu = (resId) => {
    const [restaurant, setRestaurant] = useState(null);

    useEffect(() => {
        fetchMenu();
    },[])

    const fetchMenu = async () => {
        try {
        const data = await fetch(MENU_API_URL + resId);
        const json = await data.json();
        setRestaurant(json.data);
        } catch(err) {
            console.log(err);
            setRestaurant(err);
        }
    }
    return restaurant;
}
export default useRestaurantMenu;