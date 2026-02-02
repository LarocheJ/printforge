export default function About() {
    return (
        <>
            <main className="flex gap-12 px-8 py-16 max-w-screen-2xl mx-auto items-center">
                <img className="max-w-2xl" src="/hero-image.png" alt="" />
                <div>
                    <h1 className="text-base uppercase font-medium mb-4">About PrintForge</h1>
                    <h2 className="font-display text-6xl font-semibold mb-4">Empowering makers worldwide</h2>
                    <p className="text-xl">
                        PrintForge is dedicated to empowering creators by providing a vast library of user-submitted 3D printing files. Our mission is to foster innovation and creativity in the 3D printing community by making high-quality models accessible to everyone.
                    </p>
                    <p className="text-xl">
                        Whether you're a hobbyist, educator, or professional, PrintForge offers a platform where you can discover, share, and collaborate on 3D printing projects. Join us in shaping the future of 3D printing!
                    </p>
                </div>
            </main>
            <section className="border-y-2 border-slate mb-4">
                <div className="max-w-screen-2xl mx-auto px-8 py-16 flex items-center justify-center gap-12">
                    <div className="flex-1 px-8 border-r-2 border-slate-500">
                        <h2 className="font-display text-3xl font-semibold mb-4 flex items-center gap-2"><img src="/Stack.png" alt="" />100k+ Models</h2>
                        <p className="text-xl">Access our vast library of community-created 3D models, from practical tools to artistic creations.</p> 
                    </div>
                    <div className="flex-1 px-8 border-r-2 border-slate-500">
                        <h2 className="font-display text-3xl font-semibold mb-4 flex items-center gap-2"><img src="/GlobeSimple.png" alt="" />Active Community</h2>
                        <p className="text-xl">Join thousands of makers who share tips, provide feedback, and collaborate on projects.</p>
                    </div>
                    <div className="flex-1 px-8">
                        <h2 className="font-display text-3xl font-semibold mb-4 flex items-center gap-2"><img src="/flag.png" alt="" />Free to Use</h2>
                        <p className="text-xl">Most models are free to download, with optional premium features for power users.</p>
                    </div>
                </div>
            </section>
            <section className="max-w-3xl mx-auto px-8 py-16">
                <h2 className="font-display text-6xl font-semibold mb-4">Our Vision</h2>
                <p className="text-xl">At PrintForge, we believe that 3D printing is revolutionizing the way we create, prototype, and manufacture. Our platform serves as a bridge between designers and makers, enabling the sharing of knowledge and creativity that pushes the boundaries of what's possible with 3D printing.</p>
                <hr className="my-6 max-w-60 mx-auto border-slate-500" />
                <p className="text-xl">Whether you're a hobbyist looking for your next weekend project, an educator seeking teaching materials, or a professional designer wanting to share your creations, PrintForge provides the tools and community to support your journey in 3D printing.</p>
            </section>
        </>
    )
}