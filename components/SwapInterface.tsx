import { SwapForm } from "./SwapForm";
import { Statistics } from "./Statistics";

export function SwapInterface() {
  return (
    <div className="flex flex-col items-center justify-center p-4 sm:p-8">
      <div className="max-w-3xl w-full">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2 text-center">
          Transact Freely
        </h1>
        <p className="text-center text-gray-600 mb-8 px-4">
          Send, Swap or Bridge with 4000 tokens across all chains
        </p>

        <SwapForm />

        <p className="text-sm text-center text-gray-500 mb-8 px-4">
          For your security, transaction data auto-deletes after 72 hours.
        </p>

        <Statistics />
      </div>
    </div>
  );
}
