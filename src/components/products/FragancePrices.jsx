
const prices = [
  { format: "30 ml", price: "7.90 €" },
  { format: "50 ml", price: "11.90 €" },
  { format: "100 ml", price: "16.90 €" },
];

export function FragrancePrices() {
  return (
    <div className="mt-6 max-w-sm space-y-2 text-gray-600">
    {prices.map((item) => (
        <div key={item.format} className="flex items-baseline gap-2">
        <span className="whitespace-nowrap italic">{item.format}</span>
        <span className="flex-1 border-b border-dotted border-gray-400" />
        <span className="italic font-semibold text-brand-petrol whitespace-nowrap">
            {item.price}
        </span>
        
        </div>
        
    ))}
    <p className="mt-5 text-sm text-gray-600 flex items-center gap-2">
        <span className="text-brand-gold">↻</span>
        Ahorra 2 € al recargar tu frasco.
      </p>
    </div>
  );
}
