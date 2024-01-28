import { fetchBeers } from "@/actions/fetch-beers";
import { Beers } from "@/components/beers";
import { LoadMore } from "@/components/load-more";

const ProductsPage = async() => {
  const beers = await fetchBeers(1);

  return (
    <div className="container mx-auto p-4 min-h-screen max-w-5xl">
      <h1 className="text-3xl font-bold mb-4">Cervejas</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <Beers beers={beers} />
        <LoadMore />
      </div>
    </div>
  );
  
}

export default ProductsPage;