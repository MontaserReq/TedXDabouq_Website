import { getAllSponsers } from "@/data/sponsers";
import ImgKT from "./ImgKT";

const Sponsors = async () => {
  const sponsors = await getAllSponsers();

  if (!sponsors || sponsors.length === 0) {
    return <p>No speakers found.</p>;
  }
  return (
    <>
      {sponsors.length > 0 ? (
        <ul>
          {sponsors.map((sponsor) => (
            <li key={sponsor.id} className="mb-4">
              <div className="flex items-center w-12 h-12 rounded-full mr-4">
                <ImgKT
                  src={sponsor.Imgpath}
                  alt={sponsor.Name}
                />
                <div>
                  <p className="font-semibold">{sponsor.Name}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No sponsors found.</p>
      )}
    </>
  );
};

export default Sponsors;
