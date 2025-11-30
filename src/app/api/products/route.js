import { getProducts } from "@/utils/actions";

export async function GET() {
    const products = await getProducts();
    return Response.json(products);
}
