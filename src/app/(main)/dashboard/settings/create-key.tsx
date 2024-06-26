"use client";

import { useState, useTransition } from "react";

import { createAPIKey, revalidatePathForDashboard } from "@/actions/api-keys";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const CreateAPIKey = () => {
  const [loading, startTransition] = useTransition();
  const [key, setKey] = useState<null | string>(null);

  const createKey = () => {
    startTransition(async () => {
      const key = await createAPIKey();

      if (key) {
        setKey(key);
      }
    });
  };

  const handleRevalidation = async () => {
    revalidatePathForDashboard();
  };

  return (
    <div>
      <Button onClick={createKey} disabled={loading}>
        Create API Key
      </Button>

      <Dialog
        open={!!key}
        onOpenChange={() => {
          setKey(null);
          handleRevalidation();
        }}
      >
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Your API key is ready!</DialogTitle>
            <DialogDescription>
              Make sure you copy your API key now. You won&apos;t be able to see
              it again!
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <code className="px-4 py-2 text-sm font-medium text-white bg-gray-900 rounded-md">
              {key}
            </code>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CreateAPIKey;
