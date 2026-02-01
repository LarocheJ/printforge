export default function Home() {
  return (
    <main className="flex flex-wrap items-center gap-12 px-8 py-16 max-w-screen-2xl mx-auto">
      <div className="hero-content flex-1">
        <p className="hero-pretitle mb-4 uppercase font-medium text-base">Your go-to Platform for 3D Printing Files</p>
        <h1 className="hero-title text-6xl font-display font-semibold leading-none mb-8">Discover what’s possible with 3D printing</h1>
        <p className="hero-text text-2xl mb-12">
          Join our community of creators and explore a vast library of user-submitted models.
        </p>
        <a className="hero-cta border-2 p-2 uppercase border-black font-medium hover:bg-orange-700 hover:text-white transition-all" href="#">Browse Models</a>
      </div>
      <img className="flex-1 rounded-full" src="/home-page-hero-img.png" />
    </main>
  )
}
