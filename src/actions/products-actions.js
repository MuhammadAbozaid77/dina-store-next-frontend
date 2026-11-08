"use server";
import axios from "axios";
const PRODUCTS_API = "https://makeup-api.herokuapp.com/api/v1/products.json";

export async function getAllProducts() {
  try {
    const { data } = await axios.get(PRODUCTS_API, {
      headers: {
        "Content-Type": "application/json",
      },
    });    
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
}
