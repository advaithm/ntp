import { MetadataContainer, MetadataContent, Attribution, Geolocation } from "../styles"

export const Metadata = ({ attribution }: { attribution: { l: string; lp: [number]; usn: string; n: string } }) => {
  const copyCoords = (location: { l: string; lp: [number]; usn: string; n: string }) => {
		if(typeof(navigator) == "undefined") return;

		let data = "";

		if(location.lp) data = `${location.lp[0]}, ${location.lp[1]}`;
		else data = location.l;

		navigator.clipboard.writeText(data);
    console.log(location)
		alert(`Copied "${data}" to clipboard.`)
  }
  
  return (
    <>
      <Attribution>
			  <a target={"__blank"} href={attribution.p}>Photo</a> by <a target={"__blank"} href={`https://unsplash.com/@${attribution.usn}`}>{attribution.n}</a> on <a target={"__blank"} href={`https://unsplash.com`}>Unsplash</a>
			</Attribution>

	    {attribution.l && <Geolocation>
			  <a style={{ cursor: "pointer" }} onClick={() => copyCoords(attribution)}>{attribution.l}</a>
      </Geolocation>}
    </>
  )
}