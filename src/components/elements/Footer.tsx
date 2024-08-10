export const Footer = () => {
  return (
    <footer id="footer" className="w-full bg-white dark:border-b-slate-700 dark:bg-background">
      <hr className="w-11/12 mx-auto" />
      <section className="container py-2 text-center">
        <h3>
          &copy; 2024 Portfolio made by{" "}
          <a rel="noreferrer noopener" target="_blank" href="/" className="text-primary transition-all border-primary hover:border-b-2">
            Galih Agus Saputra
          </a>
        </h3>
      </section>
    </footer>
  );
};
