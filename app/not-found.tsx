"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-y-8">
      <h1 className="text-6xl font-bold text-[var(--text)] sm:text-7xl">404</h1>
      <p className="text-muted-foreground mt-4 text-lg">
        Oups… Cette page n’existe pas ou a été déplacée.
      </p>
      <Link href="/">
        <Button className="cursor-pointer">
          <ArrowLeft />
          Retour à l’accueil
        </Button>
      </Link>
    </div>
  );
};

export default NotFound;
