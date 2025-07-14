"use client";

import { Button } from "@/components/ui/button";

const Error = ({ reset }: { reset: () => void }) => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-y-8">
      <h1 className="text-4xl font-bold text-[var(--text)] sm:text-5xl">
        Une erreur est survenue
      </h1>
      <p className="text-muted-foreground mt-2 max-w-md text-center text-lg">
        Désolé, une erreur inattendue est survenue. Veuillez réessayer plus tard
        ou revenir à la page d’accueil.
      </p>
      <Button className="cursor-pointer" onClick={reset}>
        Rafraîchir
      </Button>
    </div>
  );
};

export default Error;
