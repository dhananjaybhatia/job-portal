import SearchForm from "@/components/SearchForm";
import StartupCard from "@/components/StartupCard";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;

  const posts = [
    {
      _createdAt: new Date(),
      views: 55,
      author: { _id: 1, name: "Dhananjay" },
      _id: 1,
      description: "This is a description.",
      image:
        "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Robots",
      title: "We Robots",
    },
  ];

  return (
    <>
      <section className="blueContainer">
        <h1 className="heading">
          Share Your Business. Build Real Connections.
        </h1>
        <p className="sub-heading !max-w-3xl">
          Post your brand. Get votes. Get discovered.
        </p>
        <SearchForm query={query} />
      </section>
      <section className="px-6 py-10 max-w-7xl mx-auto">
        <p className="font-semibold text-[30px] text-black">
          {query ? `All results for "${query}"` : "All Jobs"}
        </p>
        <ul className="card_grid mt-7">
          {posts?.length > 0 ? (
            posts.map((post) => <StartupCard key={post?._id} post={post} />)
          ) : (
            <p className="no-results">No Jobs Found</p>
          )}
        </ul>
      </section>
    </>
  );
}
