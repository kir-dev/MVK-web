import { getSettings } from "@/lib/queries/settings.queries";
import { getClient } from "@/lib/sanity.client";
import Slideshow from "./Slideshow";

export default async function Introduction() {
  const client = getClient();
  const settings = await getSettings(client);
  return (
    <div className="w-screen relative h-[78vh] overflow-hidden">
      <Slideshow />
      <div className="h-fit p-10 absolute z-50 bg-white md:top-1/2 top-0 md:-translate-y-1/2 md:w-[40dvw] w-full">
        <p className="text-lg h-fit">{settings?.intro}</p>
      </div>
    </div>
  );
}
