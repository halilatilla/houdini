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
      <Card className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden">
        <CardContent className="p-4">
          <h3 className="text-sm text-gray-500 dark:text-gray-400">
            Total Transactions
          </h3>
          <p className="text-xl sm:text-2xl font-semibold dark:text-white">
            235.46k
          </p>
        </CardContent>
      </Card>
      <Card className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden">
        <CardContent className="p-4">
          <h3 className="text-sm text-gray-500 dark:text-gray-400">
            Total Swap Volume
          </h3>
          <p className="text-xl sm:text-2xl font-semibold dark:text-white">
            $696.39M
          </p>
        </CardContent>
      </Card>
      <Card className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden">
        <CardContent className="p-4">
          <h3 className="text-sm text-gray-500 dark:text-gray-400">
            $LOCK Buybacks
          </h3>
          <p className="text-xl sm:text-2xl font-semibold dark:text-white">
            11.51M
          </p>
        </CardContent>
      </Card>
    </section>
  );
}
