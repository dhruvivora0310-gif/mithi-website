export default function Collection() {
  return (
    <section id="collection" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-semibold text-center mb-16">
          Signature Collection
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          <img src="/images/look1.jpg" className="w-full rounded-xl" />
          <img src="/images/look2.jpg" className="w-full rounded-xl" />
          <img src="/images/look3.jpg" className="w-full rounded-xl" />
          <img src="/images/look4.jpg" className="w-full rounded-xl" />
          <img src="/images/look5.jpg" className="w-full rounded-xl" />
          <img src="/images/look6.jpg" className="w-full rounded-xl" />
        </div>
      </div>
    </section>
  );
}
