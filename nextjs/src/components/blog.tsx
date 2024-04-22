import Image from "next/image";
import Link from "next/link";
const Item = () => {
  return (
    <article className="group relative flex flex-col space-y-2">
      <Image
        src=""
        alt=""
        width={804}
        height={452}
        className="rounded-md border bg-muted transition-colors"
        priority={true}
      />
      <h2 className="text-2xl font-extrabold">asd</h2>
      <p className="text-muted-foreground">asdasd</p>
      <p className="text-sm text-muted-foreground">asd</p>
      <Link href="asd" className="absolute inset-0">
        <span className="sr-only">View Article</span>
      </Link>
    </article>
  );
};

const Header = () => {
  return (
    <>
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block font-heading text-4xl tracking-tight lg:text-5xl">
            Blog
          </h1>
          <p className="text-xl text-muted-foreground">
            A blog built using Contentlayer. Posts are written in MDX.
          </p>
        </div>
      </div>
      <hr className="my-8" />
    </>
  );
};

const List = () => {
  return (
    <div className="container max-w-4xl py-6 lg:py-10">
      <Header />
      <div className="grid gap-10 sm:grid-cols-2">
        <Item />
        <Item />
        <Item />
        <Item />
      </div>
    </div>
  );
};

export const Blog = {
  List,
  Header,
  Item,
};
