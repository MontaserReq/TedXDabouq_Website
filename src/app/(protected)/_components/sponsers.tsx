import { getAllSponsers } from "@/data/sponsers";
import ImgKT from "./ImgKT";
import DeleteSponser from "./delete-sponsor";

const Sponsors = async () => {
  const sponsors = await getAllSponsers();

  if (!sponsors || sponsors.length === 0) {
    return <p>No Sponsers found.</p>;
  }
  return (
    <>
      {sponsors.length > 0 ? (
        <ul>
          {sponsors.map((sponsor) => (
            <li
              key={sponsor.id}
              className="mb-4 flex items-center justify-between gap-4"
            >
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full mr-4 flex items-center">
                  <ImgKT src={sponsor.Imgpath} alt={sponsor.Name} />
                </div>
                <div className="flex items-center justify-start gap-10 w-fit">
                  <div>
                    <p className="font-semibold">{sponsor.Name}</p>
                  </div>
                  <div>
                    <p className="font-semibold">
                      Category: {sponsor.Category}
                    </p>
                  </div>
                </div>
              </div>
              <DeleteSponser id={sponsor.id} />
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
