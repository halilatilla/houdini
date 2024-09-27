"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { ArrowDownIcon } from "lucide-react";

export function SwapForm() {
  const [swapMode, setSwapMode] = useState<"standard" | "private">("standard");

  return (
    <Card className="w-full bg-white shadow-lg rounded-2xl overflow-hidden mb-8">
      <CardContent className="p-4 sm:p-6">
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="flex justify-between items-center mb-6">
            <Label htmlFor="swap-mode" className="text-sm font-medium">
              Swap Mode
            </Label>
            <div className="flex items-center space-x-2">
              <span
                className={`text-sm ${
                  swapMode === "standard" ? "text-blue-600" : "text-gray-500"
                }`}
              >
                Standard
              </span>
              <Switch
                id="swap-mode"
                checked={swapMode === "private"}
                onCheckedChange={(checked) =>
                  setSwapMode(checked ? "private" : "standard")
                }
              />
              <span
                className={`text-sm ${
                  swapMode === "private" ? "text-blue-600" : "text-gray-500"
                }`}
              >
                Private
              </span>
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <Label htmlFor="from-amount" className="text-sm font-medium">
                From
              </Label>
              <div className="flex items-center space-x-2 bg-[#F5F5F7] rounded-xl p-2 mt-1">
                <Input
                  id="from-amount"
                  type="number"
                  placeholder="0"
                  className="bg-transparent border-none text-lg font-semibold flex-grow"
                />
                <Select>
                  <SelectTrigger className="w-[100px] bg-transparent border-none">
                    <SelectValue placeholder="ETH" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="eth">ETH</SelectItem>
                    <SelectItem value="btc">BTC</SelectItem>
                    <SelectItem value="sol">SOL</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <p className="text-sm text-gray-500 mt-1">Ethereum Mainnet</p>
            </div>
            <div className="flex justify-center">
              <Button
                variant="ghost"
                className="rounded-full p-2"
                aria-label="Swap currencies"
              >
                <ArrowDownIcon className="text-blue-600 w-5 h-5" />
              </Button>
            </div>
            <div>
              <Label htmlFor="to-amount" className="text-sm font-medium">
                To
              </Label>
              <div className="flex items-center space-x-2 bg-[#F5F5F7] rounded-xl p-2 mt-1">
                <Input
                  id="to-amount"
                  type="number"
                  placeholder="0"
                  className="bg-transparent border-none text-lg font-semibold flex-grow"
                />
                <Select>
                  <SelectTrigger className="w-[100px] bg-transparent border-none">
                    <SelectValue placeholder="SOL" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="eth">ETH</SelectItem>
                    <SelectItem value="btc">BTC</SelectItem>
                    <SelectItem value="sol">SOL</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <p className="text-sm text-gray-500 mt-1">Solana</p>
            </div>
            <div>
              <Label
                htmlFor="receiving-address"
                className="text-sm font-medium"
              >
                Receiving wallet address
              </Label>
              <Input
                id="receiving-address"
                placeholder="Enter receiving address"
                className="bg-[#F5F5F7] border-none rounded-xl mt-1"
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition-colors"
            >
              Find the best route
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
