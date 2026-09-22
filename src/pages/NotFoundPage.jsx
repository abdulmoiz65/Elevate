import Button from "../components/ui/Button";
import Container from "../components/ui/Container";

export default function NotFoundPage() {
  return (
    <section className="py-24 sm:py-32">
      <Container className="text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-600">404</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl">
          Page not found
        </h1>
        <p className="mx-auto mt-4 max-w-md text-pretty leading-relaxed text-ink-600">
          The page you are looking for does not exist or has moved.
        </p>
        <Button to="/" size="lg" className="mt-8">
          Back to home
        </Button>
      </Container>
    </section>
  );
}
