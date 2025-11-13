
function HomePage() {
  return (
     <section className="flex-1 overflow-y-auto pt-30 pl-5 pr-10">
          <h1 className="text-2xl font-bold mb-4">Welcome 👋</h1>
          <p className="text-gray-400">
            Select a category from the left to explore related topics, or start building your next project!
          </p>
          <div className="mt-6">
            {/* You can use React Router here later */}
            <div className="bg-zinc-950 rounded-xl p-4 border border-zinc-800">
              <h2 className="text-xl font-semibold mb-2 text-indigo-400">Main Page Content</h2>
              <p className="text-gray-400">
                This is the section where all your pages or content will appear dynamically.
              </p>
            </div>
          </div>
        </section>
  )
}

export default HomePage