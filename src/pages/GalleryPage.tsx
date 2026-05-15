import Gallery from '../components/Gallery';

export default function GalleryPage() {
  return (
    <div className="pt-20">
      <section className="py-24 bg-emerald-900 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Portfolio</h1>
          <p className="text-xl md:text-2xl text-emerald-100 max-w-3xl mx-auto">
            Explore our latest masterpieces and transformations.
          </p>
        </div>
      </section>
      <Gallery hideViewAll={true} />
    </div>
  );
}
