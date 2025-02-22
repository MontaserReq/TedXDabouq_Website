import { getAllSpeakers } from "@/data/speakers";
import ImgKT from "./ImgKT";
import DeleteSpeaker from "./delete-speaker";


export default async function Speakers() {
  const speakers = await getAllSpeakers();

  if (!speakers || speakers.length === 0) {
    return <p>No speakers found.</p>;
  }

  return (
    <ul>
      {speakers.map((speaker) => (
        <li key={speaker.id} className="mb-4 flex items-center justify-between">
          <div className="flex items-center">
            <div className="aspect-square w-12 object-cover rounded-full mr-4">
              <ImgKT
                src={speaker.Imgpath}
                alt={`${speaker.FName} ${speaker.LName}`}
              />
            </div>
            <div>
              <p className="font-semibold">
                {speaker.FName} {speaker.LName}
              </p>
              <a
                href={speaker.SocialLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                Social Link
              </a>
            </div>
          </div>
          <DeleteSpeaker id={speaker.id} />
        </li>
      ))}
    </ul>
  );
}
