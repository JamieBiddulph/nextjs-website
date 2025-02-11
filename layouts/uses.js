import Container from '@/components/Container';

export default function UsesLayout({ children }) {
  return (
    <Container
      title="Uses – Jamie Biddulph"
      description="This is my current WFH and Gaming setup."
    >
      <article className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          My Gear
        </h1>
        <p className="text-purple-700 dark:text-purple-300 mt-2 mb-8">
          This is my current Tech setup!
        </p>
        <div className="prose dark:prose-dark w-full">{children}</div>
      </article>
    </Container>
  );
}
