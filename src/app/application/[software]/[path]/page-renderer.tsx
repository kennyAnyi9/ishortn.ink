"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const PageRenderer = ({
  domain,
  ogImage,
}: {
  domain: string;
  ogImage: string;
}) => {
  const router = useRouter();
  useEffect(() => {
    router.push(domain);
  }, [domain, router]);

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen gap-4">
      <Image
        src={ogImage}
        alt="og image"
        className="rounded-md"
        height={144}
        width={144}
      />
      <h1 className="text-3xl font-mazzardBold">Redirecting...</h1>
    </div>
  );
};

export default PageRenderer;
