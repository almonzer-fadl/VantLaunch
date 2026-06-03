import Image from "next/image";

const gariPreviewScreens = [
  {
    src: "/media/gari-home.webp",
    alt: "Gari home screen with garage and service categories",
    label: "Home",
  },
  {
    src: "/media/gari-activity.webp",
    alt: "Gari activity screen with active jobs and parts orders",
    label: "Active jobs",
  },
] as const;

const gariGallery = [
  { src: "/media/gari-home.webp", title: "Home" },
  { src: "/media/gari-garage.webp", title: "Garage" },
  { src: "/media/gari-add-vehicle.webp", title: "Add vehicle" },
  { src: "/media/gari-workshop.webp", title: "Workshop service" },
  { src: "/media/gari-parts-workshop.webp", title: "Workshop parts" },
  { src: "/media/gari-product-detail.webp", title: "Product detail" },
  { src: "/media/gari-activity.webp", title: "Active jobs" },
  { src: "/media/gari-payments.webp", title: "Payment methods" },
  { src: "/media/gari-payment-success.webp", title: "Payment success" },
  { src: "/media/gari-reviews.webp", title: "Reviews" },
  { src: "/media/gari-rating-modal.webp", title: "Rating modal" },
  { src: "/media/gari-sign-in.webp", title: "Sign in" },
  { src: "/media/gari-forgot-password.webp", title: "Password reset" },
] as const;

export function GariPhonePreview() {
  return (
    <figure className="overflow-hidden rounded-2xl border border-black/10 bg-white shadow-[0_18px_55px_-42px_rgba(17,16,14,0.35)]">
      <div className="grid gap-4 bg-[#eef2f8] p-5 sm:grid-cols-2 sm:p-8">
        {gariPreviewScreens.map((screen, index) => (
          <div
            key={screen.src}
            className={`mx-auto w-full max-w-[240px] overflow-hidden rounded-[1.7rem] border border-black/10 bg-white shadow-[0_18px_55px_-42px_rgba(17,16,14,0.35)] ${
              index === 1 ? "sm:mt-10" : ""
            }`}
          >
            <div className="relative aspect-[9/19] w-full">
              <Image
                src={screen.src}
                alt={screen.alt}
                fill
                priority
                sizes="(max-width: 640px) 70vw, 240px"
                className="object-cover object-top"
              />
            </div>
            <figcaption className="border-t border-black/10 bg-white px-3 py-2 text-center text-[11px] font-bold text-[#5f5548]">
              {screen.label}
            </figcaption>
          </div>
        ))}
      </div>
    </figure>
  );
}

export function GariScreenGallery() {
  return (
    <section>
      <div className="mb-6">
        <p className="type-meta-uppercase mb-3">Gari app preview</p>
        <h2 className="text-3xl font-bold tracking-tight text-[#11100e]">Explore the app experience.</h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#5f5548]">
          Garage, booking, parts, active jobs, payments, reviews, and account screens.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {gariGallery.map((screen) => (
          <figure
            key={screen.src}
            className="overflow-hidden rounded-[1.35rem] border border-black/10 bg-white shadow-[0_14px_45px_-36px_rgba(17,16,14,0.28)]"
          >
            <div className="relative aspect-[9/19] w-full">
              <Image
                src={screen.src}
                alt={`Gari ${screen.title} screen`}
                fill
                sizes="(max-width: 640px) 46vw, (max-width: 1024px) 30vw, 220px"
                className="object-cover object-top"
              />
            </div>
            <figcaption className="border-t border-black/10 bg-white px-3 py-2 text-center text-[11px] font-bold text-[#5f5548]">
              {screen.title}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
