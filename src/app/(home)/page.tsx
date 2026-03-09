import Link from 'next/link';
import { Cards, Card } from 'fumadocs-ui/components/card';

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center text-center flex-1 px-4 py-8">
      <div className="max-w-4xl">
        <h1 className="text-4xl font-bold mb-4 text-foreground">
          Kang Software
        </h1>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Documentation for our open source apps
        </p>

        <div className="flex gap-4 justify-center mb-12">
          
          <a
            href="/docs"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
          >
            View the docs
          </a>
        </div>
      </div>
    </div>
  );
}
