import { Card, CardContent } from "@/components/ui/card";

export function Statistics() {
  return (
    <section
      aria-labelledby="statistics-heading"
      className="w-full grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8"
    >
      <h2 id="statistics-heading" className="sr-only">
        Platform Statistics
      </h2>
      <Card className="bg-white rounded-xl overflow-hidden">
        <CardContent className="p-4">
          <h3 className="text-sm text-gray-500">Total Transactions</h3>
          <p className="text-xl sm:text-2xl font-semibold">235.46k</p>
        </CardContent>
      </Card>
      <Card className="bg-white rounded-xl overflow-hidden">
        <CardContent className="p-4">
          <h3 className="text-sm text-gray-500">Total Swap Volume</h3>
          <p className="text-xl sm:text-2xl font-semibold">$696.39M</p>
        </CardContent>
      </Card>
      <Card className="bg-white rounded-xl overflow-hidden">
        <CardContent className="p-4">
          <h3 className="text-sm text-gray-500">$LOCK Buybacks</h3>
          <p className="text-xl sm:text-2xl font-semibold">11.51M</p>
        </CardContent>
      </Card>
    </section>
  );
}
