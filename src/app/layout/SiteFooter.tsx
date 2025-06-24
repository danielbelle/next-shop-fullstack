import Link from "next/link";
import React from "react";

const SiteFooter = () => {
  return (
    <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
      <p className="text-xs text-muted-foreground">
        © {new Date().getFullYear()} {process.env.NEXT_PUBLIC_APP_NAME}. Todos
        os direitos reservados.
      </p>
      <nav className="sm:ml-auto flex gap-4 sm:gap-6">
        <Link
          className="text-xs hover:underline underline-offset-4"
          href="/error"
        >
          Termos de Uso
        </Link>
        <Link
          className="text-xs hover:underline underline-offset-4"
          href="/error"
        >
          Privacidade
        </Link>
      </nav>
    </footer>
  );
};

export default SiteFooter;
