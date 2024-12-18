import { cards } from "../../../utils/cards";
import CardDetail from "./CardDetail";

export default async function CardDetailPage({ params }) {
  const { id } = await params; // Ensure params is awaited.

  const card = cards.find((item) => item.id === parseInt(id, 10));

  if (!card) {
    return (
      <div className="text-center text-red-500">
        <h1>Card not found</h1>
      </div>
    );
  }

  return <CardDetail card={card} />;
}

export async function generateStaticParams() {
  return cards.map((card) => ({
    id: card.id.toString(),
  }));
}
